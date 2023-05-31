import Image from "next/image";
import React from "react";

import definitionIcon from "../icons/config.svg";
import notificationIcon from "../icons/notification.svg";

export default function Navbar() {
  return (
    <>
      <div className="flex flex-row">
        <div className="flex-1">
          <div>
            <span className="text-orange-primary font-bold">Dashboard</span>
            <span className="pr-2 pl-2 font-thin">/</span>
            <span className="font-thin">Dashboard</span>
          </div>
        </div>
        <div className="pr-4">
          <Image
            priority
            src={definitionIcon}
            height={20}
            width={20}
            alt="Follow us on Twitter"
            className="rounded"
          />
        </div>
        <div className="pr-4">
          <Image
            priority
            src={notificationIcon}
            height={20}
            width={20}
            alt="Follow us on Twitter"
            className="rounded"
          />
        </div>
        <div className="pr-4">
          <Image
            src="https://demos.creative-tim.com/corporate-ui-dashboard/assets/img/team-2.jpg"
            height={25}
            width={25}
            alt="Follow us on Twitter"
            className="flex-none rounded-full bg-gray-50"
            style={{objectFit: "contain"}}
            priority

          />
         
        </div>
      </div>
    </>
  );
}
