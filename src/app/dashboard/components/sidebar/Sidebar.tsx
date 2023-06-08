"use client";

import React from "react";

import { usePathname } from "next/navigation";
import Logo from "../../../components/Logo";
import ActiveState from "./components/ActiveState";
import { sidebarMenu } from "./data";

export default function Sidebar() {
  const path = usePathname();

  const p = path.split("/")[path.split("/").length - 1];

  return (
    <>
    <aside className="w-64 text-zinc-800 p-6  ml-5 mt-8 rounded-lg max-sm:hidden">

    </aside>
      <aside className="fixed border-black/12.5  h-screen w-64  text-zinc-800 p-6 ml-5 mt-8 rounded-lg max-sm:hidden shadow-soft-xl border-0 border-solid bg-white bg-clip-border ">

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
                />{
                  menu?.icon 
                }
                
              </>
            );
          })}
        </nav>

      </aside>
    </>
  );
}
