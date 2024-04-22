import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="mt-10 text-center">
        <h3 className="text-xl p-4 :text-lg md:text-xl lg:text-2xl xl:text-3xl  w-[300px] md:w-[500px] lg:w-[700px]" >
          JobHub helps people get jobs:{" "}
          <span className="text-button">Over 16 million stories shared!</span>
        </h3>
        <h5 className="text-sm px-6 sm:text-base md:text-lg lg:text-xl xl:text-2xl">
          Unlock your dream career today - Find your perfect job
        </h5>
      </div>
    </div>
  );
};

export default Hero;
