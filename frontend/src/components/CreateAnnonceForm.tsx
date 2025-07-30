import React from "react";
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function CreateAnnonceForm() {
  return (
    <form className="bg-white rounded-2xl shadow-lg p-8 border max-w-2xl mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-6">Créer une annonce</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="font-medium">Type d’annonce <span className="text-red-500">*</span></label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Offre d'emploi" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="emploi">Offre d'emploi</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <label className="font-medium">Titre de l’annonce</label>
          <Input placeholder="Développeur Full Stack" className="w-full" />
        </div>
        <div className="md:col-span-2 space-y-2">
          <label className="font-medium">Description</label>
          <Textarea placeholder="Nous recherchons un développeur full stack..." className="w-full" />
        </div>
        <div className="space-y-2">
          <label className="font-medium">Domaine / Catégorie</label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Informatique" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="informatique">Informatique</SelectItem>
              <SelectItem value="marketing">Marketing</SelectItem>
              <SelectItem value="finance">Finance</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <label className="font-medium">Localisation</label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Paris, France" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="paris">Paris, France</SelectItem>
              <SelectItem value="lome">Lomé, Togo</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <label className="font-medium">Date de début</label>
          <Input type="date" className="w-full" />
        </div>
        <div className="space-y-2">
          <label className="font-medium">Durée</label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="CDI" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="cdi">CDI</SelectItem>
              <SelectItem value="cdd">CDD</SelectItem>
              <SelectItem value="stage">Stage</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <label className="font-medium">Type de contrat</label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="CDI" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="cdi">CDI</SelectItem>
              <SelectItem value="cdd">CDD</SelectItem>
              <SelectItem value="stage">Stage</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <label className="font-medium">Niveau requis</label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Bac +5" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="bac5">Bac +5</SelectItem>
              <SelectItem value="bac3">Bac +3</SelectItem>
              <SelectItem value="bac2">Bac +2</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <label className="font-medium">Rémunération (optionnel)</label>
          <Input placeholder="Précisez le salaire annuel." className="w-full" />
          <span className="text-xs text-gray-500">Indiquez la rémunération nette mensuelle estimée.</span>
        </div>
        <div className="space-y-2">
          <label className="font-medium">Compétences clés</label>
          <Input placeholder="Listez les compétences principales." className="w-full" />
        </div>
        <div className="md:col-span-2">
          <label className="block font-medium mb-2">Fichiers</label>
          <div className="border-2 border-dashed rounded-lg p-4 text-center text-gray-400 cursor-pointer">
            Glissez-déposez des fichiers ou cliquez pour parcourir
          </div>
        </div>
      </div>
      <Button className="mt-8 w-full bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold py-3 rounded-lg">Publier l’annonce</Button>
    </form>
  );
}
