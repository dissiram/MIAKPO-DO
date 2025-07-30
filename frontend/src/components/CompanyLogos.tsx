import React from 'react';

const companies = [
  { name: "Entreprises A", color: "text-purple-600" },
  { name: "Entreprises B", color: "text-green-600" },
  { name: "Entreprises C", color: "text-blue-600" },
  { name: "Entreprises D", color: "text-blue-700" },
  { name: "Entreprises E", color: "text-purple-700" }
];

export function CompanyLogos() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl font-semibold text-gray-700 text-center mb-12">
          Les entreprises qui recrutent
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {companies.map((company, index) => (
            <div key={index} className="flex items-center justify-center group cursor-pointer">
              <div className="flex items-center space-x-2 group-hover:scale-105 transition-transform duration-200">
                <div className={`w-8 h-8 rounded-full ${company.color} bg-current opacity-20`}></div>
                <span className={`text-lg font-semibold ${company.color} group-hover:opacity-80`}>
                  {company.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}