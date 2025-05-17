import React, { useEffect, useState } from "react";
import DashboardContent from "../components/DashboardContent";
import DashboardHeader from "../components/DashboardHeader";
import { SidebarTrigger } from "../components/ui/sidebar";
import { Skeleton } from "../components/ui/skeleton";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Generated Articles");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="max-w-screen">
      <SidebarTrigger className="-ml-1 px-10 py-5 lg:hidden" />

      {/* Header Skeleton or Actual Header */}
      <header className="flex shrink-0 items-center gap-2">
        <div className="flex items-center w-full gap-2 px-4">
          {loading ? (
            <div className="w-full space-y-3">
              <Skeleton className="h-8 w-1/4 mx-auto" />
              <div className="flex justify-center gap-2 overflow-hidden">
                <Skeleton className="h-10 w-32 rounded-md" />
                <Skeleton className="h-10 w-32 rounded-md" />
                <Skeleton className="h-10 w-32 rounded-md" />
                <Skeleton className="h-10 w-32 rounded-md" />
              </div>
            </div>
          ) : (
            <DashboardHeader activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
        </div>
      </header>

      {/* Body Skeleton or Actual Content */}
      {loading ? (
        <div className="p-6 space-y-6">
          <Skeleton className="h-10 w-full max-w-sm mx-auto" />

          {/* Skeleton Table Header */}
          <div className="grid grid-cols-7 gap-4 mt-6">
            <Skeleton className="h-5 w-6" />
            <Skeleton className="h-5 w-40" />
            <Skeleton className="h-5 w-40" />
            <Skeleton className="h-5 w-20" />
            <Skeleton className="h-5 w-24" />
            <Skeleton className="h-5 w-16" />
            <Skeleton className="h-5 w-16" />
          </div>

          {/* Skeleton Rows */}
          {[...Array(3)].map((_, idx) => (
            <div
              key={idx}
              className="grid grid-cols-7 gap-4 items-center border rounded p-2"
            >
              <Skeleton className="h-4 w-6" />
              <Skeleton className="h-4 w-40" />
              <Skeleton className="h-4 w-40" />
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-8 w-16 rounded" />
              <Skeleton className="h-5 w-6" />
            </div>
          ))}
        </div>
      ) : (
        <DashboardContent activeTab={activeTab} />
      )}
    </div>
  );
};

export default Dashboard;
