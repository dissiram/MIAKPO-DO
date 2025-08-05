export type UserRole = 'utilisateur' | 'annonceur' ;

export interface User {
  role: UserRole;
  name?: string;
}

export interface DashboardProps {
  user: User;
  onBack: () => void;
}