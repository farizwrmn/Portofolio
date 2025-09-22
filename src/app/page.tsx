"use client";
import Hero from "@/components/Hero";
import Hero1 from "@/components/Hero1";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Bounded from "@/components/Bounded";

export default function Home() {
  const container = useRef(null);
  gsap.registerPlugin(useGSAP);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      tl.fromTo(
        [".hero__tagline", ".hero__title", ".hero__summary"],
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15 }
      );
      tl.fromTo(
        ".hero__cta a",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 },
        "-=0.2"
      );
      tl.fromTo(
        ".hero__stat-item",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 },
        "-=0.1"
      );
    },
    { scope: container }
  );
  return (
    <Bounded>
      <div
        className="relative -inset-[2px] space-y-16 rounded-3xl border border-slate-100/20 bg-slate-200/10 p-4 backdrop-blur-sm sm:space-y-20 sm:p-8 lg:space-y-24"
        ref={container}
      >
        <Navbar />
        <Hero />
        <Services />
        <Hero1 />
      </div>
    </Bounded>
  );
}
