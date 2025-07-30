import React from "react";
import SideBarAnnonceur from "@/components/SideBarAnnonceur";
import CreateAnnonceForm from "@/components/CreateAnnonceForm";

// import React from 'react'

export default function DashboardAnnonceurs() {
  return (
    <div className="flex gap-8">
      <SideBarAnnonceur />
      <div className="flex-1">
        <CreateAnnonceForm />
      </div>
    </div>
  );
}
