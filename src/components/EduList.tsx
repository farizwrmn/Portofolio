import Image from "next/image";
import Breadcrumbs from "./Breadcrumbs";
import React from "react";

type Education = {
  id: number;
  institution: string;
  program: string;
  timeframe: string;
  narrative: string;
  highlights: string[];
};

type LearningItem = {
  id: number;
  title: string;
  timeframe: string;
  description: string;
  focus: string;
};

const educationHistory: Education[] = [
  {
    id: 1,
    institution: "Purwadhika Digital Technology School",
    program: "Full Stack Web Development Bootcamp",
    timeframe: "Jan 2024 – Sep 2024",
    narrative:
      "Immersive program covering product discovery, UX foundations, modern front-end architecture, and cloud-first back-end development.",
    highlights: [
      "Led a capstone e-commerce build with 6 teammates, orchestrating sprint planning and QA rituals.",
      "Graduated with a specialization in TypeScript, CI/CD, and testing-first delivery.",
      "Mentored newer cohorts on React patterns and API design, reinforcing my ability to teach and document systems.",
    ],
  },
  {
    id: 2,
    institution: "Universitas Al Azhar Indonesia",
    program: "B.A. International Relations",
    timeframe: "Nov 2015 – Jan 2020",
    narrative:
      "Researched the economics of the creative industry, sharpening my storytelling, diplomacy, and policy analysis skills.",
    highlights: [
      "Defended a thesis on Indonesia’s creative economy diplomacy that required multi-source data synthesis and stakeholder interviews.",
      "Presented findings to faculty and peers, strengthening public speaking and narrative design skills I now use in product demos.",
      "Served as delegation lead for campus conferences, coordinating logistics and crisis communication drills.",
    ],
  },
];

const recentLearning: LearningItem[] = [
  {
    id: 1,
    title: "Building AI copilots with Next.js and Vercel AI SDK",
    timeframe: "Q1 2025",
    description:
      "Shipped AI-assisted product data entry flows that parse invoices and auto-populate catalogues across retail branches.",
    focus: "AI Engineering",
  },
  {
    id: 2,
    title: "Designing inclusive design systems",
    timeframe: "Q4 2024",
    description:
      "Applied axe, Storybook accessibility testing, and semantic audits to guarantee WCAG 2.2 AA compliance for multi-brand sites.",
    focus: "Accessibility",
  },
  {
    id: 3,
    title: "Observability for front-end teams",
    timeframe: "Q3 2024",
    description:
      "Rolled out logging, tracing, and uptime alerts via Sentry and LogRocket, empowering rapid incident response.",
    focus: "Reliability",
  },
];

const EduList = () => {
  return (
    <section className="px-4 pb-16 text-blue-950">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Education" },
        ]}
      />

      <div className="mt-12 space-y-12">
        {educationHistory.map(({ id, institution, program, timeframe, narrative, highlights }) => (
          <article
            key={id}
            className="rounded-3xl border border-blue-100/60 bg-white/60 p-8 shadow-lg shadow-blue-100/40 backdrop-blur"
          >
            <header className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
                {institution}
              </p>
              <p className="mt-2 text-lg font-semibold text-blue-900">{program}</p>
              <p className="mt-1 text-sm text-slate-600">{timeframe}</p>
            </header>
            <p className="mt-5 text-center text-sm leading-relaxed text-slate-600 sm:text-base">
              {narrative}
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-600 sm:text-base">
              {highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3 rounded-2xl bg-white/70 p-4">
                  <span aria-hidden className="mt-2 h-2 w-2 rounded-full bg-blue-400" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="mt-16 flex flex-col items-center gap-8 rounded-3xl border border-blue-100/50 bg-white/70 p-8 shadow-inner">
        <Image
          src="/assets/svg/bootcamp.svg"
          alt="Illustration representing continuous learning"
          className="h-auto w-64 sm:w-80"
          width={500}
          height={400}
        />
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
            Recent Learning Sprints
          </p>
          <p className="mt-2 text-lg font-semibold text-blue-900">
            Staying ahead with AI, accessibility, and reliability practices
          </p>
        </div>
        <ul className="w-full space-y-4 text-sm text-slate-600 sm:text-base">
          {recentLearning.map(({ id, title, timeframe, description, focus }) => (
            <li
              key={id}
              className="rounded-2xl border border-blue-100/60 bg-white/80 p-5 shadow-sm shadow-blue-100/20"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="text-blue-900 font-semibold">{title}</p>
                <p className="text-xs uppercase tracking-[0.25em] text-blue-500">
                  {focus} · {timeframe}
                </p>
              </div>
              <p className="mt-2 leading-relaxed">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default EduList;
