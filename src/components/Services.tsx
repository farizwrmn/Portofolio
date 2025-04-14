"use client";

import { link } from "fs";
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
      linkGithub: "https://github.com/farizwrmn/3d-soda-can",
    },
    {
      id: 2,
      title: "Web Development",
      link: "https://event-management-platform-jcwdol013-01.vercel.app",
      image: "/assets/images/minpro.gif",
      desc: "Event Management Website made with Typescript, Next.js, Tailwind CSS, Clerk, Uploadthing and MongoDB.",
      linkGithub: "https://github.com/farizwrmn/event-management-platform-jcwdol013-01",
    },
    {
      id: 3,
      title: "E-commerce",
      link: "https://jcwdol130201.purwadhikabootcamp.com",
      image: "/assets/images/e-commerce.gif",
      desc: "E-Groceries for Final Project at Purwadhika Bootcamp made with Typescript, Next.js, Chakra UI, Multer, Nodemailer, Formik and Yup, Axios, React Slick, Chart.js, MySQL, JWT, Express, Xendit, Rajaongkir API and Prisma. ",
      linkGithub: "https://github.com/farizwrmn/finpro-jcwdol-013-01",
    },
    {
      id: 4,
      title: "Company Profile",
      link: "https://company-profile-pi.vercel.app",
      image: "/assets/images/compro.gif",
      desc: "Web based Company Profile made with Typescript, Next.js, Chakra UI, Axios and React Slick.",
      linkGithub: "https://github.com/farizwrmn/CompanyProfile",
    },
    {
      id: 5,
      title: "Invoice Management Web App",
      link: "https://github.com/farizwrmn/invoeasy",
      image: "/assets/images/invoeasy.gif",
      desc: "Invoice management app for 2nd Final Project at Purwadhika Bootcamp made with Typescript, Next.js, Tailwind CSS, Nodemailer, Formik and Yup, Axios, MySQL, JWT, Express, and Prisma.",
      linkGithub: "https://github.com/farizwrmn/invoeasy",
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
      linkGithub: "https://github.com/farizwrmn/nutech-reactjs-redux",
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
          {service.map(({ id, link, title, image, desc, linkGithub }) => (
            <React.Fragment key={id}>
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
                    unoptimized
                  />
                </Link>
              </div>
              <p className="text-slate-500 mt-5 text-center text-sm p-4 tracking-tighter">
                {desc}
                <br />
                <br />
                <Link className="text-slate-50 mt-5 text-center text-sm p-2 tracking-tighter bg-blue-500 rounded-lg mr-4" href={link} target="_blank">Production</Link>
                ●
                <Link className="text-white mt-5 text-center text-sm p-2 tracking-tighter bg-black rounded-lg ml-4" href={linkGithub} target="_blank">Github</Link>
              </p>
              <h3 className="text-blue-950 mt-5 text-right">
                ________________
              </h3>
            </React.Fragment>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Services;
