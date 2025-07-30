import React from 'react'
import SideBarAdmin from '@/components/SideBarAdmin'
import AdminDashboardContent from '@/components/AdminDashboardContent'

export default function DashboardAdmins() {
  return (
    <div className="flex gap-8">
      <SideBarAdmin />
      <div className="flex-1">
        <AdminDashboardContent />
      </div>
    </div>
  )
}
