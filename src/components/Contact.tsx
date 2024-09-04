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
      className="flex flex-col items-center justify-center p-4 mt-10 left-0 right-0 top-0 bottom-0"
      ref={container}
    >
      <h1 className="text-4xl font-bold mb-6 font-dirtyline">contact me</h1>
      <div>
        <p className="text-lg mb-4 text-center font-mono tracking-tighter">
          Feel free to reach out to me through any of the platforms below:
        </p>
        <ul className="list-none text-center flex mt-10 justify-between">
          {contacts.map((contact) => (
            <li key={contact.id}>
              <Link
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  onMouseEnter={() => setIsHovered(contact.id)}
                  onMouseLeave={() => setIsHovered(null)}
                  className="relative inline-block"
                >
                  <Image
                    src={contact.image}
                    alt="image"
                    width={50}
                    height={50}
                    className={`inline mr-2 hover:transition-all hover:scale-110 ${contact.class}`}
                  />
                  {isHovered == contact.id && (
                    <div className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-white text-black p-2 rounded shadow-lg mt-2">
                      {contact.desc}
                    </div>
                  )}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Contact;
