import React, { useState } from "react";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const Login: React.FC = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    try {
      await signInWithEmailAndPassword(auth, form.email, form.password);
      setSuccess("Connexion réussie !");
    } catch (err: any) {
      setError(err.message || "Erreur de connexion");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-8">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold mb-8 text-center">Connexion à mon compte</h1>
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg px-8 pt-8 pb-6 space-y-6"
        >
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
              placeholder="Password"
              className="w-full bg-white"
              required
            />
          </div>
          {error && <div className="text-red-600 text-sm text-center">{error}</div>}
          {success && <div className="text-green-600 text-sm text-center">{success}</div>}
          <div className="flex justify-center">
            <Button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8"
            >
              Se connecter à mon compte
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
