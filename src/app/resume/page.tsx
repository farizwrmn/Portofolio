import Bounded from "@/components/Bounded";
import Breadcrumbs from "@/components/Breadcrumbs";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import React from "react";

const resumeHighlights = [
  {
    title: "Front End Engineering",
    points: [
      "Modernized retail POS and inventory platforms with React, Next.js, and TypeScript, balancing DX with rigorous performance targets.",
      "Created component libraries and design tokens that cut UI build time by 40% across multi-brand products.",
      "Built CI pipelines with automated accessibility, Lighthouse, and unit test coverage to maintain 95%+ release confidence.",
    ],
  },
  {
    title: "Product Strategy & Collaboration",
    points: [
      "Partner with stakeholders to shape OKRs, roadmap experiments, and translate qualitative research into actionable tickets.",
      "Facilitate sprint reviews, usability tests, and roadmap workshops that keep design, engineering, and ops aligned.",
      "Coach teammates on TypeScript patterns, analytics instrumentation, and story-first documentation.",
    ],
  },
  {
    title: "Business Impact",
    points: [
      "Shipped automations that recovered 20+ hours per week for ops teams and reduced manual errors by 48%.",
      "Implemented insights dashboards that improved executive decision-making speed by 30% for merchandising teams.",
      "Delivered event and e-commerce experiences that boosted conversion between 18–22% through iterative experimentation.",
    ],
  },
];

const ResumePage = () => {
  return (
    <Bounded>
      <div className="w-full rounded-3xl border border-slate-200/40 bg-white/60 backdrop-blur">
        <Navbar />
        <div className="px-6">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Resume" },
            ]}
          />
        </div>
        <section className="px-6 mt-10 pb-16 text-blue-950">
          <header className="text-center">
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Muhamad Fariz Warman · Front End Engineer
            </h1>
            <p className="mt-4 text-sm text-slate-600 sm:text-base">
              Jakarta, Indonesia · Remote-friendly · English & Bahasa Indonesia
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs uppercase tracking-[0.3em] text-blue-500">
              <span>Retail Tech</span>
              <span aria-hidden>•</span>
              <span>Healthcare Ops</span>
              <span aria-hidden>•</span>
              <span>Event Platforms</span>
            </div>
          </header>

          <section className="mt-12 grid gap-8 lg:grid-cols-3">
            {resumeHighlights.map(({ title, points }) => (
              <article
                key={title}
                className="rounded-3xl border border-blue-100/60 bg-white/70 p-6 shadow-lg shadow-blue-100/30"
              >
                <h2 className="text-lg font-semibold text-blue-900">{title}</h2>
                <ul className="mt-4 space-y-3 text-sm text-slate-600">
                  {points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span aria-hidden className="mt-1 h-2 w-2 rounded-full bg-blue-400" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </section>

          <section className="mt-12 grid gap-8 lg:grid-cols-[2fr_1fr]">
            <div className="rounded-3xl border border-blue-100/60 bg-white/70 p-6">
              <h2 className="text-lg font-semibold text-blue-900">Core Stack</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                TypeScript, React, Next.js, Redux Toolkit, Tailwind CSS, Shadcn,
                Chakra UI, Storybook, Jest, Playwright, Vitest, Prisma, MongoDB,
                MySQL, REST/GraphQL APIs, Node.js, Express, Vercel, Docker,
                GitHub Actions, Sentry, LogRocket, Segment.
              </p>
            </div>
            <div className="rounded-3xl border border-blue-100/60 bg-white/70 p-6">
              <h2 className="text-lg font-semibold text-blue-900">
                Availability
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Open to front end or full-stack product roles in APAC & remote.
                Able to collaborate across time zones and start discovery
                sessions within two weeks.
              </p>
              <div className="mt-5 flex flex-col gap-3 text-sm font-semibold">
                <Link
                  href="mailto:farizwarman@gmail.com"
                  className="rounded-full bg-blue-600 px-5 py-2 text-center text-white shadow-lg shadow-blue-600/30 transition hover:-translate-y-0.5 hover:bg-blue-700"
                >
                  Request PDF Resume
                </Link>
                <Link
                  href="https://bit.ly/mfarizw"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-blue-600 px-5 py-2 text-center text-blue-600 transition hover:-translate-y-0.5 hover:bg-blue-50"
                >
                  Connect on LinkedIn
                </Link>
              </div>
            </div>
          </section>
        </section>
      </div>
    </Bounded>
  );
};

export default ResumePage;
