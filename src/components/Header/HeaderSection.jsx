import React from "react";
import Navbar from "../Navbar/Navbar";

const HeaderSection = () => {
  return (
    <div>
      <section className="header bg-slate-900 flex justify-center flex-col">
        <Navbar />
        <section
          className="flex justify-center items-start flex-col gap-10 m-14 w-4/5 mx-auto p-7 mb-20
        "
        >
          <div className="flex justify-center items-start flex-col gap-3">
            <h2 className="text-violet-500 text-5xl font-medium">
              Deploy App Servers
            </h2>
            <h2 className="text-white text-4xl font-medium">
              Close to Your Users
            </h2>
          </div>
          <p className="text-gray-400 text-xl w-2/5 font-medium">
            Run your full stack apps (and databases!) all over the world. No ops
            required
          </p>
          <button className="rounded-lg bg-white px-4 py-4 text-base font-semibold text-violet-500 hover:bg-opacity-75 transition-all">Try It For Free</button>
        </section>
      </section>
    </div>
  );
};

export default HeaderSection;
