import React, { useState } from "react";
import DashboardContent from "../components/DashboardContent";
import DashboardHeader from "../components/DashboardHeader";
import { SidebarTrigger } from "../components/ui/sidebar";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Generated Articles");

  return (
    <div className="max-w-screen ">
      <SidebarTrigger className="-ml-1 px-10 py-5 lg:hidden" />
      <header className="flex shrink-0 items-center gap-2">
        <div className="flex items-center w-full gap-2 px-4">
          <DashboardHeader activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
      </header>
      <DashboardContent activeTab={activeTab} />
    </div>
  );
};

export default Dashboard;
