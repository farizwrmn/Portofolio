"use client";

import Link from "next/link";
import React from "react";

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
    <header className="flex flex-col gap-4 px-4 pt-6 text-blue-950 sm:px-6">
      <div className="flex w-full flex-wrap items-center justify-between gap-3">
        <Link href="/" className="transition hover:opacity-80">
          <span className="font-dirtyline text-3xl tracking-tight lg:text-5xl">MfarizW</span>
        </Link>
        <div className="hidden items-center gap-4 lg:flex">
          <Link
            href="/resume"
            className="rounded-full border border-blue-600 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 transition hover:-translate-y-0.5 hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            View Resume
          </Link>
          <Link
            href="/Contact"
            className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:-translate-y-0.5 hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Book Intro Call
          </Link>
        </div>
      </div>
      <div className="flex w-full flex-col gap-3 lg:hidden">
        <Link
          href="/resume"
          className="w-full rounded-full border border-blue-600 px-5 py-2 text-center text-xs font-semibold uppercase tracking-[0.25em] text-blue-600 transition hover:-translate-y-0.5 hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          View Resume
        </Link>
        <Link
          href="/Contact"
          className="w-full rounded-full bg-blue-600 px-5 py-2 text-center text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:-translate-y-0.5 hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          Book Intro Call
        </Link>
      </div>
      <nav
        aria-label="Primary"
        className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0"
      >
        <ul className="flex w-max items-center gap-x-4 gap-y-2 text-sm font-semibold text-blue-600 sm:w-full sm:flex-wrap sm:justify-start lg:justify-center">
          {links.map(({ id, href, label }) => (
            <li key={id} className="whitespace-nowrap">
              <Link
                href={href}
                className="rounded-full px-3 py-1 transition hover:bg-blue-50 hover:text-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="h-px w-full bg-blue-100" aria-hidden />
    </header>
  );
};

export default Navbar;
