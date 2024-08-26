"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const contacts = [
  {
    link: "mailto:farizwarman@gmail.com",
    image: "/assets/svg/gmail.svg",
    desc: "Send Email",
  },
  {
    link: "https://github.com/farizwrmn",
    image: "/assets/svg/github.svg",
    desc: "See Github Profile",
  },
  {
    link: "https://bit.ly/mfarizw",
    image: "/assets/svg/linkedin.svg",
    desc: "Visit LinkedIn Page",
  },
  {
    link: "https://wa.me/081298606155?text=Hello%20Fariz,%20I%20am%20interested%20in%20your%20services",
    image: "/assets/svg/whatsapp.svg",
    desc: "Send Message",
  },
];

const Contact = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 -mt-10">
      <h1 className="text-4xl font-bold mb-6 font-dirtyline">contact me</h1>
      <div className="bg-white shadow-md rounded-lg p-8 max-w-lg w-full">
        <p className="text-lg mb-4 text-center font-mono tracking-tighter">
          Feel free to reach out to me through any of the platforms below:
        </p>
        <ul className="list-none text-center flex mt-10 justify-between">
          {contacts.map((contact) => (
            <li key={contact.link}>
              <Link
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className="relative inline-block"
                >
                  <Image
                    src={contact.image}
                    alt="image"
                    width={50}
                    height={50}
                    className="inline mr-2 hover:transition-all hover:scale-110"
                  />
                  {isHovered && (
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
