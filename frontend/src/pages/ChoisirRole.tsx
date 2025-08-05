import React, { useState } from 'react';
import { RoleSelector } from '@/components/RoleSelector';
import { UserRole, User } from '@/index';
import  DashboardUtilisateurs  from '@/pages/Utilisateurs/Dashboard';
import  DashboardAnnonceurs  from '@/pages/Annonceurs/DashboardAnnonceurs';


type AppState = 'role-selection' | 'dashboard';



export default function ChoisirRole() {
  const [currentState, setCurrentState] = useState<AppState>('role-selection');
  const [user, setUser] = useState<User | null>(null);

  const handleRoleSelection = (role: UserRole) => {
    setUser({ role });
    setCurrentState('dashboard');
  };

  const handleBack = () => {
    setCurrentState('role-selection');
    setUser(null);
  };

  const renderDashboard = () => {
    if (!user) return null;

    switch (user.role) {
      case 'utilisateur':
        return <DashboardUtilisateurs user={user} onBack={handleBack}></DashboardUtilisateurs>;
      case 'annonceur':
        return <DashboardAnnonceurs user={user} onBack={handleBack} />;
    
      default:
        return null;
    }
  };

  if (currentState === 'dashboard') {
    return renderDashboard();
  }

  return <RoleSelector onNext={handleRoleSelection} />;
}
