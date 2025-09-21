import React, { useState, useCallback, useEffect } from 'react';
import Header from './components/Sidebar';
import HomePage from './components/HomePage';
import Wizard from './components/Wizard';
import MealPlanComponent from './components/MealPlan';
import MyPlans from './components/MyPlans';
import { generateMealPlan } from './services/geminiService';
import type { UserData, MealPlan, SavedMealPlan } from './types';
import { GOALS } from './constants';


type View = 'home' | 'createPlan' | 'planGenerated' | 'myPlans';

const App: React.FC = () => {
  const [view, setView] = useState<View>('home');
  const [mealPlan, setMealPlan] = useState<MealPlan | SavedMealPlan | null>(null);
  const [savedPlans, setSavedPlans] = useState<SavedMealPlan[]>([]);
  const [currentUserData, setCurrentUserData] = useState<UserData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const storedPlans = localStorage.getItem('mealai-fit-plans');
      if (storedPlans) {
        setSavedPlans(JSON.parse(storedPlans));
      }
    } catch (e) {
      console.error("Failed to parse saved plans from localStorage", e);
      setSavedPlans([]);
    }
  }, []);

  const persistPlans = (plans: SavedMealPlan[]) => {
    localStorage.setItem('mealai-fit-plans', JSON.stringify(plans));
  };

  const handleNavigate = useCallback((newView: 'home' | 'createPlan' | 'myPlans') => {
    setView(newView);
    setMealPlan(null);
    setError(null);
  }, []);

  const handlePlanGenerated = useCallback(async (data: UserData) => {
    try {
      setError(null);
      setCurrentUserData(data);
      const plan = await generateMealPlan(data);
      setMealPlan(plan);
      setView('planGenerated');
    } catch (err) {
        if (err instanceof Error) {
            setError(err.message);
        } else {
            setError("An unknown error occurred.");
        }
      setMealPlan(null);
      setView('planGenerated');
    }
  }, []);
  
  const handleSavePlan = useCallback(() => {
    if (mealPlan && !('id' in mealPlan) && currentUserData) {
      const goalTitle = GOALS.find(g => g.id === currentUserData.goal)?.title || 'Meal Plan';
      const newSavedPlan: SavedMealPlan = {
        ...mealPlan,
        id: new Date().toISOString(),
        savedAt: new Date().toISOString(),
        goal: goalTitle,
      };
      const updatedPlans = [...savedPlans, newSavedPlan];
      setSavedPlans(updatedPlans);
      persistPlans(updatedPlans);
      setMealPlan(newSavedPlan);
    }
  }, [mealPlan, savedPlans, currentUserData]);

  const handleDeletePlan = useCallback((planId: string) => {
    const updatedPlans = savedPlans.filter(p => p.id !== planId);
    setSavedPlans(updatedPlans);
    persistPlans(updatedPlans);
  }, [savedPlans]);

  const handleViewSavedPlan = useCallback((plan: SavedMealPlan) => {
    setMealPlan(plan);
    setView('planGenerated');
  }, []);

  const handleRegenerate = () => {
    setView('createPlan');
    setMealPlan(null);
    setError(null);
  }

  const renderContent = () => {
    switch (view) {
      case 'home':
        return <HomePage onStartJourney={() => handleNavigate('createPlan')} />;
      case 'createPlan':
        return <Wizard onComplete={handlePlanGenerated} />;
      case 'planGenerated':
        return <MealPlanComponent plan={mealPlan} onRegenerate={handleRegenerate} onSave={handleSavePlan} />;
      case 'myPlans':
        return <MyPlans savedPlans={savedPlans} onView={handleViewSavedPlan} onDelete={handleDeletePlan} onCreatePlan={() => handleNavigate('createPlan')} />;
      default:
        return <HomePage onStartJourney={() => handleNavigate('createPlan')} />;
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50/50 font-sans">
      <Header 
        onNavigate={handleNavigate} 
        activeView={view} 
        plansCreated={savedPlans.length} 
        goalsAchieved={0} 
      />
      <main className="flex-1 overflow-y-auto">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;