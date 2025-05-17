import React from "react";

const tabs = [
  "Generated Articles",
  "Published Articles",
  "Scheduled Articles",
  "Archived Articles",
];

const DashboardHeader = ({ activeTab, setActiveTab }) => {
  return (
    <div className="text-center md:py-3 flex flex-col items-center w-full px-2">
      <h1 className="text-2xl md:text-3xl font-bold mb-4">Articles</h1>

      <div className="overflow-x-auto whitespace-nowrap w-full">
        <div className="inline-flex rounded-md border  overflow-hidden">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 border-r rounded-lg text-sm font-medium transition-colors duration-200 ${
                activeTab === tab
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
