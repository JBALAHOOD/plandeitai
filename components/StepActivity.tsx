
import React from 'react';
import type { UserData } from '../types';
import { ACTIVITY_LEVELS, ActivityIcon } from '../constants';

interface StepActivityProps {
  data: UserData;
  onUpdate: (data: Partial<UserData>) => void;
}

const StepActivity: React.FC<StepActivityProps> = ({ data, onUpdate }) => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-10">How active are you?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {ACTIVITY_LEVELS.map((level, index) => (
          <div
            key={level.id}
            onClick={() => onUpdate({ activityLevel: level.id })}
            className={`p-6 bg-white border-2 rounded-2xl cursor-pointer transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg flex flex-col items-center text-center ${data.activityLevel === level.id ? 'border-green-500 shadow-md' : 'border-gray-200'}`}
          >
            <div className="mb-4">
              <ActivityIcon index={index} />
            </div>
            <h3 className="font-bold text-lg text-gray-800">{level.title}</h3>
            <p className="text-sm text-gray-500 mb-3 flex-grow">{level.description}</p>
            <div className="text-xs font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
              {level.multiplier}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepActivity;
