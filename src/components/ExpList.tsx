import Image from "next/image";
import Link from "next/link";
import React from "react";

const ExperienceList = () => {
  return (
    <>
      {/* Experience: K3MART */}
      <div className="mt-20">
        <p className="text-slate-700 font-semibold text-center italic tracking-tighter mb-2">
          Front End Developer at K3MART - PT. Katiga Retail Strengindo
        </p>
        <h3 className="text-center font-bold tracking-tighter">
          Nov, 2024 - Present
        </h3>
        <p className="tracking-tighter text-center font-light lg:mb-10 mb-5 text-sm px-4">
          As a Front End Developer at K3MART, I contributed to building and maintaining internal tools such as Point of Sale (POS) systems and inventory (stock opname) features used across retail branches. I took the lead in refactoring and expanding legacy codebases, which significantly improved code maintainability and performance. My day-to-day work involved developing scalable and responsive UIs using React, Next.js, and TypeScript. I integrated Redux for state management and utilized libraries like Axios, Prisma, Multer, and Express to handle authentication, file uploads, and form submissions. Additionally, I crafted accessible, mobile-friendly designs with Tailwind CSS, Chakra UI, and AntDesign to ensure a consistent user experience across platforms.
        </p>
      </div>
      <div>
        <h3 className="text-blue-950 text-center p-5">↑</h3>
      </div>
      {/* Experience: Siloam Hospitals */}
      <div className="mt-10">
        <p className="text-slate-700 font-semibold text-center italic tracking-tighter mb-2">
          Front Officer at Siloam Hospitals
        </p>
        <h3 className="text-center font-bold tracking-tighter">
          Apr, 2021 - Aug, 2022
        </h3>
        <p className="tracking-tighter text-center font-light lg:mb-10 mb-5 text-sm px-4">
          During my time at Siloam Hospitals, I was responsible for organizing patient appointments and ensuring smooth communication between doctors and patients. I regularly verified insurance eligibility and collaborated with insurance companies to confirm treatment coverage. My role also involved assisting patients with form completion, maintaining up-to-date digital records, handling payment processing, and supporting the marketing division in brainstorming promotional campaigns for Swab and Rapid Test services.
        </p>
      </div>
      <div>
        <h3 className="text-blue-950 text-center p-5">↑</h3>
      </div>
      {/* Experience: Interpol Internship */}
      <div className="mt-10">
        <p className="text-slate-700 font-semibold text-center italic tracking-tighter mb-2">
          Internship (International Convention Division) at NCB Interpol Indonesia
        </p>
        <h3 className="text-center font-bold tracking-tighter">
          Sept, 2018 - Nov, 2018
        </h3>
        <p className="tracking-tighter text-center font-light lg:mb-10 mb-5 text-sm px-4">
          During my internship at NCB Interpol Indonesia, I assisted in organizing international coordination meetings by preparing schedules and contacting appointed delegates to confirm their attendance. I was also tasked with collecting and organizing key data related to meeting agendas. Furthermore, I briefed delegates to ensure they were well-informed about the discussion topics and objectives prior to the meetings.
        </p>
      </div>
      {/* Illustration Image */}
      <div className="flex justify-center mt-10">
        <Image
          src="/assets/svg/experience.svg"
          alt="experience illustration"
          className="rounded-xl"
          width={500}
          height={400}
        />
      </div>

      <h3 className="text-blue-950 mt-5 text-center p-5">________________</h3>
    </>
  );
};

export default ExperienceList;
