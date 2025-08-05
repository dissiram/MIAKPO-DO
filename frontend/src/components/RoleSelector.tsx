import React, { useState } from 'react';
import {  Speech, UsersRound } from 'lucide-react';
import { RoleCard } from './RoleCard';
import { ProgressIndicator } from './ProgressIndicator';
import { UserRole } from '@/index';

interface RoleSelectorProps {
  onNext: (selectedRole: UserRole) => void;
}

const roles = [
  {
    id: 'utilisateur' as UserRole,
    title: 'DEMANDEURS',
    icon: UsersRound,
  },
  {
    id: 'annonceur' as UserRole,
    title: 'ANNONCEURS',
    icon: Speech,
  },
 
];

export const RoleSelector: React.FC<RoleSelectorProps> = ({ onNext }) => {
  const [selectedRole, setSelectedRole] = useState<UserRole>('utilisateur');

  const handleNext = () => {
    onNext(selectedRole);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 max-w-4xl w-full">
        {/* Progress Indicator */}
        <ProgressIndicator currentStep={2} totalSteps={2} />

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-light text-indigo-600 mb-4">
            Choisissez votre rôle
          </h1>
          <p>Voulez-vous publier des offres en tant qu'annonceurs? Ou recherchez- vous des offres sur mesures pour vous? </p>

        </div>

        {/* Role Cards */}
        <div className="flex justify-center items-center gap-8 mb-12 flex-wrap">
          {roles.map((role) => (
            <RoleCard
              key={role.id}
              title={role.title}
              icon={role.icon}
              isSelected={selectedRole === role.id}
              onClick={() => setSelectedRole(role.id)}
            />
          ))}
        </div>

        {/* Next Button */}
        <div className="flex justify-center">
          <button
            onClick={handleNext}
            className="bg-indigo-500 text-white px-8 py-4 rounded-2xl font-medium hover:bg-indigo-600 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-indigo-300 focus:ring-opacity-50"
          >
            <span>Valider</span>
          </button>
        </div>
      </div>
    </div>
  );
};