"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { PopoverClose } from "@radix-ui/react-popover";
import Link from "next/link";

import React, { useEffect, useState } from "react";

type NavLink = {
  id: number;
  label: string;
  href: string;
};

type Props = {
  links: NavLink[];
};

const Menu = ({ links }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger className="fixed right-10 transition hover:scale-105 bg-gradient-to-t from-blue-500 to-white p-4 rounded-full mt-10 xl:m-auto data-[state=open]:zoom-in-120 border-b-4 text-sm z-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </PopoverTrigger>
      <PopoverContent className="w-[385px] min-h-[1280px]">
        <PopoverClose className="fixed right-16 mt-20 hover:scale-110 bg-white p-4 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </PopoverClose>
        <ol className="space-y-10 text-center data-[state=open]:zoom-in-96 mt-60">
          {links.map(({ id, href, label }) => (
            <li
              key={id}
              className="hover:font-bold p-2 text-2xl drop-shadow-[0_1.2px_1.0px_rgba(0,0,0,0.8)] text-blue-900 font-dirtyline"
            >
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ol>
        <p className="text-blue-950 text-center  mt-40 text-sm font-dirtyline">
          © Frzwarman, 2024
        </p>
        <h3 className="text-blue-950 text-center">_____________________</h3>
      </PopoverContent>
    </Popover>
  );
};

export default Menu;
