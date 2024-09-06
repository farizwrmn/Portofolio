"use client";

import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import gsap from "gsap";

const contacts = [
  {
    id: 1,
    link: "mailto:farizwarman@gmail.com",
    image: "/assets/svg/gmail.svg",
    desc: "Send Email",
    class: "mail",
  },
  {
    id: 2,
    link: "https://github.com/farizwrmn",
    image: "/assets/svg/github.svg",
    desc: "See Github Profile",
    class: "github",
  },
  {
    id: 3,
    link: "https://bit.ly/mfarizw",
    image: "/assets/svg/linkedin.svg",
    desc: "Visit LinkedIn Page",
    class: "linkedin",
  },
  {
    id: 4,
    link: "https://wa.me/+6281298606155?text=Hello%20Fariz,%20I%20am%20interested%20in%20your%20services",
    image: "/assets/svg/whatsapp.svg",
    desc: "Send Message",
    class: "whatsapp",
  },
];

const Contact = () => {
  const [isHovered, setIsHovered] = useState<number | null>(null);
  const container = useRef(null);
  gsap.registerPlugin(useGSAP);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

      gsap.to(".mail ", {
        repeat: 0,
        yoyo: true,
        duration: 2,
        rotationY: 360,
      });
      gsap.to(".github ", {
        repeat: 0,
        yoyo: true,
        duration: 2,
        rotationY: 360,
        delay: 0.5,
      });
      gsap.to(".linkedin ", {
        repeat: 0,
        yoyo: true,
        duration: 2,
        rotationY: 360,
        delay: 1,
      });
      gsap.to(".whatsapp ", {
        repeat: 0,
        yoyo: true,
        duration: 2,
        rotationY: 360,
        delay: 1.5,
      });
    },
    { scope: container }
  );

  return (
    <div
      className="flex flex-col items-center justify-center mt-10 inset-20 z-50 absolute align-center"
      ref={container}
    >
      <h1 className="text-2xl font-bold mb-3 font-dirtyline">contact me</h1>
      <div>
        <p className="text-lg mb-4 text-center font-mono tracking-tighter">
          Feel free to reach out to me by clicking any of the platforms below:
        </p>
        <ul className="list-none text-center flex mt-10 justify-between gap-4">
          {contacts.map((contact) => (
            <li key={contact.id}>
              <div
                onClick={() =>
                  setIsHovered(contact.id === isHovered ? null : contact.id)
                }
                className="relative inline-block cursor-pointer"
              >
                <Image
                  src={contact.image}
                  alt="image"
                  width={50}
                  height={50}
                  className={`${contact.class}`}
                />
                {isHovered === contact.id && (
                  <button
                    className={`absolute top-12 left-1/2 transform -translate-x-1/2 text-black p-2 mt-2 tracking-tighter rounded-2xl shadow-2xl `}
                  >
                    <Link
                      href={contact.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`font-bold font-mono bg-transparent`}
                    >
                      {contact.desc}
                    </Link>
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Contact;
