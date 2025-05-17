import React from "react";
import { SidebarTrigger } from "./ui/sidebar";

const PageContainer = ({ title}) => (
  <div className=" min-h-screen max-h-screen bg-white ">
    <SidebarTrigger className="-ml-1 px-10 py-5 lg:hidden" />
    <div className="w-full max-w-5xl  p-6 md:p-10">
      <h1 className=" text-2xl md:text-3xl font-bold text-gray-800">
        {" "}
        Welcome to {title} Page!
      </h1>
    </div>
  </div>
);

export default PageContainer;
