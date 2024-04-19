import React from "react";

const Hero = () => {
     return (
          <div className="w-full  h-full  flex flex-col items-center justify-center">
             
               <div className="mt-28 ">
                    <h3 className="text-4xl p-4">
                         JobHub helps people get jobs:{" "}
                         <span className=" text-button">
                              {" "}
                              Over 16 million stories shared!{" "}
                         </span>
                    </h3>
                    <h5 className="text-lg text-center">
                         Unlock your dream career today - Find your perfect job
                    </h5>
               </div>
          </div>
     );
};

export default Hero;
