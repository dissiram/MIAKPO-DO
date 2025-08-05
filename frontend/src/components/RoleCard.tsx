import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface RoleCardProps {
  title: string;
  isSelected: boolean;
  onClick: () => void;
}

export const RoleCard: React.FC<RoleCardProps> = ({
  title,
  icon: Icon,
  isSelected,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        relative p-8 rounded-2xl transition-all duration-300 transform hover:scale-105
        ${isSelected 
          ? 'bg-white border-2 border-indigo-500 shadow-lg' 
          : 'bg-white border border-gray-200 hover:border-indigo-300 hover:shadow-md'
        }
        focus:outline-none focus:ring-4 focus:ring-indigo-300 focus:ring-opacity-50
        min-h-[180px] w-full max-w-[200px]
      `}
    >
      {/* Selection indicator */}
      {isSelected && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
      )}
      
      <div className="flex flex-col items-center space-y-4">
        <div className={`
          p-4 rounded-xl transition-colors duration-300
          ${isSelected 
            ? 'bg-indigo-100 text-indigo-600' 
            : 'bg-gray-100 text-gray-600'
          }
        `}>
          <Icon size={32} strokeWidth={1.5} />
        </div>
        <h3 className={`
          text-sm font-medium uppercase tracking-wide transition-colors duration-300
          ${isSelected ? 'text-indigo-600' : 'text-gray-600'}
        `}>
          {title}
        </h3>
      </div>
    </button>
  );
};