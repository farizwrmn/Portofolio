"use client";

import Breadcrumbs from "@/components/Breadcrumbs";
import Bounded from "@/components/Bounded";
import ExperienceList from "@/components/ExpList";
import Navbar from "@/components/Navbar";
import React from "react";

const Page = () => {
  return (
    <Bounded>
      <div className="w-full rounded-lg border border-slate-200/20 bg-white/10 backdrop-blur-sm">
        <Navbar />
        <div className="px-4 pb-2 sm:px-6">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Experiences" },
            ]}
          />
        </div>
        <ExperienceList />
      </div>
    </Bounded>
  );
};

export default Page;
