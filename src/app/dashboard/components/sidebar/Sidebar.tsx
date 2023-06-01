"use client";

import Image from "next/image";
import React from "react";

import dashboardIcon from "../../../../../public/images/sidebar-icons-svg/dashboard.svg";

import tableIcon from "../../../../../public/images/sidebar-icons-svg/tables.svg";

import img from "../../../../../public/images/GLOBAL-ÁGUAS-LOGO.png";
import { Router } from "next/router";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const path = usePathname();

  const p = path.split("/")[path.split("/").length - 1];

  return (
    <>
      <aside className="w-64 bg-zinc-100 text-zinc-800 p-6 bg-white ml-5 mt-8 rounded-lg shadow">
        <div className="h1 mt-4 mb-10">
          <div className="flex flex-col justify-center items-center">
            <div className="h-32 w-36 relative  justify-center">
              <Image
                src={img.src}
                alt="Picture of the author"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <hr className="border-none h-px bg-gray-light" />
        </div>

        <nav className="space-y-6 ">
          {p == "dashboard" ? (
            <>
              <Link
                href={"dashboard"}
                className="flex items-center gap-3 text-sm font-bold text-zinc-280 rounded shadow-sm bg-orange-primary p-1.5 transition ease-in-out delay-100"
              >
                <Image
                  priority
                  src={dashboardIcon}
                  height={38}
                  width={38}
                  alt="Follow us on Twitter"
                  className="p-2 bg-white rounded-lg"
                />
                Painel Geral
              </Link>
            </>
          ) : (
            <>
              <Link
                className="flex items-center gap-3 text-sm font-thin text-zinc-280 p-1.5 cursor-pointer transition ease-in-out delay-100"
                href={"dashboard"}
              >
                <Image
                  priority
                  src={dashboardIcon}
                  height={38}
                  width={38}
                  alt="Follow us on Twitter"
                  className="p-2 rounded bg-orange-primary shadow-md"
                />
                Painel Geral
              </Link>
            </>
          )}

          {p == "tables" ? (
            <>
              <Link
                className="flex items-center gap-3 text-sm font-bold text-zinc-280 rounded shadow-sm bg-orange-primary p-1.5 transition ease-in-out delay-100"
                href={"dashboard/tables"}
              >
                <Image
                  priority
                  src={tableIcon}
                  height={38}
                  width={38}
                  alt="Follow us on Twitter"
                  className="p-2 bg-white rounded shadow-md"
                />
                Tabelas
              </Link>
            </>
          ) : (
            <>
              <Link
                className="flex items-center gap-3 text-sm font-thin text-zinc-280 p-1.5 cursor-pointer transition ease-in-out delay-100"
                href={"dashboard/tables"}
              >
                <Image
                  priority
                  src={tableIcon}
                  height={38}
                  width={38}
                  alt="Follow us on Twitter"
                  className="p-2 bg-orange-primary rounded shadow-md"
                />
                Tabelas
              </Link>
            </>
          )}
        </nav>
      </aside>
    </>
  );
}
