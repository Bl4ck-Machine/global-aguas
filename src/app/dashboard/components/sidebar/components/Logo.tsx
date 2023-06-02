import Image from "next/image";
import React from "react";
import img from "../../../../../../public/images/GLOBAL-ÁGUAS-LOGO.png";

export default function Logo() {
  return (
    <>
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
    </>
  );
}
