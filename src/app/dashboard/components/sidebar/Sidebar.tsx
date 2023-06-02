"use client";

import React from "react";

import { usePathname } from "next/navigation";
import Logo from "./components/Logo";
import ActiveState from "./components/ActiveState";
import { sidebarMenu } from "./data";

export default function Sidebar() {
  const path = usePathname();

  const p = path.split("/")[path.split("/").length - 1];

  return (
    <>
      <aside className="w-64 bg-zinc-100 text-zinc-800 p-6 bg-white ml-5 mt-8 rounded-lg shadow max-sm:hidden">

        <Logo />

        <nav className="space-y-3 ">
          {sidebarMenu.map((menu) => {
            return (
              <>
                <ActiveState
                  src={menu.src}
                  description={menu.description}
                  link={menu.link}
                  state={p == menu.state}
                />
                
              </>
            );
          })}
        </nav>
        
      </aside>
    </>
  );
}
