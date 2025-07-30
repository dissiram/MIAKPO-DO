import React, { useState } from "react";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Register: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    terms: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Ajouter la logique d'inscription
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold mb-8 text-center">Creer un compte</h1>
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg px-8 pt-8 pb-6 space-y-6"
        >
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Nom complet</label>
            <Input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="First & Last Name"
              className="w-full bg-white"
              required
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Adresse email</label>
            <Input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full bg-white"
              required
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Mot de passe</label>
            <Input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Create Password"
              className="w-full bg-white"
              required
            />
          </div>
          
          <div className="flex justify-center">
            <label className="flex items-center text-sm">
              <input
                type="checkbox"
                name="terms"
                checked={form.terms}
                onChange={handleChange}
                className="mr-2 accent-blue-600"
                required
              />
              J'accepte les <a href="#" className="text-blue-600 underline ml-1">Terms & Conditions</a>
            </label>
          </div>
          
          <div className="flex justify-center">
            <Button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8"
            >
              Creer mon compte
            </Button>
          </div>
          
          <p className="text-center text-sm mt-2">
            Avez vous deja un compte?{' '}
            <a href="/login" className="text-blue-600 font-semibold hover:underline">S'identifier</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
