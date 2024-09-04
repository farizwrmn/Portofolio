import Bounded from "@/components/Bounded";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <Bounded>
      <div className="w-full">
        <Navbar />
        <div className="flex justify-start m-5">
          <Link href="/">
            <p className="text-blue-400 tracking-tighter">Home</p>
          </Link>
          <p className="ml-2 mr-2 align-center">{"/"}</p>
          <p className=" text-blue-950 underline tracking-tighter"> Contact</p>
        </div>
        <Contact />
      </div>
    </Bounded>
  );
};

export default Page;
