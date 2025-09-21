import React from 'react';
import jsPDF from 'jspdf';
import type { Meal, MealPlan, SavedMealPlan } from '../types';

interface MealPlanProps {
  plan: MealPlan | SavedMealPlan | null;
  onRegenerate: () => void;
  onSave: () => void;
}

const MealCard: React.FC<{ title: string; meal: Meal }> = ({ title, meal }) => (
  <div className="bg-white p-6 rounded-2xl border border-gray-200">
    <h3 className="text-xl font-bold text-gray-800 mb-4">{title} - <span className="text-green-600">{meal.name}</span></h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h4 className="font-semibold text-gray-700 mb-2">Ingredients</h4>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          {meal.ingredients.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </div>
      <div>
        <h4 className="font-semibold text-gray-700 mb-2">Instructions</h4>
        <p className="text-gray-600 whitespace-pre-line">{meal.instructions}</p>
      </div>
    </div>
  </div>
);

const StatCard: React.FC<{ label: string; value: number; unit: string; color: string }> = ({ label, value, unit, color }) => (
  <div className={`p-4 rounded-xl bg-opacity-10 ${color}`}>
    <p className="text-sm font-medium text-gray-600">{label}</p>
    <p className="text-2xl font-bold text-gray-800">{Math.round(value)} <span className="text-base font-normal">{unit}</span></p>
  </div>
);

const MealPlanComponent: React.FC<MealPlanProps> = ({ plan, onRegenerate, onSave }) => {
  const handleDownloadPDF = () => {
    if (!plan) return;

    const doc = new jsPDF();
    const pageMargin = 15;
    const pageWidth = doc.internal.pageSize.getWidth();
    const usableWidth = pageWidth - (pageMargin * 2);
    let y = 20; // Y position cursor

    const checkPageBreak = (requiredHeight: number) => {
      if (y + requiredHeight > doc.internal.pageSize.getHeight() - pageMargin) {
        doc.addPage();
        y = pageMargin;
      }
    };

    // --- PDF Content ---

    // Title
    doc.setFontSize(22);
    doc.setFont('helvetica', 'bold');
    doc.text("Your Personalized Meal Plan", pageWidth / 2, y, { align: 'center' });
    y += 15;

    // Summary
    doc.setFontSize(16);
    doc.text("Daily Summary", pageMargin, y);
    y += 8;
    
    doc.setFontSize(11);
    doc.setFont('helvetica', 'normal');
    const summaryText = `  • Total Calories: ${Math.round(plan.summary.totalCalories)} kcal\n  • Protein: ${Math.round(plan.summary.protein)}g\n  • Carbohydrates: ${Math.round(plan.summary.carbs)}g\n  • Fat: ${Math.round(plan.summary.fat)}g`;
    doc.text(summaryText, pageMargin, y);
    y += 20;

    // Meals
    const meals: { title: string; meal: Meal }[] = [
        { title: 'Breakfast', meal: plan.meals.breakfast },
        { title: 'Lunch', meal: plan.meals.lunch },
        { title: 'Dinner', meal: plan.meals.dinner },
        { title: 'Snacks', meal: plan.meals.snacks },
    ];
    
    meals.forEach(({ title, meal }) => {
        const mealTitle = `${title}: ${meal.name}`;
        const ingredientsText = meal.ingredients.map(item => `• ${item}`);
        const instructionsText = doc.splitTextToSize(meal.instructions, usableWidth - 5);
        
        const sectionHeight = 10 + (ingredientsText.length * 5) + (instructionsText.length * 5) + 15;
        checkPageBreak(sectionHeight);
        
        doc.setFontSize(16);
        doc.setFont('helvetica', 'bold');
        doc.text(mealTitle, pageMargin, y);
        y += 10;
        
        doc.setFontSize(12);
        doc.text("Ingredients:", pageMargin + 5, y);
        y += 6;
        
        doc.setFontSize(11);
        doc.setFont('helvetica', 'normal');
        doc.text(ingredientsText.join('\n'), pageMargin + 5, y);
        y += (ingredientsText.length * 5) + 4;
        
        doc.setFontSize(12);
        doc.setFont('helvetica', 'bold');
        doc.text("Instructions:", pageMargin + 5, y);
        y += 6;
        
        doc.setFontSize(11);
        doc.setFont('helvetica', 'normal');
        doc.text(instructionsText, pageMargin + 5, y);
        y += (instructionsText.length * 5) + 10;
    });

    doc.save('MealAI-fit-Meal-Plan.pdf');
  };

  if (!plan) {
    return (
        <div className="flex flex-col items-center justify-center h-full">
            <h2 className="text-2xl font-bold text-gray-800">Something went wrong</h2>
            <p className="text-gray-600 mb-4">We couldn't generate your meal plan. Please try again.</p>
            <button onClick={onRegenerate} className="bg-green-500 text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-green-600 transition-colors">
                Try Again
            </button>
        </div>
    );
  }

  const isSaved = 'id' in plan;

  return (
    <div className="p-8 bg-gray-50/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
            <div>
                <h1 className="text-4xl font-bold text-gray-800">Your Personalized Meal Plan</h1>
                <p className="text-gray-600">Here is your AI-generated one-day meal plan to help you reach your goals.</p>
            </div>
            <div className="flex items-center space-x-2">
                 <button onClick={onRegenerate} className="bg-gray-200 text-gray-800 font-semibold px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors">
                    Regenerate
                </button>
                {isSaved ? (
                  <button disabled className="bg-green-200 text-green-800 font-semibold px-4 py-2 rounded-lg cursor-not-allowed flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    Saved
                  </button>
                ) : (
                  <button onClick={onSave} className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                    Save Plan
                  </button>
                )}
                 <button onClick={handleDownloadPDF} className="bg-green-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
                    Download PDF
                </button>
            </div>
        </div>
        
        {/* Summary Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <StatCard label="Total Calories" value={plan.summary.totalCalories} unit="kcal" color="bg-orange-500" />
            <StatCard label="Protein" value={plan.summary.protein} unit="g" color="bg-red-500" />
            <StatCard label="Carbs" value={plan.summary.carbs} unit="g" color="bg-blue-500" />
            <StatCard label="Fat" value={plan.summary.fat} unit="g" color="bg-yellow-500" />
        </div>

        {/* Meal Cards */}
        <div className="space-y-6">
            <MealCard title="Breakfast" meal={plan.meals.breakfast} />
            <MealCard title="Lunch" meal={plan.meals.lunch} />
            <MealCard title="Dinner" meal={plan.meals.dinner} />
            <MealCard title="Snacks" meal={plan.meals.snacks} />
        </div>
      </div>
    </div>
  );
};

export default MealPlanComponent;