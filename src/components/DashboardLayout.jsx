import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AppSidebar } from "../components/app-sidebar";
import { SidebarInset, SidebarProvider } from "../components/ui/sidebar";

const DashboardLayout = () => {
  const [activeTab, setActiveTab] = useState("Generated Articles");
  const location = useLocation();
  const isDashboardHome = location.pathname === "/";

  return (
    <div className="flex min-h-screen overflow-y-auto">
      <SidebarProvider>
        <AppSidebar />
        <main className="flex-1">
          <SidebarInset>
            <Outlet
              context={
                isDashboardHome ? { activeTab, setActiveTab } : undefined
              }
            />
          </SidebarInset>
        </main>
      </SidebarProvider>
    </div>
  );
};

export default DashboardLayout;
