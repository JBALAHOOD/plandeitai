import React from 'react';
import { LogoIcon, HomeIcon, CreatePlanIcon, MyPlansIcon } from '../constants';

interface HeaderProps {
  onNavigate: (view: 'home' | 'createPlan' | 'myPlans') => void;
  activeView: string;
  plansCreated: number;
  goalsAchieved: number;
}

const NavItem: React.FC<{ icon: React.ReactNode; label: string; isActive: boolean; onClick: () => void }> = ({ icon, label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors text-sm font-medium ${
      isActive
        ? 'bg-green-100 text-green-700'
        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
    }`}
    aria-current={isActive ? 'page' : undefined}
  >
    {icon}
    <span>{label}</span>
  </button>
);


const Header: React.FC<HeaderProps> = ({ onNavigate, activeView, plansCreated, goalsAchieved }) => {
  return (
    <header className="w-full bg-white border-b border-gray-200 flex-shrink-0">
        <div className="flex items-center justify-between px-6 h-20 max-w-screen-2xl mx-auto">
            {/* Left: Logo & Title */}
            <div className="flex items-center space-x-3">
                <LogoIcon />
                <div>
                    <h1 className="text-xl font-bold text-gray-800">MealAI.fit</h1>
                    <p className="text-sm text-gray-500">AI Diet Plans</p>
                </div>
            </div>

            {/* Center: Navigation */}
            <nav className="flex items-center space-x-2">
                <NavItem 
                    icon={<HomeIcon />} 
                    label="Home" 
                    isActive={activeView === 'home'} 
                    onClick={() => onNavigate('home')} 
                />
                <NavItem 
                    icon={<CreatePlanIcon />} 
                    label="Create Plan" 
                    isActive={activeView === 'createPlan' || activeView === 'planGenerated'} 
                    onClick={() => onNavigate('createPlan')}
                />
                <NavItem 
                    icon={<MyPlansIcon />} 
                    label="My Plans" 
                    isActive={activeView === 'myPlans'} 
                    onClick={() => onNavigate('myPlans')}
                />
            </nav>

            {/* Right: Health Journey */}
            <div className="flex items-center space-x-6 text-sm text-gray-700 font-medium">
                <div className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-green-400 mr-2"></span>
                    <span>Plans Created:</span>
                    <span className="font-bold text-gray-800 ml-1.5">{plansCreated}</span>
                </div>
                <div className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-rose-400 mr-2"></span>
                    <span>Goals Achieved:</span>
                    <span className="font-bold text-gray-800 ml-1.5">{goalsAchieved}</span>
                </div>
            </div>
        </div>
    </header>
  );
};

export default Header;