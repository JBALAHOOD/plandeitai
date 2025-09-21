
import React from 'react';
import type { UserData } from '../types';
import { DetailsIcon } from '../constants';

interface StepDetailsProps {
  data: UserData;
  onUpdate: (data: Partial<UserData>) => void;
}

const StepDetails: React.FC<StepDetailsProps> = ({ data, onUpdate }) => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Tell us about yourself</h2>
      <p className="text-gray-600 mb-10">This helps us calculate your personalized calorie needs</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto text-left">
        {/* Personal Details */}
        <div className="bg-white p-6 border border-gray-200 rounded-2xl">
          <div className="flex items-center mb-6">
            <DetailsIcon type="personal" />
            <h3 className="text-xl font-bold text-gray-800 ml-4">Personal Details</h3>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
              <input
                type="number"
                value={data.age}
                onChange={(e) => onUpdate({ age: parseInt(e.target.value, 10) || 0 })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
              <select
                value={data.gender}
                onChange={(e) => onUpdate({ gender: e.target.value as UserData['gender'] })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
              >
                <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
        </div>

        {/* Weight Goals */}
        <div className="bg-white p-6 border border-gray-200 rounded-2xl">
          <div className="flex items-center mb-6">
            <DetailsIcon type="weight" />
            <h3 className="text-xl font-bold text-gray-800 ml-4">Weight Goals</h3>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Current Weight (kg)</label>
              <input
                type="number"
                value={data.currentWeight}
                onChange={(e) => onUpdate({ currentWeight: parseFloat(e.target.value) || 0 })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Target Weight (kg)</label>
              <input
                type="number"
                value={data.targetWeight}
                onChange={(e) => onUpdate({ targetWeight: parseFloat(e.target.value) || 0 })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepDetails;
