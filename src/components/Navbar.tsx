"use client";

import Link from "next/link";
import React from "react";

import Menu from "./MenuButton";

const links = [
  {
    id: 1,
    label: "Case Studies",
    href: "/#case-studies",
  },
  {
    id: 2,
    label: "Skills",
    href: "/Skills",
  },
  {
    id: 3,
    label: "Education",
    href: "/Education",
  },
  {
    id: 4,
    label: "Experiences",
    href: "/Experiences",
  },
  {
    id: 5,
    label: "Contact",
    href: "/Contact",
  },
];

const Navbar = () => {
  return (
    <header className="flex flex-col gap-4 px-6 pt-6 text-blue-950">
      <div className="flex w-full items-center justify-between">
        <Link href="/" className="transition hover:opacity-80">
          <span className="text-3xl tracking-tight lg:text-5xl font-dirtyline">MfarizW</span>
        </Link>
        <div className="hidden items-center gap-4 lg:flex">
          <Link
            href="/resume"
            className="rounded-full border border-blue-600 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 transition hover:-translate-y-0.5 hover:bg-blue-50"
          >
            View Resume
          </Link>
          <Link
            href="/Contact"
            className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:-translate-y-0.5 hover:bg-blue-700"
          >
            Book Intro Call
          </Link>
        </div>
        <Menu links={links} />
      </div>
      <div className="flex items-center justify-end gap-3 text-xs font-medium uppercase tracking-[0.3em] text-blue-500 lg:hidden">
        <Link href="/resume" className="underline decoration-dashed underline-offset-4">
          View Resume
        </Link>
        <span aria-hidden>•</span>
        <Link href="/Contact" className="underline decoration-dashed underline-offset-4">
          Book Intro Call
        </Link>
      </div>
      <h3 className="text-blue-950 text-start">_____________________</h3>
    </header>
  );
};

export default Navbar;
