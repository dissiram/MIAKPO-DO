import React from "react";
import { Link } from "react-router-dom";
import errImg from "@/assets/error.svg";

const ErrorPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-blue-50 rounded-xl shadow-md p-8 w-full max-w-md flex flex-col items-center relative">
        <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl" aria-label="Fermer">
          &times;
        </button>
        <img src={errImg} alt="Erreur illustration" className="w-32 h-32 mb-6" />
        <p className="text-center text-gray-500 mb-6">
          Veuillez creer ou vous connecter a un compte avant<br />
          d'accéder à cette page.
        </p>
        <div className="flex items-center gap-2 text-blue-600 text-sm">
          <Link to="/register" className="hover:underline">creer un compte</Link>
          <span className="text-gray-400">|</span>
          <Link to="/login" className="hover:underline">se connecter</Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage; 