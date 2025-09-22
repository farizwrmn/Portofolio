"use client";
import Navbar from "@/components/Navbar";
import BeChart from "@/components/ui/BeChart";
import CloudChart from "@/components/ui/CloudChart";
import FeChart from "@/components/ui/FeChart";
import ProChart from "@/components/ui/ProChart";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import React from "react";
import usePrefersReducedMotion from "@/hooks/ReducedMotion";
import Bounded from "@/components/Bounded";
import Link from "next/link";

const Page = () => {
  const skillHighlights = [
    "Led the migration of retail tooling to Next.js 14 App Router with React Server Components, improving build times by 28%.",
    "Established a testing matrix (Jest, Playwright, axe) that keeps mission-critical flows at 95% automated coverage.",
    "Implemented observability dashboards with Sentry and LogRocket, shrinking mean time to resolution to under 2 hours.",
  ];
  const ProData = {
    labels: ["HTML", "CSS", "Typescript", "JavaScript"],
    datasets: [
      {
        label: "My Skills",
        data: [80, 80, 80, 70],
        backgroundColor: ["orange", "blue", "skyblue", "yellow"],
      },
    ],
  };
  const BeData = {
    labels: ["Node.js", "Express", "Prisma", "mongoDB", "mySQL"],
    datasets: [
      {
        label: "My Skills",
        data: [50, 60, 70, 60, 65],
        backgroundColor: ["green", "black", "white", "teal", "turquoise"],
      },
    ],
  };
  const FeData = {
    labels: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Chakra UI",
      "ShadCN UI",
      "Bootstrap",
      "axios",
    ],
    datasets: [
      {
        label: "My Skills",
        data: [60, 70, 80, 70, 60, 55, 65],
        backgroundColor: [
          "skyblue",
          "black",
          "cyan",
          "turquoise",
          "grey",
          "purple",
          "violet",
        ],
      },
    ],
  };
  const CloudData = {
    labels: ["Vercel", "Github Pages"],
    datasets: [
      {
        label: "My Skills",
        data: [80, 75],
        backgroundColor: ["black", "teal"],
      },
    ],
  };

  const container = useRef(null);
  const reduceMotion = usePrefersReducedMotion();
  gsap.registerPlugin(useGSAP);

  useGSAP(
    () => {
      if (reduceMotion) {
        gsap.set(".hero__body", {
          opacity: 1,
        });
        return;
      }
      const tl = gsap.timeline();

      // gsap.fromTo(
      //   ".hero__body",
      //   { scale: 0.2 },
      //   { scale: 1, opacity: 1, duration: 1 }
      // );
    },
    { scope: container }
  );
  return (
    <Bounded>
      <div
        className="bg-white/10 backdrop-blur-sm border border-slate-200/20 rounded-lg w-full"
        ref={container}
      >
        <Navbar />
        <div className="flex justify-start m-5">
          <Link href="/">
            <p className="text-blue-400 tracking-tighter">Home</p>
          </Link>
          <p className="ml-2 mr-2 align-center">{"/"}</p>
          <p className=" text-blue-950 underline tracking-tighter"> Skills</p>
        </div>
        <h3 className="text-blue-950 text-center m-10 text-2xl tracking-tighter">
          • Area of Expertise •
        </h3>
        <p className="mx-auto max-w-3xl text-center text-sm text-slate-600 sm:text-base">
          I bridge modern front-end engineering with product strategy—pairing
          resilient component systems, automation, and observability to unlock
          measurable business wins.
        </p>
        <ul className="mx-auto mt-8 max-w-3xl space-y-3 text-sm text-slate-600 sm:text-base">
          {skillHighlights.map((highlight) => (
            <li
              key={highlight}
              className="rounded-2xl border border-blue-100/60 bg-white/70 p-4 text-left shadow-sm"
            >
              <span className="font-semibold text-blue-900">Impact:</span>{" "}
              {highlight}
            </li>
          ))}
        </ul>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <ProChart ProData={ProData} />
          <FeChart FeData={FeData} />
          <BeChart BeData={BeData} />
          <CloudChart CloudData={CloudData} />
        </div>
        <div className="mt-10 rounded-3xl border border-blue-100/50 bg-white/70 p-6 text-sm text-slate-600 sm:text-base">
          <h4 className="text-center text-base font-semibold uppercase tracking-[0.3em] text-blue-500">
            Collaboration Toolkit
          </h4>
          <p className="mt-4 leading-relaxed">
            Daily tools include Linear, Notion, Figma, Loom, Miro, and Jira for
            roadmap clarity; GitHub Actions, Vercel, and Docker for deployment;
            and Mixpanel, Google Analytics, and Looker Studio for insight
            tracking. I’m comfortable integrating AI copilots (Cursor, Vercel AI
            SDK) to accelerate research and prototyping while keeping humans in
            the loop.
          </p>
        </div>
        <h3 className="text-blue-950 mt-5 text-center p-5">________________</h3>
      </div>
    </Bounded>
  );
};

export default Page;
