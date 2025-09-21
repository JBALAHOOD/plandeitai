
import React from 'react';
import type { UserData } from '../types';
import { GOALS, GoalIcon } from '../constants';

interface StepGoalProps {
  data: UserData;
  onUpdate: (data: Partial<UserData>) => void;
}

const StepGoal: React.FC<StepGoalProps> = ({ data, onUpdate }) => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">What's your main goal?</h2>
      <p className="text-gray-600 mb-10">Choose the option that best describes what you want to achieve</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {GOALS.map((goal, index) => (
          <div
            key={goal.id}
            onClick={() => onUpdate({ goal: goal.id })}
            className={`p-6 bg-white border-2 rounded-2xl cursor-pointer transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg ${data.goal === goal.id ? 'border-green-500 shadow-md' : 'border-gray-200'}`}
          >
            <div className="flex justify-center mb-4">
              <GoalIcon index={index} />
            </div>
            <h3 className="font-bold text-lg text-gray-800 mb-1">{goal.title}</h3>
            <p className="text-sm text-gray-500">{goal.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepGoal;
