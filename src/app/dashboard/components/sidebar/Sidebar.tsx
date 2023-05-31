import Image from 'next/image'
import React from 'react'

import dashboardIcon from "../../../../../public/images/sidebar-icons-svg/dashboard.svg";

import tableIcon from "../../../../../public/images/sidebar-icons-svg/tables.svg";

import img from "../../../../../public/images/GLOBAL-ÁGUAS-LOGO.png";

export default function Sidebar() {
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
            <li className="flex items-center gap-3 text-sm font-bold text-zinc-280 rounded shadow-sm bg-orange-primary p-2 cursor-pointer">
              <Image
                priority
                src={dashboardIcon}
                height={38}
                width={38}
                alt="Follow us on Twitter"
                className="p-2 bg-white rounded-lg"
              />
              Painel Geral
            </li>
            <li className="flex items-center gap-3 text-sm font-thin text-zinc-280 p-2 cursor-pointer">
              <Image
                priority
                src={tableIcon}
                height={38}
                width={38}
                alt="Follow us on Twitter"
                className="p-2 rounded shadow-md"
              />
              Tabelas
            </li>
          </nav>
        </aside>
    
    </>
  )
}
