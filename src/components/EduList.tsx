import Image from "next/image";
import Link from "next/link";
import React from "react";

const EduList = () => {
  return (
    <>
      <div className="flex justify-start m-5">
        <Link href="/">
          <p className="text-blue-400 tracking-tighter">Home</p>
        </Link>
        <p className="ml-2 mr-2 align-center">{"/"}</p>
        <p className=" text-blue-950 underline tracking-tighter"> Education</p>
      </div>
      <div></div>
      <div>
        <p className="text-slate-400 text-center italic mt-20 tracking-tighter mb-5">
          Purwadhika Full Stack Developer Bootcamp
        </p>
        <h3 className="mt-5 text-center font-bold tracking-tighter">
          Jan, 2024 - Present
        </h3>
        <p className="tracking-tighter text-center font-light lg:mb-10">
          Learn basic coding from Javascript&apos;s logic to Front End and Back
          End using the latest curriculum that industry needs nowadays.
        </p>
      </div>
      <div>
        <h3 className="text-blue-950 text-center p-5">↑</h3>
      </div>
      <div>
        <p className="text-slate-400 text-center italic tracking-tighter mb-5">
          International Relation at University of Al Azhar Indonesia
        </p>
      </div>
      <div>
        <h3 className="mt-5 text-center font-bold tracking-tighter">
          Nov, 2015 - Jan, 2020
        </h3>
        <p className="tracking-tighter text-center font-light lg:mb-10 mb-5">
          During my studies, I had a high interest in International Economics
          courses, therefore I used creative economy of the Industry era 4.0 as
          my thesis with the title &quot;The Role of the Creative Economy as a
          tool for Indonesian Public Diplomacy (Through the World Conference on
          Creative Economy program)&quot;.
        </p>
        <Image
          src="/assets/svg/bootcamp.svg"
          alt="final-project"
          className="rounded-xl"
          width={500}
          height={400}
        />
        <h3 className="text-blue-950 mt-5 text-center p-5">________________</h3>
      </div>
    </>
  );
};

export default EduList;
