import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ActiveState({
  description,
  src,
  link,
  state
}: ISidebar) {

  const activeClass = {class: "shadow-sm bg-orange-primary font-bold", logo: ""}

  const desactivedClass = {class: "hover:shadow-md rounded-md", logo: "shadow-md"}

  return (
    <>
      {
        <Link
          href={link}
          className={"flex items-center gap-3 text-sm text-zinc-280 rounded p-1.5 transition ease-in-out delay-10 ".concat( state ? activeClass.class : desactivedClass.class)}
        >
          <Image
            priority
            src={src}
            height={30}
            width={30}
            alt="Follow us on Twitter"
            className={"p-2 bg-white rounded  ".concat( state ? activeClass.logo : desactivedClass.logo)}
          />
          {description}
        </Link>
      }
    </>
  );
}
