"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

type ContactChannel = {
  id: number;
  link: string;
  image: string;
  label: string;
  helper: string;
};

const contacts: ContactChannel[] = [
  {
    id: 1,
    link: "mailto:farizwarman@gmail.com",
    image: "/assets/svg/gmail.svg",
    label: "Email",
    helper: "farizwarman@gmail.com",
  },
  {
    id: 2,
    link: "https://github.com/farizwrmn",
    image: "/assets/svg/github.svg",
    label: "GitHub",
    helper: "Open-source work and documentation",
  },
  {
    id: 3,
    link: "https://bit.ly/mfarizw",
    image: "/assets/svg/linkedin.svg",
    label: "LinkedIn",
    helper: "Let’s connect for product conversations",
  },
  {
    id: 4,
    link: "https://wa.me/+6281298606155?text=Hello%20Fariz,%20I%20am%20interested%20in%20your%20services",
    image: "/assets/svg/whatsapp.svg",
    label: "WhatsApp",
    helper: "Instant availability for project scoping",
  },
];

const Contact = () => {
  const container = useRef(null);
  gsap.registerPlugin(useGSAP);

  useGSAP(
    () => {
      gsap.fromTo(
        ".contact-card",
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
        }
      );
    },
    { scope: container }
  );

  return (
    <div
      className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-10 px-4 pb-16 pt-24 text-blue-950 sm:px-6 sm:pt-28"
      ref={container}
    >
      <div className="text-center">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Let’s ship something extraordinary together
        </h1>
        <p className="mt-4 text-sm text-slate-600 sm:text-base">
          Choose the channel that works best for you—I respond within one
          business day and can share tailored resumes, product roadmaps, or code
          samples on request.
        </p>
      </div>
      <div className="grid w-full gap-6 sm:grid-cols-2">
        {contacts.map(({ id, link, image, label, helper }) => (
          <Link
            key={id}
            href={link}
            target={link.startsWith("http") ? "_blank" : undefined}
            rel={link.startsWith("http") ? "noreferrer" : undefined}
            className="contact-card flex items-center gap-4 rounded-2xl border border-blue-100/60 bg-white/70 p-5 shadow-lg transition hover:-translate-y-1 hover:shadow-blue-200/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
          >
            <Image src={image} alt="" width={48} height={48} />
            <div>
              <p className="text-lg font-semibold text-blue-900">{label}</p>
              <p className="text-sm text-slate-600">{helper}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="rounded-3xl border border-blue-100/60 bg-white/70 p-6 text-center text-sm text-slate-600">
        Prefer an async intro? Share a short brief at
        <Link
          href="mailto:farizwarman@gmail.com"
          className="ml-1 font-semibold text-blue-700 underline"
        >
          farizwarman@gmail.com
        </Link>
        , and I’ll reply with next steps, timelines, and availability.
      </div>
    </div>
  );
};

export default Contact;
