
import React, { useState } from 'react';
import type { UserData } from '../types';
import StepGoal from './StepGoal';
import StepDetails from './StepDetails';
import StepActivity from './StepActivity';
import StepDiet from './StepDiet';
import LoadingSpinner from './LoadingSpinner';

interface WizardProps {
  onComplete: (data: UserData) => void;
}

const Wizard: React.FC<WizardProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<UserData>({
    goal: 'lose_weight',
    age: 25,
    gender: '',
    currentWeight: 70,
    targetWeight: 65,
    activityLevel: 'sedentary',
    dietaryPreference: 'no_restrictions',
  });

  const totalSteps = 4;

  const handleUpdate = (data: Partial<UserData>) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsLoading(true);
      onComplete(formData);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <StepGoal data={formData} onUpdate={handleUpdate} />;
      case 2:
        return <StepDetails data={formData} onUpdate={handleUpdate} />;
      case 3:
        return <StepActivity data={formData} onUpdate={handleUpdate} />;
      case 4:
        return <StepDiet data={formData} onUpdate={handleUpdate} />;
      default:
        return null;
    }
  };

  if (isLoading) {
      return (
          <div className="flex flex-col items-center justify-center h-full text-center">
              <LoadingSpinner />
              <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-2">Generating Your Plan...</h2>
              <p className="text-gray-600 max-w-md">Our AI is crunching the numbers and crafting the perfect diet tailored just for you. This might take a moment.</p>
          </div>
      );
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow flex items-center justify-center p-4 sm:p-8">
        <div className="w-full max-w-4xl">
          {renderStep()}
        </div>
      </div>
      <div className="border-t border-gray-200 bg-white p-4 flex justify-between items-center">
        {currentStep > 1 ? (
          <button onClick={prevStep} className="flex items-center font-semibold text-gray-600 hover:text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Previous
          </button>
        ) : <div />}
        <button onClick={nextStep} className="bg-green-500 text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-green-600 transition-colors flex items-center space-x-2">
          <span>Continue</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
        </button>
      </div>
    </div>
  );
};

export default Wizard;
