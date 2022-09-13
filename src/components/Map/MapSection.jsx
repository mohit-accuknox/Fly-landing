import React from "react";

const MapSection = () => {
  return (
    <div>
      <section className=" bg-violet-600 flex justify-center items-center flex-col gap-16 p-16">
        <div className="flex justify-center items-start flex-col gap-3">
          <h3 className="uppercase text-yellow-400 text-l font-semibold">We have the hardware</h3>
          <h1 className="text-4xl font-semibold text-white">Purpose-Built Cloud</h1>
          <p className="w-4/5 text-white/60 text-xl">
            We run physical server in cities close to your users. As close to
            the metal as you can get without paying shipping.
          </p>
        </div>
        <div className="w-7/12 rounded-xl mb-5">
          <img src="images/map.png" alt="Map" className="w-full rounded-xl shadow-xl"/>
        </div>
      </section>
    </div>
  );
};

export default MapSection;
