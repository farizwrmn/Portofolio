"use client";
import Hero from "@/components/Hero";
import Hero1 from "@/components/Hero1";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import usePrefersReducedMotion from "../hooks/ReducedMotion";
import Bounded from "@/components/Bounded";

export default function Home() {
  const container = useRef(null);
  const reduceMotion = usePrefersReducedMotion();
  gsap.registerPlugin(useGSAP);

  useGSAP(
    () => {
      // if (reduceMotion) {
      //   gsap.set(
      //     ".hero__body, .hero__heading, .hero__heading1, .hero__heading2, .navbar__link, .arrow",
      //     {
      //       opacity: 1,
      //     }
      //   );
      //   return;
      // }

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
    <Bounded className="bg-gradient-to-tr from-yellow-100 via-slate-100 to-white">
      <div
        className="bg-gradient-to-tr from-yellow-100 via-slate-100 to-white h-1/2"
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
