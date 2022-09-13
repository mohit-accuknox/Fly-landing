import React from "react";

const MapSection = () => {
  return (
    <div>
        <section className=" bg-violet-600 grid grid-cols-2 gap-16 p-16 mx-auto sm:grid-cols-1 sm:p-10">
          <div className="flex justify-center items-start flex-col gap-3 sm:mt-10">
            <h3 className="uppercase text-yellow-400 text-l font-semibold">
              We have the hardware
            </h3>
            <h1 className="text-4xl font-semibold text-white sm:w-full sm:text-2xl">
              Purpose-Built Cloud
            </h1>
            <p className="w-4/5 text-white/60 text-xl sm:w-full sm:text-base">
              We run physical server in cities close to your users. As close to
              the metal as you can get without paying shipping.
            </p>
          </div>
          <div className="w-11/12 rounded-xl mb-5 sm:mb-16">
            <img
              src="images/map.png"
              alt="Map"
              className="w-full rounded-xl shadow-xl sm:w-full"
            />
          </div>
        </section>
    </div>
  );
};

export default MapSection;
