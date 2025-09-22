import Image from "next/image";
import React from "react";

type Experience = {
  id: number;
  role: string;
  company: string;
  timeframe: string;
  summary: string;
  achievements: string[];
  stackHighlights?: string;
};

const experiences: Experience[] = [
  {
    id: 1,
    role: "Front End Developer",
    company: "K3MART · PT. Katiga Retail Strengindo",
    timeframe: "Nov 2024 – Present",
    summary:
      "Leading the UI modernization of nationwide retail tooling spanning POS, inventory, and franchise management.",
    achievements: [
      "Refactored POS checkout flows and caching strategy, reducing transaction time by 35% and raising cashier NPS to 4.6/5.",
      "Implemented automated regression tests and observability dashboards that cut production bugs by 48% month-over-month.",
      "Rolled out AI-assisted product data uploads that eliminate 20+ hours of weekly manual entry across 40 branches.",
    ],
    stackHighlights:
      "React, Next.js, TypeScript, Redux Toolkit, Tailwind, Ant Design, Prisma, Axios, Express",
  },
  {
    id: 2,
    role: "Front Officer",
    company: "Siloam Hospitals",
    timeframe: "Apr 2021 – Aug 2022",
    summary:
      "Coordinated patient experience operations across outpatient clinics while partnering with marketing and insurance teams.",
    achievements: [
      "Introduced a ticketing workflow that reduced patient wait times by 18% during peak hours.",
      "Maintained 99% accuracy in insurance eligibility checks by formalizing SOPs and auditing data nightly.",
      "Collaborated with marketing on wellness campaigns that lifted screening registrations by 24% in one quarter.",
    ],
    stackHighlights: "CRM, Google Workspace, stakeholder comms, process optimization",
  },
  {
    id: 3,
    role: "International Convention Intern",
    company: "NCB Interpol Indonesia",
    timeframe: "Sept 2018 – Nov 2018",
    summary:
      "Supported global coordination for multi-country security delegations and managed sensitive briefing materials.",
    achievements: [
      "Drafted logistics playbooks adopted across 5 high-stakes events, shortening delegate onboarding by 30%.",
      "Consolidated agenda research into digestible briefs that improved executive preparedness scores to 92%.",
      "Facilitated communication between international delegates, ensuring 100% attendance confirmation ahead of summit.",
    ],
    stackHighlights: "Research, stakeholder enablement, bilingual communication",
  },
];

const ExperienceList = () => {
  return (
    <section className="pb-16 text-blue-950">
      {experiences.map(
        ({ id, role, company, timeframe, summary, achievements, stackHighlights }) => (
          <article
            key={id}
            className="mt-16 rounded-3xl border border-blue-100/50 bg-white/60 p-8 shadow-lg shadow-blue-100/40 backdrop-blur"
          >
            <header className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-500">
                {role}
              </p>
              <p className="mt-2 text-lg font-semibold text-blue-900">{company}</p>
              <p className="mt-1 text-sm text-slate-600">{timeframe}</p>
            </header>
            <p className="mt-6 text-center text-sm leading-relaxed text-slate-600 sm:text-base">
              {summary}
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-600 sm:text-base">
              {achievements.map((achievement) => (
                <li key={achievement} className="flex gap-3 rounded-2xl bg-white/70 p-4">
                  <span aria-hidden className="mt-2 h-2 w-2 rounded-full bg-blue-400" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
            {stackHighlights && (
              <p className="mt-6 text-center text-xs uppercase tracking-[0.3em] text-blue-500">
                Tooling & Focus · {stackHighlights}
              </p>
            )}
          </article>
        )
      )}
      <div className="mt-16 flex justify-center">
        <Image
          src="/assets/svg/experience.svg"
          alt="Illustration showing experience milestones"
          className="h-auto w-64 sm:w-80"
          width={500}
          height={400}
        />
      </div>
      <h3 className="text-blue-950 mt-10 text-center text-sm uppercase tracking-[0.5em]">
        Keep scrolling for more wins
      </h3>
    </section>
  );
};

export default ExperienceList;
