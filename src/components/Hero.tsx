import Link from "next/link";
import React from "react";

const credibilityStats = [
  {
    label: "Retail POS uptime after refactor",
    value: "99.95%",
  },
  {
    label: "Average Lighthouse performance score",
    value: "90+",
  },
  {
    label: "AI-assisted workflows automated",
    value: "12",
  },
];

const Hero = () => {
  return (
    <section
      className="hero__wrapper px-4 pt-16 pb-10 text-blue-950"
      aria-labelledby="hero-title"
    >
      <p className="hero__tagline text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
        Front End Engineer · Product-minded
      </p>
      <h1
        id="hero-title"
        className="hero__title mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
      >
        I design revenue-driving web products for retail, healthcare, and event
        teams.
      </h1>
      <p className="hero__summary mt-6 max-w-2xl text-base text-slate-600 sm:text-lg">
        From modernizing nationwide point-of-sale tools to launching accessible
        marketing sites, I translate user research and business KPIs into
        scalable design systems. Recent wins include slashing checkout latency by
        35%, rolling out automation that saves 20+ hours monthly, and shipping
        inclusive interfaces that pass WCAG AA audits.
      </p>
      <div className="hero__cta mt-8 flex flex-wrap gap-4">
        <Link
          href="/resume"
          className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:-translate-y-0.5 hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          View resume
        </Link>
        <Link
          href="/Contact"
          className="rounded-full border border-blue-600 px-6 py-3 text-sm font-semibold text-blue-600 transition hover:-translate-y-0.5 hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          Book an intro call
        </Link>
        <Link
          href="#case-studies"
          className="rounded-full border border-transparent px-6 py-3 text-sm font-semibold text-blue-600 underline decoration-dashed underline-offset-4 transition hover:text-blue-800"
        >
          Explore case studies ↓
        </Link>
      </div>
      <dl className="hero__stats mt-10 grid gap-6 sm:grid-cols-3">
        {credibilityStats.map(({ label, value }) => (
          <div
            key={label}
            className="hero__stat-item rounded-2xl border border-blue-100/40 bg-white/40 p-5 text-center backdrop-blur-sm"
          >
            <dt className="text-xs font-medium uppercase tracking-wider text-slate-500">
              {label}
            </dt>
            <dd className="mt-2 text-2xl font-semibold text-blue-900">{value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
};

export default Hero;
