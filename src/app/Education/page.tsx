import Bounded from "@/components/Bounded";
import EduList from "@/components/EduList";
import Navbar from "@/components/Navbar";
import React from "react";

const Page = () => {
  return (
    <Bounded>
      <div className="bg-white/10 backdrop-blur-sm border border-slate-200/20 rounded-lg w-full">
        <Navbar />
        <EduList />
      </div>
    </Bounded>
  );
};

export default Page;
