
import React from 'react';
import type { UserData } from '../types';
import { DIETARY_PREFERENCES, DietIcon } from '../constants';

interface StepDietProps {
  data: UserData;
  onUpdate: (data: Partial<UserData>) => void;
}

const StepDiet: React.FC<StepDietProps> = ({ data, onUpdate }) => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Any dietary preferences?</h2>
      <p className="text-gray-600 mb-10">We'll tailor your meal plan to fit your lifestyle and restrictions</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {DIETARY_PREFERENCES.map((diet, index) => (
          <div
            key={diet.id}
            onClick={() => onUpdate({ dietaryPreference: diet.id })}
            className={`p-6 bg-white border-2 rounded-2xl cursor-pointer transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg flex flex-col items-center text-center ${data.dietaryPreference === diet.id ? 'border-green-500 shadow-md' : 'border-gray-200'}`}
          >
            <div className="mb-4">
              <DietIcon index={index} />
            </div>
            <h3 className="font-bold text-lg text-gray-800">{diet.title}</h3>
            <p className="text-sm text-gray-500">{diet.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepDiet;
