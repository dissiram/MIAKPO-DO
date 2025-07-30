import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const categories = [
  {
    title: "Offres d'emploi classiques",
    count: 28,
    color: "bg-blue-600"
  },
  {
    title: "Stages et opportunités d'alternance",
    count: 45,
    color: "bg-green-600"
  },
  {
    title: "Offres de missions freelance ou temporaires",
    count: 49,
    color: "bg-purple-600"
  },
  {
    title: "Offres de formation ou d'autoformation",
    count: 45,
    color: "bg-orange-600"
  },
  {
    title: "Appels à projets ou concours (entrepreneuriat, bourses)",
    count: 45,
    color: "bg-teal-600"
  },
  {
    title: "Offres de volontariat",
    count: 45,
    color: "bg-pink-600"
  }
];

export function JobCategories() {
  return (
    <section className="bg-slate-800 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-white text-center mb-12">
          Catégories d'offre
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories.map((category, index) => (
            <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {category.title}
                </h3>
                <div className="flex items-center justify-between">
                  <Badge className={`${category.color} text-white hover:${category.color}/90`}>
                    {category.count} OFFRES
                  </Badge>
                  <span className="text-sm text-gray-500">Découvrir</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <a href="#" className="text-white hover:text-blue-300 transition-colors">
            Voir toutes les offres →
          </a>
        </div>
      </div>
    </section>
  );
}