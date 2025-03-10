"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

const Services = () => {
  const service = [
    {
      id: 1,
      title: "3d Website",
      link: "http://3d-soda-can-gilt.vercel.app/",
      image: "/assets/images/soda-can.gif",
      desc: "3D website with moving 3D assets of the products. I made this using Typescript, Next.JS, Tailwind CSS, Prismic, Three.JS, Figma and GSAP",
    },
    {
      id: 2,
      title: "Web Development",
      link: "https://event-management-platform-jcwdol013-01.vercel.app",
      image: "/assets/images/minpro.gif",
      desc: "Event Management Website made with Typescript, Next.js, Tailwind CSS, Clerk, Uploadthing and MongoDB.",
    },
    {
      id: 3,
      title: "E-commerce",
      link: "https://jcwdol130201.purwadhikabootcamp.com",
      image: "/assets/images/e-commerce.gif",
      desc: "E-Groceries for Final Project at Purwadhika Bootcamp made with Typescript, Next.js, Chakra UI, Multer, Nodemailer, Formik and Yup, Axios, React Slick, Chart.js, MySQL, JWT, Express, Xendit, Rajaongkir API and Prisma. ",
    },
    {
      id: 4,
      title: "Company Profile",
      link: "https://company-profile-pi.vercel.app",
      image: "/assets/images/compro.gif",
      desc: "Web based Company Profile made with Typescript, Next.js, Chakra UI, Axios and React Slick.",
    },
    {
      id: 5,
      title: "Invoice Management Web App",
      link: "https://github.com/farizwrmn/invoeasy",
      image: "/assets/images/invoeasy.gif",
      desc: "Invoice management app for 2nd Final Project at Purwadhika Bootcamp made with Typescript, Next.js, Tailwind CSS, Nodemailer, Formik and Yup, Axios, MySQL, JWT, Express, and Prisma.",
    },
    // {
    //   id: 6,
    //   title: "Point of Sale Desktop App",
    //   link: "/",
    //   image: "/assets/images/POS.gif",
    //   desc: "Cashier app for payment, inserting products with customer views. I'm part of the Front End team at K3Mart which made this app, we use Electron for Desktop based app, TypeScript, AntDesign, Axios, Redux, and PouchDB",
    // },
    {
      id: 6,
      title: "Payment Point Online Bank Web App",
      link: "http://nutech-reactjs-redux.vercel.app/",
      image: "/assets/images/nutech.gif",
      desc: "This is a take home test for a Front End Developer gig at a software company in Indonesia. I made this app with Typescript, React, NextJS, Tailwind CSS, Redux and Axios",
    },
  ];

  return (
    <>
      <div className="m-5">
        <h3 className="text-blue-950 xl:text-center font-dirtyline xl:text-2xl">
          Services
        </h3>
      </div>
      <div className="mb-10">
        <h1 className="text-3xl text-center text-blue-950 tracking-tighter">
          These are the services I provide the most
        </h1>
        <Image
          src="/assets/svg/arrow.svg"
          alt="down-arrow"
          width={50}
          height={50}
          className="m-auto mt-5 arrow opacity-40"
        />
      </div>
      <div>
        <ul>
          {service.map(({ id, link, title, image, desc }) => (
            <>
              <li
                key={id}
                className="text-2xl text-center text-blue-950 py-10 font-bold mt-2 font-dirtyline"
              >
                • {title} •
              </li>
              <div className="flex justify-center">
                <Link href={link} target="_blank">
                  <Image
                    src={image}
                    alt="image"
                    width={500}
                    height={500}
                    className="rounded-xl"
                  />
                </Link>
              </div>
              <p className="text-slate-500 mt-5 text-center text-sm p-4 tracking-tighter">
                {desc}
                <br />
                <br />
                (Click to visit)
              </p>
              <h3 className="text-blue-950 mt-5 text-right">
                ________________
              </h3>
            </>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Services;
