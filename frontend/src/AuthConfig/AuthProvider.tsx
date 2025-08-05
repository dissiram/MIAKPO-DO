// src/components/AuthProvider.tsx
import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged, User } from "firebase/auth";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) return <div>Chargement...</div>;

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
};

// Créez le contexte
import { createContext } from "react";
export const AuthContext = createContext<{ user: User | null }>({ user: null });