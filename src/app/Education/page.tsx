import Bounded from "@/components/Bounded";
import EduList from "@/components/EduList";
import Navbar from "@/components/Navbar";
import React from "react";

const Page = () => {
  return (
    <Bounded className="bg-gradient-to-tr from-yellow-100 via-slate-100 to-white w-full">
      <div className="bg-gradient-to-tr from-yellow-100 via-slate-100 to-white h-1/2 w-full">
        <Navbar />
        <EduList />
      </div>
    </Bounded>
  );
};

export default Page;
