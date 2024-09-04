import React from "react";

const Hero = () => {
  return (
    <>
      <div className="mt-10 text-center text-blue-950 hero__heading">
        {" "}
        <h3 className="text-md tracking-tight lg:text-xl">Hey, Look at me!</h3>
      </div>
      <div className="hero text-center tracking-tight text-blue-950 hero__heading1">
        <h1 className="text-3xl not-italic p-5 hero__heading2">
          I{" "}
          <span className="font-semibold italic hero__heading2">
            Design, Develop and Support responsive websites
          </span>{" "}
          also web app.
        </h1>
      </div>
    </>
  );
};

export default Hero;
