import React from "react";
import DashboardCard from "./components/cards/Dashboard";
import StatusCard from "./components/cards/StatusCard";

export default function Page() {
  return (
    <>
      <div className="">
        <div className="flex flex-wrap">
         <StatusCard _className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4"/>

         <StatusCard _className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4"/>

         <StatusCard _className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4"/>

         <StatusCard _className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4"/>
        </div>

        <div className="flex flex-wrap mt-6">
          
          <DashboardCard _className="w-full max-w-full px-3 lg:w-7/12 lg:flex-none mb-6"/>

          <DashboardCard _className="w-full max-w-full px-3 lg:w-5/12 lg:flex-none mb-6"/>
         
        </div>
        
      </div>
    </>
  );
}
