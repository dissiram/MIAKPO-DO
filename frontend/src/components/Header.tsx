import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.svg';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={logo} alt="logo" className="w-32" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-700 hover:text-blue-600">Demandeurs</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Centre d'aide</a>
            <a href="#" className="text-blue-600 hover:text-blue-700">S'identifier</a>
            <a href="#" className="text-blue-600 hover:text-blue-700">S'enregistrer</a>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6">Créer une offre</Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 focus:outline-none">
              {/* Icône burger */}
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
                   viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu (affiché si ouvert) */}
        {isOpen && (
          <div className="md:hidden  space-y-5  text-center">
            <a href="#" className="block text-gray-700 hover:text-blue-600">Demandeurs</a>
            <a href="#" className="block text-gray-700 hover:text-blue-600">Centre d'aide</a>
            <a href="#" className="block text-blue-600 hover:text-blue-700">S'identifier</a>
            <a href="#" className="block text-blue-600 hover:text-blue-700">S'enregistrer</a>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Créer une offre</Button>
          </div>
        )}
      </div>
    </header>
  );
}
