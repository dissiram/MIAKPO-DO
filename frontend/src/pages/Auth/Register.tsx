import React, { useState } from "react";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ProgressIndicator } from '@/components/ProgressIndicator';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

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

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (!form.terms) {
      setError("Vous devez accepter les conditions d'utilisation.");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, form.email, form.password);
      if (auth.currentUser && form.name) {
        await updateProfile(auth.currentUser, { displayName: form.name });
      }
      setSuccess("Compte créé avec succès ! Vous pouvez vous connecter.");
      setForm({ name: "", email: "", password: "", terms: false });
      navigate("/choisirRole");
    } catch (err: any) {
      setError(err.message || "Erreur lors de la création du compte");
    }
  };

  return (
       
    <div className="mt-10">
       {/* Progress Indicator */}
              <ProgressIndicator currentStep={1} totalSteps={2} />
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
          
          {error && <div className="text-red-600 text-sm text-center">{error}</div>}
          {success && <div className="text-green-600 text-sm text-center">{success}</div>}
          <div className="flex justify-center">
            <Button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8"
            >
              Créer mon compte
            </Button>
          </div>
          <p className="text-center text-sm mt-2">
            Avez-vous déjà un compte?{' '}
            <a href="/login" className="text-blue-600 font-semibold hover:underline">S'identifier</a>
          </p>
          
        </form>
      </div>
    </div>
    </div>
  );
};

export default Register;
