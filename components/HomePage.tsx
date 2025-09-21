import React, { useState } from 'react';

interface HomePageProps {
  onStartJourney: () => void;
}

const Modal: React.FC<{ show: boolean, onClose: () => void }> = ({ show, onClose }) => {
    if (!show) return null;
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center" onClick={onClose}>
            <div className="bg-white rounded-lg shadow-xl p-8 max-w-lg w-full transform transition-all" onClick={e => e.stopPropagation()}>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold text-gray-800">About MealAI.fit</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <p className="text-gray-600 mb-4">
                    MealAI.fit is an intelligent diet planner that uses the power of AI to create hyper-personalized meal plans. We believe that healthy eating should be simple, accessible, and delicious.
                </p>
                <p className="text-gray-600">
                    Whether your goal is to lose weight, build muscle, or simply maintain a healthy lifestyle, our application takes your unique profile—including age, weight, activity level, and dietary preferences—to generate a plan that's perfectly suited for you. Say goodbye to generic diets and hello to a smarter way of eating.
                </p>
            </div>
        </div>
    );
};


const HomePage: React.FC<HomePageProps> = ({ onStartJourney }) => {
  const [showModal, setShowModal] = useState(false);
  
  return (
    <div className="flex flex-col items-center justify-center h-full p-8 bg-gray-50/50 text-center">
        <Modal show={showModal} onClose={() => setShowModal(false)} />
        <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-yellow-100 text-yellow-800 text-sm font-semibold px-4 py-1 rounded-full mb-4">
                <span className="mr-2">✨</span>
                AI-Powered Nutrition
            </div>
            <h1 className="text-6xl font-extrabold text-gray-900 mb-4 leading-tight">
                Your Perfect Diet Plan<br />
                <span className="text-green-600">Made Simple</span>
            </h1>
            <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
                Get personalized meal plans that fit your goals, lifestyle, and dietary preferences. Transform your health journey with AI-powered nutrition guidance.
            </p>
            <div className="flex items-center justify-center space-x-4">
                <button 
                    onClick={onStartJourney}
                    className="bg-green-500 text-white font-semibold px-8 py-3 rounded-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center"
                >
                    Start Your Journey
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </button>
                <button
                    onClick={() => setShowModal(true)} 
                    className="font-semibold text-gray-700 hover:text-gray-900 transition-colors"
                >
                    Learn More
                </button>
            </div>
        </div>
    </div>
  );
};

export default HomePage;