import Image from "next/image";
import React from "react";

const focusAreas = [
  {
    title: "AI & Automation",
    description:
      "Prototyped assistants that generate storefront copy and reconcile stock data, saving support teams 20+ hours per month.",
  },
  {
    title: "Performance & Accessibility",
    description:
      "Ship responsive interfaces that consistently load sub-1.3s on 4G and meet WCAG 2.2 AA, backed by automated Lighthouse and axe audits.",
  },
  {
    title: "Product Strategy",
    description:
      "Partner with stakeholders to define KPIs, roadmap experiments, and share insights via talks, documentation, and design reviews.",
  },
];

const Hero1 = () => {
  return (
    <section
      aria-labelledby="focus-heading"
      className="mt-20 grid gap-8 rounded-3xl bg-white/50 p-6 text-blue-950 backdrop-blur-sm sm:mt-24 sm:gap-10 sm:p-8 lg:grid-cols-[1.1fr_0.9fr]"
    >
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
          Strategic focus for 2025
        </p>
        <h2
          id="focus-heading"
          className="mt-3 text-3xl font-semibold tracking-tight lg:text-4xl"
        >
          I blend experimentation and delivery discipline to keep products ahead
          of market shifts.
        </h2>
        <ul className="mt-8 space-y-6 text-sm text-slate-600 sm:text-base">
          {focusAreas.map(({ title, description }) => (
            <li key={title} className="rounded-2xl border border-blue-100/60 bg-white/60 p-5">
              <p className="text-base font-semibold text-blue-900">{title}</p>
              <p className="mt-2 leading-relaxed text-slate-600">{description}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-center">
        <Image
          src="/assets/images/boost.svg"
          alt="Illustration of growth metrics rising"
          height={360}
          width={360}
          className="h-auto w-64 drop-shadow-2xl sm:w-72 lg:w-80"
        />
      </div>
    </section>
  );
};

export default Hero1;
