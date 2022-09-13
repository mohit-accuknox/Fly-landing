import React from "react";

const FeatureSection = () => {
  return (
    <div>
      <section className="flex justify-center items-center p-20">
        <section className="flex justify-center items-center flex-col gap-12">
          <div className="flex justify-center items-start flex-col gap-3 w-full">
            <h3 className="text-l text-violet-500 uppercase font-semibold">
              fresh baked feature
            </h3>
            <h1 className="text-black font-semibold text-3xl">
              PostgreSQL Clusters
            </h1>
            <p className="font-medium text-lg w-11/12 text-gray-600">
              Launch highly available PostgreSQL clusters with a single command
              and a generous free tier. Create read replicas in different
              cities.
            </p>
            <button className="border-2 border-gray-500 rounded-xl py-3 px-4 text-l font-semibold text-black mt-4 hover:text-violet-500 transition-all hover:border-violet-200 hover:bg-violet-200">
              Read More
            </button>
          </div>
          <div className="flex justify-center items-start flex-col w-full gap-8">
            <h3 className="uppercase text-lg font-semibold text-violet-500">hot-n-ready favorites</h3>
            <div className="flex justify-between items-center flex-wrap gap-10 ">
                <ul className="flex justify-center items-start flex-col gap-4 w-2/5">
                    <li className="text-lg flex justify-center items-center gap-2 font-semibold text-black"><img src="images/tick.png" alt="" className="w-12"/> CPU,Memory, and Storage on Tap</li>
                    <li className="w-10/12 text-lg text-gray-600 font-medium">Provision exactly what you need to make yours apps fly. Pay only for what you use.</li>
                </ul>
                <ul className="flex justify-center items-start flex-col gap-4 w-2/5">
                    <li className="text-lg flex justify-center items-center gap-2  font-semibold text-black"><img src="images/tick.png" alt="" className="w-12"/> Batteries Included Networking</li>
                    <li className="w-10/12 text-lg text-gray-600 font-medium">Zero configuration private networking and global load balancing.</li>
                </ul>
                <ul className="flex justify-center items-start flex-col gap-4 w-2/5">
                    <li className="text-lg flex justify-center items-center gap-2  font-semibold text-black"><img src="images/tick.png" alt="" className="w-12"/> Metrics and Alerting</li>
                    <li className="w-10/12 text-lg text-gray-600 font-medium">The plumbing you need to sleep at night. Pretty graphs for morning coffee.</li>
                </ul>
                <ul className="flex justify-center items-start flex-col gap-4 w-2/5">
                    <li className="text-lg flex justify-center items-center gap-2  font-semibold text-black"><img src="images/tick.png" alt="" className="w-12"/> SSL At Any Scale</li>
                    <li className="w-10/12 text-lg text-gray-600 font-medium">Add certificates for your own purposes, or a million for your customers.</li>
                </ul>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default FeatureSection;
