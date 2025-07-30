import React from "react";
import Sidebar from "@/components/Sidebar";
import SimpleSearch  from '@/components/SimpleSearch';

const offers = [
  {
    id: 1,
    name: "Développeur web full-stack",
    url: "catalogdigital",
    date: "22 Jan 2022",
    status: "Inactive",
  },
  {
    id: 2,
    name: "Développeur mobile",
    url: "cafe informatique",
    date: "20 Juin 2025",
    status: "Active",
  },
  {
    id: 3,
    name: "Chef de projet digital",
    url: "digicmd",
    date: "30 Juillet 2022",
    status: "Active",
  },
  
];

const Dashboard: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-8">
               <SimpleSearch/>
        <div className="bg-white rounded-xl shadow p-6">
          <table className="w-full text-left">
            <thead>
              <tr className="text-gray-400 text-xs font-semibold">
                <th className="py-2 px-4 font-semibold">Offres</th>
                <th className="py-2 px-4 font-semibold">Dates de soumission</th>
                <th className="py-2 px-4 font-semibold">Statut de l'offre</th>
                <th className="py-2 px-4"></th>
              </tr>
            </thead>
            <tbody>
              {offers.map((offer) => (
                <tr key={offer.id} className="border-b last:border-b-0 hover:bg-gray-50">
                  <td className="py-3 px-4 flex items-center gap-2">
                    <input type="checkbox" className="accent-blue-600 mr-2" defaultChecked={offer.status === 'Active'} />
                    <div>
                      <div className="font-semibold text-gray-800 text-sm">{offer.name}</div>
                      <div className="text-xs text-gray-500">{offer.url}</div>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">{offer.date}</td>
                  <td className="py-3 px-4">
                    {offer.status === 'Active' ? (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-700">● Active</span>
                    ) : (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-200 text-gray-500">● Inactive</span>
                    )}
                  </td>
                  <td className="py-3 px-4 text-right">
                    <button className="bg-white text-gray-400 hover:text-red-500">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-8 flex items-center justify-between">
          <span className="text-gray-600 text-sm">Avez-vous postuler ou soumis votre candidature a une offre en interne que vous ne retrouvez pas ici ?</span>
          <button className="bg-indigo-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-800 transition">Ajouter une offre</button>
        </div>
      </main>
    </div>
  );
};

export default Dashboard; 