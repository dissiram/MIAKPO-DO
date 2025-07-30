import React from 'react'
import { Link, useLocation } from "react-router-dom";
import { FaUser, FaStar, FaBell, FaChartBar, FaSignOutAlt, FaCog, FaFolderOpen, FaUsers, FaBriefcase, FaChartPie } from "react-icons/fa";
import logo from "@/assets/logo.svg";

const SideBarAnnonceur: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const iconColor = (active: boolean) => active ? "#2563eb" : "#64748b"; // blue-600 or gray-500
  const [open, setOpen] = React.useState(false);

  // Fermer le menu sur navigation
  React.useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <>
      {/* Bouton menu mobile */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-blue-600 text-white p-2 rounded-full shadow-lg focus:outline-none"
        onClick={() => setOpen(true)}
        aria-label="Ouvrir le menu"
      >
        <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
      </button>

      {/* Overlay mobile */}
      {open && (
        <div className="fixed inset-0 bg-black/40 z-40 md:hidden" onClick={() => setOpen(false)}></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-64 bg-gradient-to-b from-blue-50 via-white to-gray-100 border-r flex flex-col py-8 px-5 shadow-xl rounded-r-3xl z-50 transition-transform duration-300 md:translate-x-0 ${open ? 'translate-x-0' : '-translate-x-full'} md:static md:block md:translate-x-0`}
        style={{ minHeight: '100vh' }}
      >
        <div className="flex flex-col items-center mb-10">
          <img src={logo} alt="Logo" className="w-16 h-16 rounded-full bg-white shadow-lg p-2 mb-2" />
          <div className="flex items-center gap-3 mt-2">
            <div className="w-11 h-11 rounded-full bg-blue-100 flex items-center justify-center font-bold text-xl text-blue-600 shadow">A</div>
            <span className="font-semibold text-gray-700 text-lg">Admin</span>
          </div>
        </div>

        <div className="mb-8">
          <div className="uppercase text-xs text-gray-400 font-bold tracking-widest mb-2 pl-2">Navigation</div>
          <nav className="flex flex-col gap-2">
            <Link to="/utilisateurs" className={`flex items-center gap-3 py-2.5 px-4 rounded-xl transition-all duration-150 ${isActive('/utilisateurs') ? 'bg-blue-100 text-blue-700 font-bold shadow' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'}`}> <FaUsers size={22} color={iconColor(isActive('/utilisateurs'))} /> <span>Utilisateurs</span> </Link>
            <Link to="/offres" className={`flex items-center gap-3 py-2.5 px-4 rounded-xl transition-all duration-150 ${isActive('/offres') ? 'bg-blue-100 text-blue-700 font-bold shadow' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'}`}> <FaBriefcase size={22} color={iconColor(isActive('/offres'))} /> <span>Offres</span> </Link>
            <Link to="/statistiques" className={`flex items-center gap-3 py-2.5 px-4 rounded-xl transition-all duration-150 ${isActive('/statistiques') ? 'bg-blue-100 text-blue-700 font-bold shadow' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'}`}> <FaChartPie size={22} color={iconColor(isActive('/statistiques'))} /> <span>Statistiques</span> </Link>
            <Link to="/notifications" className={`flex items-center gap-3 py-2.5 px-4 rounded-xl transition-all duration-150 ${isActive('/notifications') ? 'bg-blue-100 text-blue-700 font-bold shadow' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'}`}> <FaBell size={22} color={iconColor(isActive('/notifications'))} /> <span>Notifications</span> </Link>
          </nav>
        </div>

        <div className="border-t border-gray-200 my-4"></div>

        <div className="mt-auto flex flex-col gap-2">
          <div className="uppercase text-xs text-gray-400 font-bold tracking-widest mb-2 pl-2">Paramètres</div>
          <Link to="/settings" className={`flex items-center gap-3 py-2.5 px-4 rounded-xl transition-all duration-150 ${isActive('/settings') ? 'bg-blue-100 text-blue-700 font-bold shadow' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'}`}> <FaCog size={22} color={iconColor(isActive('/settings'))} /> <span>Paramètres</span> </Link>
          <Link to="/logout" className={`flex items-center gap-3 py-2.5 px-4 rounded-xl transition-all duration-150 ${isActive('/logout') ? 'bg-blue-100 text-blue-700 font-bold shadow' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'}`}> <FaSignOutAlt size={22} color={iconColor(isActive('/logout'))} /> <span>Se déconnecter</span> </Link>
        </div>
      </aside>
    </>
  );
};

export default SideBarAnnonceur; 