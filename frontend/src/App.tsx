import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from '@/pages/Home';
import Register from '@/pages/Auth/Register';
import Login from '@/pages/Auth/Login';
import ErrorPage from '@/pages/ErrorPage';
import Dashboard from '@/pages/Utilisateurs/Dashboard';
import cvEdit from '@/pages/Utilisateurs/CvEdit'
import CvEdit from '@/pages/Utilisateurs/CvEdit';
import DashboardAnnonceurs from '@/pages/Annonceurs/DashboardAnnonceurs'
import DashboardAdmins from '@/pages/Admin/DashboardAdmins';

// import BentoClone from '@/pages/cv';


function App() {
  return (
    <div className="min-h-screen bg-white">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboardUtilisateurs" element={<Dashboard />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/cvEdit" element={<CvEdit />} />
        <Route path="/DashboardAnnonceurs" element={<DashboardAnnonceurs />} />
       <Route path="/DashboardAdmins" element={<DashboardAdmins />} />
       

       {/* <Route path="/cv" element={< BentoClone/>} /> */}

      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;