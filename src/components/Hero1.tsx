import React from "react";

const Hero1 = () => {
  return (
    <div className="xl:flex xl:justify-center">
      <h3 className="text-blue-950 tracking-tighter text-end text-xl mr-5 xl:mt-40 mt-5">
        <span className="font-dirtyline text-5xl">B</span>oost your business
        with creative yet simple web design and development!
      </h3>
      <div className="xl:flex xl:justify-center xl:w-80 xl:h-300">
        <img src="/assets/images/boost.svg" alt="business" />
      </div>
    </div>
  );
};

export default Hero1;
