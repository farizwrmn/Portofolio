import Bounded from "@/components/Bounded";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <Bounded>
      <div className="w-full -inset-[10px] rounded-3xl border border-slate-100/20 bg-slate-200/10 backdrop-blur-sm min-h-screen">
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
