"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

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
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    if (!isMobileNavOpen) {
      document.body.style.removeProperty("overflow");
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMobileNavOpen]);

  useEffect(() => {
    if (!isMobileNavOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileNavOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMobileNavOpen]);

  const closeMobileMenu = () => setIsMobileNavOpen(false);

  return (
    <header className="flex flex-col gap-5 px-4 pt-6 text-blue-950 sm:px-6">
      <div className="flex w-full flex-wrap items-center justify-between gap-3">
        <Link href="/" className="transition hover:opacity-80">
          <span className="font-dirtyline text-3xl tracking-tight lg:text-5xl">MfarizW</span>
        </Link>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setIsMobileNavOpen(true)}
            className="inline-flex h-12 min-w-[3rem] items-center justify-center rounded-full border border-blue-200 px-5 text-sm font-semibold text-blue-700 transition hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 lg:hidden"
            aria-expanded={isMobileNavOpen}
            aria-controls="mobile-navigation"
          >
            Browse
          </button>
          <div className="hidden items-center gap-4 lg:flex">
            <Link
              href="/resume"
              className="rounded-full border border-blue-600 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 transition hover:-translate-y-0.5 hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              View Resume
            </Link>
            <Link
              href="/Contact"
              className="rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:-translate-y-0.5 hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Book Intro Call
            </Link>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col gap-3 lg:hidden">
        <Link
          href="/resume"
          className="w-full rounded-full border border-blue-600 px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 transition hover:-translate-y-0.5 hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          View Resume
        </Link>
        <Link
          href="/Contact"
          className="w-full rounded-full bg-blue-600 px-6 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:-translate-y-0.5 hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          Book Intro Call
        </Link>
      </div>
      <nav
        aria-label="Primary"
        className="-mx-4 hidden px-4 sm:mx-0 sm:block sm:px-0"
      >
        <ul className="flex w-max items-center gap-x-4 gap-y-2 text-sm font-semibold text-blue-600 sm:w-full sm:flex-wrap sm:justify-start lg:justify-center">
          {links.map(({ id, href, label }) => (
            <li key={id} className="whitespace-nowrap">
              <Link
                href={href}
                className="rounded-full px-3 py-1.5 transition hover:bg-blue-50 hover:text-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="h-px w-full bg-blue-100" aria-hidden />
      {isMobileNavOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-blue-950/70 px-4 py-10 backdrop-blur-sm">
          <div
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            className="w-full max-w-sm rounded-3xl bg-white p-6 text-blue-950 shadow-2xl"
          >
            <div className="flex items-center justify-between gap-3">
              <p className="font-dirtyline text-2xl tracking-[0.3em] text-blue-600">Navigate</p>
              <button
                type="button"
                onClick={closeMobileMenu}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-blue-200 text-lg font-semibold text-blue-700 transition hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                <span className="sr-only">Close navigation</span>
                ×
              </button>
            </div>
            <ul className="mt-6 space-y-3 text-base font-semibold text-blue-800">
              {links.map(({ id, href, label }) => (
                <li key={`mobile-${id}`}>
                  <Link
                    href={href}
                    onClick={closeMobileMenu}
                    className="flex items-center justify-between rounded-2xl border border-blue-100 px-5 py-4 transition hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    <span>{label}</span>
                    <span aria-hidden className="text-xl">→</span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 space-y-3">
              <Link
                href="/resume"
                onClick={closeMobileMenu}
                className="block w-full rounded-full border border-blue-600 px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 transition hover:-translate-y-0.5 hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                View Resume
              </Link>
              <Link
                href="/Contact"
                onClick={closeMobileMenu}
                className="block w-full rounded-full bg-blue-600 px-6 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:-translate-y-0.5 hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Book Intro Call
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
