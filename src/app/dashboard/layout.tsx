import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="h-screen flex flex-col">
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 p-6">
            <Navbar />

            <div className="flex flex-wrap mt-12 -mx-3">{children}</div>
          </main>
        </div>
      </div>
    </>
  );
}
