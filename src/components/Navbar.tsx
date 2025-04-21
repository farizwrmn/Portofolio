"use client";

import React, { useState } from "react";
import Menu from "./MenuButton";
import Link from "next/link";
import StarGrid from "./ui/StarGrid";

const Navbar = () => {
  const links = [
    {
      id: 1,
      link: "Skills",
    },
    {
      id: 2,
      link: "Education",
    },
    {
      id: 3,
      link: "Experiences",
    },
    {
      id: 4,
      link: "Contact",
    },
  ];

  return (
    <>
      <div className="flex justify-between items-center w-full h-30 px-10 relative">
        <div className="items-center m-auto">
          <Link href="/">
            <h1 className="text-4xl tracking-tight lg:text-5xl font-dirtyline text-center -mt-7 text-blue-950 hero__body">
              MfarizW
            </h1>
          </Link>
        </div>
        <Menu link={links} />
      </div>
      <h3 className="text-blue-950 text-start mt-2">_____________________</h3>
    </>
  );
};

export default Navbar;
