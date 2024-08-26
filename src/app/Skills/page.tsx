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
  const ProData = {
    labels: ["HTML", "CSS", "Typescript", "JavaScript"],
    datasets: [
      {
        label: "My Skills",
        data: [80, 80, 80, 70, 100],
        backgroundColor: ["orange", "blue", "skyblue", "yellow"],
      },
    ],
  };
  const BeData = {
    labels: ["Node.js", "Express", "Prisma", "mongoDB", "mySQL"],
    datasets: [
      {
        label: "My Skills",
        data: [50, 60, 70, 40, 80, 100],
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
        data: [60, 70, 80, 70, 50, 50, 60, 100],
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
        data: [80, 80, 100],
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
    <Bounded className="bg-gradient-to-tr from-yellow-100 via-slate-100 to-white w-full">
      <div
        className="bg-gradient-to-tr from-yellow-100 via-slate-100 to-white h-1/2 w-full"
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <ProChart ProData={ProData} />
          <FeChart FeData={FeData} />
          <BeChart BeData={BeData} />
          <CloudChart CloudData={CloudData} />
        </div>
        <h3 className="text-blue-950 mt-5 text-center p-5">________________</h3>
      </div>
    </Bounded>
  );
};

export default Page;
