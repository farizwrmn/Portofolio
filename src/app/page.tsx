"use client";
import Hero from "@/components/Hero";
import Hero1 from "@/components/Hero1";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Bounded from "@/components/Bounded";
import StarGrid from "@/components/ui/StarGrid";

export default function Home() {
  const container = useRef(null);
  gsap.registerPlugin(useGSAP);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

      tl.fromTo(
        ".hero__heading",
        { scale: 0.5 },
        { scale: 1, opacity: 1, duration: 1 }
      );
      tl.fromTo(
        ".hero__heading1",
        { scale: 0.5 },
        { scale: 1, opacity: 1, duration: 1 }
      );
      tl.fromTo(
        ".hero__heading2",
        { scale: 1 },
        { scale: 1, opacity: 1, duration: 2 }
      );
      tl.to(".arrow ", {
        y: 50,
        opacity: 1,
        repeat: -1,
        yoyo: true,
        duration: 1,
      });
    },
    { scope: container }
  );
  return (
    <Bounded>
      <div
        className="relative -inset-[2px] rounded-3xl border border-slate-100/20 bg-slate-200/10 backdrop-blur-sm"
        ref={container}
      >
        <Navbar />
        <Hero />
        <h3 className="text-blue-950 mt-5">________________</h3>
        <Services />
        <Hero1 />
        <h3 className="text-blue-950 mt-5 text-center p-5">________________</h3>
      </div>
    </Bounded>
  );
}
