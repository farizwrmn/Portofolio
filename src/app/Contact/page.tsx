import Breadcrumbs from "@/components/Breadcrumbs";
import Bounded from "@/components/Bounded";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import React from "react";

const Page = () => {
  return (
    <Bounded>
      <div className="min-h-screen w-full rounded-3xl border border-slate-100/20 bg-slate-200/10 backdrop-blur-sm">
        <Navbar />
        <div className="px-4 pb-2 sm:px-6">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Contact" },
            ]}
          />
        </div>
        <Contact />
      </div>
    </Bounded>
  );
};

export default Page;
