import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="mt-10 text-center">
        <h3 className="text-xl p-4 md:text-2xl lg:text-3xl xl:text-4xl">
          JobHub helps people get jobs:{" "}
          <span className="text-button">Over 16 million stories shared!</span>
        </h3>
        <h5 className="text-sm md:text-base lg:text-lg xl:text-xl px-6">
          Unlock your dream career today - Find your perfect job
        </h5>
      </div>
    </div>
  );
};

export default Hero;
