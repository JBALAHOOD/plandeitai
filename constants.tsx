import React from 'react';

export const GOALS = [
  { id: 'lose_weight', title: 'Lose Weight', description: 'Shed pounds with a sustainable calorie deficit' },
  { id: 'gain_weight', title: 'Gain Weight', description: 'Build healthy mass with nutritious foods' },
  { id: 'build_muscle', title: 'Build Muscle', description: 'Optimize protein intake for lean muscle growth' },
  { id: 'maintain_health', title: 'Maintain Health', description: 'Balanced nutrition for overall wellness' },
];

export const ACTIVITY_LEVELS = [
  { id: 'sedentary', title: 'Sedentary', description: 'Little to no exercise, desk job', multiplier: 'BMR × 1.2x' },
  { id: 'lightly_active', title: 'Lightly Active', description: 'Light exercise 1-3 days/week', multiplier: 'BMR × 1.375x' },
  { id: 'moderately_active', title: 'Moderately Active', description: 'Moderate exercise 3-5 days/week', multiplier: 'BMR × 1.55x' },
  { id: 'very_active', title: 'Very Active', description: 'Heavy exercise 6-7 days/week', multiplier: 'BMR × 1.725x' },
];

export const DIETARY_PREFERENCES = [
  { id: 'no_restrictions', title: 'No Restrictions', description: 'All foods included' },
  { id: 'vegetarian', title: 'Vegetarian', description: 'No meat, includes dairy & eggs' },
  { id: 'vegan', title: 'Vegan', description: 'Plant-based only' },
  { id: 'ketogenic', title: 'Ketogenic', description: 'High fat, very low carb' },
  { id: 'halal', title: 'Halal', description: 'Islamic dietary guidelines' },
  { id: 'gluten_free', title: 'Gluten-Free', description: 'No wheat, barley, or rye' },
];

export const LogoIcon = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="20" fill="#E0F2E9" />
        <path d="M26.6,18.55c-1-3.39-4.32-5.4-7.71-4.41c-2.31,0.68-4.1,2.47-4.78,4.78c-1,3.39,1.01,6.71,4.41,7.71 c3.39,1,6.71-1.01,7.71-4.41C26.54,21.36,26.83,20,26.6,18.55z M14.24,19c0.41-1.38,1.38-2.5,2.65-3.09 c2.1-0.62,4.3,0.34,5.4,2.2c0.62,1.04,0.8,2.26,0.52,3.43c-0.41,1.38-1.38,2.5-2.65,3.09c-2.1,0.62-4.3-0.34-5.4-2.2 C14.14,21.3,13.96,20.08,14.24,19z" fill="#34D399"/>
    </svg>
);


export const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
);

export const CreatePlanIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z" /></svg>
);

export const MyPlansIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
);


export const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
);

const iconBaseClasses = "w-12 h-12 rounded-xl flex items-center justify-center text-white";

export const GoalIcon = ({ index }: { index: number }) => {
    const icons = [
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 12-2 2 2 2"/><path d="m15 12 2 2-2 2"/><path d="M12 19.5v-15"/></svg>,
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>,
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.59a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>,
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>,
    ];
    const colors = ["bg-gradient-to-br from-pink-500 to-rose-500", "bg-gradient-to-br from-cyan-500 to-blue-500", "bg-gradient-to-br from-indigo-500 to-purple-500", "bg-gradient-to-br from-emerald-400 to-green-500"];
    return <div className={`${iconBaseClasses} ${colors[index]}`}>{icons[index]}</div>;
};

export const ActivityIcon = ({ index }: { index: number }) => {
    const icons = [
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 18.5a2.5 2.5 0 0 1-5 0"/><path d="M20 11.56V10a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v1.56"/><path d="M21 15.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 5 15.5V12a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3.5Z"/></svg>,
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.5a5.5 5.5 0 0 1 5.5 5.5c0 1.5-1 3-2.5 3H13a2.5 2.5 0 0 0 0 5h1.5c1.5 0 2.5 1.5 2.5 3a5.5 5.5 0 0 1-5.5 5.5"/><path d="M12 2.5a5.5 5.5 0 0 0-5.5 5.5c0 1.5 1 3 2.5 3H9a2.5 2.5 0 0 1 0 5H7.5c-1.5 0-2.5 1.5-2.5 3A5.5 5.5 0 0 0 12 21.5"/></svg>,
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6c-2.5 1.5-5 1.5-7.5 0"/><path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"/><path d="M14 16.5a6 6 0 1 0-8 0"/><circle cx="12" cy="12" r="2"/></svg>,
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m13 17 2 2.5-2 2.5"/><path d="m18 17-2 2.5 2 2.5"/><path d="M2 13.1a1 1 0 0 0-1 1V17a1 1 0 0 0 1 1h2.1a1 1 0 0 0 1-.7l.9-2.4a1 1 0 0 1 1-.6h6.8a1 1 0 0 0 1-.7l.9-2.4a1 1 0 0 0-1-1.2H2Z"/><path d="m4.1 4.5 2 2"/><path d="M10 10.5 8 8.5"/><path d="m14 7.5-2 2"/><path d="m20.1 10.5-2-2"/></svg>,
    ];
    const colors = ["bg-gray-400", "bg-gradient-to-br from-orange-400 to-yellow-400", "bg-gradient-to-br from-blue-500 to-indigo-500", "bg-gradient-to-br from-rose-500 to-red-500"];
    return <div className={`${iconBaseClasses} ${colors[index]}`}>{icons[index]}</div>;
};

export const DietIcon = ({ index }: { index: number }) => {
    const icons = [
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>,
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2Z"/><path d="M12 18s-4-3-4-8c0-2.2 1.8-4 4-4 2.2 0 4 1.8 4 4 0 5-4 8-4 8Z"/></svg>,
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.73 18a2.6 2.6 0 0 0-2.26-1.4H4.53a2.6 2.6 0 0 0-2.26 1.4L2 22h20z"/><path d="M4.6 16.6C3 15.6 2 13.9 2 12a10 10 0 1 1 20 0c0 1.9-1 3.6-2.6 4.6"/></svg>,
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 6h9"/><path d="m14 10-5.5 5.5"/><path d="m15 11 1 1"/><path d="M7 12h.01"/><path d="M11 16h.01"/><path d="M15 20h.01"/><rect width="20" height="20" x="2" y="2" rx="5"/></svg>,
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10c0-4.42-2.85-8.17-6.83-9.52"/></svg>,
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><path d="M19 18H5"/><path d="M19 6H5"/><path d="M12 21V3"/></svg>,
    ];
    const colors = ["bg-green-400", "bg-emerald-500", "bg-teal-500", "bg-gradient-to-br from-indigo-500 to-purple-500", "bg-gradient-to-br from-cyan-500 to-blue-500", "bg-gradient-to-br from-orange-500 to-red-500"];
    return <div className={`${iconBaseClasses} ${colors[index]}`}>{icons[index]}</div>;
};

export const DetailsIcon = ({ type }: { type: 'personal' | 'weight' }) => {
    const icon = type === 'personal' ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
    ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v18"/><path d="M17 6l-5 5-5-5"/><path d="M17 18l-5-5-5 5"/></svg>
    );
    const color = type === 'personal' ? 'bg-green-100 text-green-600' : 'bg-rose-100 text-rose-600';
    return <div className={`w-10 h-10 rounded-full flex items-center justify-center ${color}`}>{icon}</div>;
};