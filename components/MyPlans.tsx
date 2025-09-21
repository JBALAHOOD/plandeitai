import React from 'react';
import type { SavedMealPlan } from '../types';
import { MyPlansIcon } from '../constants';

interface MyPlansProps {
  savedPlans: SavedMealPlan[];
  onView: (plan: SavedMealPlan) => void;
  onDelete: (planId: string) => void;
  onCreatePlan: () => void;
}

const MyPlans: React.FC<MyPlansProps> = ({ savedPlans, onView, onDelete, onCreatePlan }) => {
  if (savedPlans.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center p-8">
        <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mb-6 text-gray-500">
          <MyPlansIcon />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">No Saved Plans Yet</h2>
        <p className="text-gray-600 mb-6 max-w-sm">
          It looks like you haven't saved any meal plans. Create a new plan to get started on your health journey!
        </p>
        <button 
          onClick={onCreatePlan}
          className="bg-green-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-600 transition-all duration-300 shadow-sm"
        >
          Create a New Plan
        </button>
      </div>
    );
  }

  return (
    <div className="p-8 bg-gray-50/50 min-h-full">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">My Saved Plans</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedPlans.map(plan => (
            <div key={plan.id} className="bg-white p-6 rounded-2xl border border-gray-200 flex flex-col justify-between hover:shadow-lg transition-shadow">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-800">{plan.goal} Plan</h3>
                  <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    {new Date(plan.savedAt).toLocaleDateString()}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-4 border-t border-b border-gray-100 py-3 mt-3">
                  <span>🔥 {Math.round(plan.summary.totalCalories)} kcal</span>
                  <span>💪 {Math.round(plan.summary.protein)}g Protein</span>
                  <span>🌾 {Math.round(plan.summary.carbs)}g Carbs</span>
                  <span>🥑 {Math.round(plan.summary.fat)}g Fat</span>
                </div>
              </div>
              <div className="flex space-x-2 mt-4">
                <button 
                  onClick={() => onView(plan)}
                  className="flex-1 bg-green-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
                >
                  View
                </button>
                <button 
                  onClick={() => onDelete(plan.id)}
                  aria-label="Delete Plan"
                  className="bg-red-100 text-red-600 p-2 rounded-lg hover:bg-red-200 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 012 0v6a1 1 0 11-2 0V8z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyPlans;
