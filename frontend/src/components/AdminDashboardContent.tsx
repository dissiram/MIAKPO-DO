import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableHeader, TableBody } from "@/components/ui/table";

const users = [
  { name: "Alice Martin", actif: true },
  { name: "Jean Dupont", actif: true },
  { name: "Sophic Lerreine", actif: true },
  { name: "Nicolas Bernard", actif: true },
];

const offres = [
  { titre: "Développeur Web", auteur: "Pual Lefévre", statut: "Validée" },
  { titre: "Stage Marketing", auteur: "Clara Dubois", statut: "Validée" },
  { titre: "Développeur Web", auteur: "Luc Moreau", statut: "Validée" },
];

export default function AdminDashboardContent() {
  return (
    <div className="space-y-8">
      {/* Statistiques */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="p-6 flex flex-col items-center">
          <div className="text-2xl font-bold">1.254</div>
          <div className="text-sm text-gray-500">Utilisateurs</div>
        </Card>
        <Card className="p-6 flex flex-col items-center">
          <div className="text-2xl font-bold">893</div>
          <div className="text-sm text-gray-500">Annonces publiées</div>
        </Card>
        <Card className="p-6 flex flex-col items-center">
          <div className="text-2xl font-bold text-green-600">721</div>
          <div className="text-sm text-gray-500">Offres validées</div>
        </Card>
        <Card className="p-6 flex flex-col items-center">
          <div className="text-2xl font-bold text-orange-500">172</div>
          <div className="text-sm text-gray-500">Offres en attente</div>
        </Card>
      </div>

      {/* Gestion des utilisateurs */}
      <Card className="p-6">
        <div className="flex justify-between items-center mb-4">
          <Input placeholder="Rechercher un utilisateur" className="max-w-xs" />
        </div>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <tr>
                <th className="text-left">Nom</th>
                <th className="text-left">Actif</th>
                <th className="text-left">Actions</th>
              </tr>
            </TableHeader>
            <TableBody>
              {users.map((user, idx) => (
                <tr key={idx} className="border-b">
                  <td>{user.name}</td>
                  <td>{user.actif ? "Oui" : "Non"}</td>
                  <td>
                    <Button variant="destructive" size="sm">Supprimer</Button>
                  </td>
                </tr>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="flex justify-center mt-4 gap-2">
          {[1, 2, 3, 4].map((n) => (
            <Button key={n} size="sm" variant="outline">{n}</Button>
          ))}
        </div>
      </Card>

      {/* Modération des offres & statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Modération des offres */}
        <Card className="p-6">
          <div className="flex gap-2 mb-4">
            <Badge variant="secondary">En affichage</Badge>
            <Badge>Validées</Badge>
            <Badge variant="outline">En attente</Badge>
          </div>
          <Table>
            <TableHeader>
              <tr>
                <th className="text-left">Titre</th>
                <th className="text-left">Auteur</th>
                <th className="text-left">Statut</th>
              </tr>
            </TableHeader>
            <TableBody>
              {offres.map((offre, idx) => (
                <tr key={idx} className="border-b">
                  <td>{offre.titre}</td>
                  <td>{offre.auteur}</td>
                  <td>
                    <Badge variant="secondary">{offre.statut}</Badge>
                  </td>
                </tr>
              ))}
            </TableBody>
          </Table>
        </Card>

        {/* Statistiques détaillées */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="p-4 flex flex-col items-center">
            <div className="w-full h-24 bg-gradient-to-t from-indigo-200 to-indigo-400 rounded-lg mb-2" />
            <div className="text-xs text-gray-500">Évolution des publications</div>
          </Card>
          <Card className="p-4 flex flex-col items-center">
            <div className="w-full h-24 bg-gradient-to-t from-indigo-200 to-indigo-400 rounded-lg mb-2" />
            <div className="text-xs text-gray-500">Répartition par domaine</div>
          </Card>
          <Card className="p-4 flex flex-col items-center">
            <div className="w-full h-24 bg-gradient-to-t from-indigo-200 to-indigo-400 rounded-lg mb-2" />
            <div className="text-xs text-gray-500">Types de contrats publiés</div>
          </Card>
          <Card className="p-4 flex flex-col items-center">
            <div className="w-full h-24 bg-gradient-to-t from-indigo-200 to-indigo-400 rounded-lg mb-2" />
            <div className="text-xs text-gray-500">Nouveaux utilisateurs</div>
          </Card>
        </div>
      </div>
    </div>
  );
}
