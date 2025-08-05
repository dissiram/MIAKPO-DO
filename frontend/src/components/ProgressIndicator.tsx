import React from 'react';

interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  currentStep,
  totalSteps,
}) => {
  return (
    <div className="flex justify-center space-x-2 mb-8">
      {Array.from({ length: totalSteps }, (_, index) => (
        <div
          key={index}
          className={`
            w-2 h-2 rounded-full transition-colors duration-300
            ${index < currentStep 
              ? 'bg-indigo-700' 
              : index === currentStep 
                ? 'bg-indigo-200' 
                : 'bg-gray-300'
            }
          `}
        />
      ))}
    </div>
  );
};