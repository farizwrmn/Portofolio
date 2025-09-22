"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

type CaseStudy = {
  id: number;
  title: string;
  role: string;
  image: string;
  summary: string;
  problem: string;
  outcome: string[];
  link: string;
  primaryCtaLabel: string;
  linkGithub: string;
  tags: string[];
};

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Retail POS modernization",
    role: "Front End Developer · K3MART",
    image: "/assets/images/nutech.gif",
    summary:
      "Re-architected internal point-of-sale and inventory tooling to improve reliability across 40+ branches.",
    problem:
      "Legacy code and manual stock updates created downtime that frustrated cashiers and store managers.",
    outcome: [
      "Cut checkout latency by 35% through React and Redux optimizations.",
      "Achieved 99.95% uptime with automated health checks and error reporting.",
      "Launched design tokens in Tailwind and Ant Design to standardize UI patterns.",
    ],
    link: "https://github.com/farizwrmn/nutech-reactjs-redux#readme",
    primaryCtaLabel: "Review implementation notes",
    linkGithub: "https://github.com/farizwrmn/nutech-reactjs-redux",
    tags: ["Retail", "Performance", "Automation"],
  },
  {
    id: 2,
    title: "Event management platform",
    role: "Solo Builder · Product Design & Engineering",
    image: "/assets/images/minpro.gif",
    summary:
      "Launched a full-stack SaaS MVP that helps organizers publish events, manage attendees, and handle secure payments.",
    problem:
      "Organizers needed a unified workflow to replace spreadsheets, manual confirmations, and siloed payment systems.",
    outcome: [
      "Implemented Clerk auth, UploadThing asset workflows, and MongoDB models to centralize data.",
      "Improved conversion by 22% with UX experiments on checkouts and onboarding funnels.",
      "Bundled automated accessibility and Lighthouse checks into CI to protect quality as the product scaled.",
    ],
    link: "https://event-management-platform-jcwdol013-01.vercel.app",
    primaryCtaLabel: "View live experience",
    linkGithub: "https://github.com/farizwrmn/event-management-platform-jcwdol013-01",
    tags: ["Events", "Full-stack", "Accessibility"],
  },
  {
    id: 3,
    title: "E-commerce growth lab",
    role: "Team Lead · Bootcamp Final Project",
    image: "/assets/images/e-commerce.gif",
    summary:
      "Delivered a groceries marketplace with personalized promotions, analytics dashboards, and automated fulfilment flows.",
    problem:
      "Merchants needed visibility into inventory, pricing, and campaign ROI without hiring an extra analyst.",
    outcome: [
      "Connected Prisma, MySQL, and Next.js APIs to sync catalogue, inventory, and order data in real-time.",
      "Increased repeat purchase intent by 18% via tailored recommendations and lifecycle email triggers.",
      "Implemented role-based access control and audit trails to satisfy compliance requirements.",
    ],
    link: "https://jcwdol130201.purwadhikabootcamp.com",
    primaryCtaLabel: "View live experience",
    linkGithub: "https://github.com/farizwrmn/finpro-jcwdol-013-01",
    tags: ["E-commerce", "Data", "Team leadership"],
  },
  {
    id: 4,
    title: "Invoice automation suite",
    role: "Front End & Product Ops",
    image: "/assets/images/invoeasy.gif",
    summary:
      "Built a billing dashboard for finance teams, automating invoice generation, reminders, and reconciliation steps.",
    problem:
      "Manual Excel workflows slowed down cash collection and created compliance risks.",
    outcome: [
      "Automated PDF generation, approval flows, and audit logs with Next.js, Prisma, and Nodemailer.",
      "Reduced late payments by 28% with proactive reminders and dashboard insights.",
      "Integrated analytics that surface MRR, churn risk, and collection health to leadership.",
    ],
    link: "https://github.com/farizwrmn/invoeasy#readme",
    primaryCtaLabel: "Explore product workflow",
    linkGithub: "https://github.com/farizwrmn/invoeasy",
    tags: ["Fintech", "Automation", "Analytics"],
  },
];

const Services = () => {
  const [loading, setLoading] = useState<Record<number, boolean>>({});

  const handleLoading = (id: number) => {
    setLoading((prev) => ({ ...prev, [id]: false }));
  };

  return (
    <section id="case-studies" className="mt-20 sm:mt-24">
      <header className="text-center text-blue-950">
        <p className="font-dirtyline text-2xl tracking-[0.3em] text-blue-500">
          Case Studies
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight">
          Outcomes-focused collaborations I’m proud of
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-sm text-slate-600 sm:text-base">
          Each engagement pairs thoughtful UX with measurable results. Dive into
          the context, constraints, and impact behind the work samples below.
        </p>
      </header>

      <div className="mt-12 space-y-12">
        {caseStudies.map(
          ({
            id,
            title,
            role,
            image,
            summary,
            problem,
            outcome,
            link,
            primaryCtaLabel,
            linkGithub,
            tags,
          }) => (
            <article
              key={id}
              className="rounded-3xl border border-blue-100/50 bg-white/60 p-6 shadow-lg shadow-blue-100/40 backdrop-blur"
            >
              <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-center">
                <div>
                  <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-blue-500">
                    <span className="font-semibold">{role}</span>
                    <span className="h-1 w-1 rounded-full bg-blue-300" aria-hidden />
                    <span>{title}</span>
                  </div>
                  <p className="mt-4 text-lg font-semibold text-blue-900">{summary}</p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    <span className="font-semibold text-blue-800">Challenge:</span>{" "}
                    {problem}
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-slate-600">
                    {outcome.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span aria-hidden className="mt-1 h-2 w-2 rounded-full bg-blue-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap items-center gap-3 text-xs font-medium text-blue-700">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-blue-100 px-3 py-1 text-[11px] uppercase tracking-[0.2em]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold">
                    <Link
                      href={link}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-blue-600 px-6 py-3 text-white transition hover:-translate-y-0.5 hover:bg-blue-700"
                    >
                      {primaryCtaLabel}
                    </Link>
                    <Link
                      href={linkGithub}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-blue-600 px-6 py-3 text-blue-600 transition hover:-translate-y-0.5 hover:bg-blue-50"
                    >
                      Read the code
                    </Link>
                  </div>
                </div>
                <div className="relative mx-auto w-full max-w-xs overflow-hidden rounded-2xl border border-blue-100/60 bg-white/80">
                  {loading[id] !== false && (
                    <div className="absolute inset-0 flex items-center justify-center bg-white/80">
                      <div className="h-10 w-10 animate-spin rounded-full border-2 border-blue-600 border-t-transparent" />
                    </div>
                  )}
                  <Link href={link} target="_blank" rel="noreferrer">
                    <Image
                      src={image}
                      alt={`${title} preview`}
                      width={640}
                      height={480}
                      className="h-auto w-full object-cover"
                      unoptimized
                      onLoadingComplete={() => handleLoading(id)}
                    />
                  </Link>
                </div>
              </div>
            </article>
          )
        )}
      </div>
    </section>
  );
};

export default Services;
