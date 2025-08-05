import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from '@/AuthConfig/AuthProvider';
import Home from '@/pages/Home';
import ChoisirRole from '@/pages/ChoisirRole';
import Register from '@/pages/Auth/Register';
import Login from '@/pages/Auth/Login';
import ErrorPage from '@/pages/ErrorPage';
import Dashboard from '@/pages/Utilisateurs/Dashboard';
import CvEdit from '@/pages/Utilisateurs/CvEdit';
import DashboardAnnonceurs from '@/pages/Annonceurs/DashboardAnnonceurs';
import Cv from '@/pages/Utilisateurs/Cv';
import DashboardAdmins from '@/pages/Admin/DashboardAdmins';
import Demandeurs from '@/pages/Demandeurs';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/ChoisirRole" element={<ChoisirRole />} />
            <Route path="/dashboardUtilisateurs" element={<Dashboard />} />
            <Route path="/error" element={<ErrorPage />} />
            <Route path="/cvEdit" element={<CvEdit />} />
            <Route path="/cv/:username" element={<Cv />} />
            <Route path="/DashboardAnnonceurs" element={<DashboardAnnonceurs />} />
            <Route path="/DashboardAdmins" element={<DashboardAdmins />} />
            <Route path="/Demandeurs" element={<Demandeurs />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;