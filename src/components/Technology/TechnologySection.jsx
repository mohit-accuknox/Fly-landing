import React from "react";

const TechnologySection = () => {
  return (
    <div>
      <section className="flex justify-center items-center flex-col gap-6 bg-violet-600 p-10 sm:p-5">
        <section className="flex justify-center items-center gap-6 m-20 w-8/12 p-3 sm:flex-col sm:m-10 sm:w-full">
          <div className="flex justify-center items-start flex-col gap-6 sm:mb-10">
            <h2 className="text-lg font-medium text-yellow-500 sm:w-full ">
              we've got you covered
            </h2>
            <h1 className="text-3xl font-bold text-white sm:text-2xl">
              Use the Tech You Love
            </h1>
            <p className="text-lg w-3/5 text-gray-300 sm:w-full">
              Build with your favorite framework, ship on Fly.io. If you can
              build it into a Dockerfile, we can run it.
            </p>
            <button className="border-2 border-gray-400 hover:border-violet-600 p-3 px-5 rounded-xl text-base font-semibold text-white bg-violet-600 hover:bg-white hover:bg-opacity-75 transition-all hover:text-violet-600">
              Read More
            </button>
          </div>
          <div className="flex justify-center items-start flex-wrap gap-10 flex-2">
            <ul className="border-2 border-gray-300 w-2/5 flex sm:w-full justify-center transition-all bg-white bg-opacity-20 border-opacity-20 hover:bg-opacity-30 hover:border-opacity-30 items-center py-4 px-2 rounded-2xl cursor-pointer">
                <li className="w-2/5 cursor-pointer"><img src="images/css.png" alt="" className="w-full"/></li>
            </ul>
            <ul className="border-2 border-gray-300 w-2/5 flex sm:w-full justify-center bg-white bg-opacity-20 border-opacity-20 hover:bg-opacity-30 hover:border-opacity-30 items-center py-4 px-2 rounded-2xl cursor-pointer">
                <li className="w-2/5 cursor-pointer"> <img src="images/html.png" alt="" className="w-full"/> </li>
            </ul>
            <ul className="border-2 border-gray-300 w-2/5 flex sm:w-full justify-center bg-white bg-opacity-20 border-opacity-20 hover:bg-opacity-30 hover:border-opacity-30 items-center py-4 px-2 rounded-2xl cursor-pointer">
                <li className="w-2/5 cursor-pointer"><img src="images/javascript.png" alt="" className="w-full"/></li>
            </ul>
            <ul className="border-2 border-gray-300 w-2/5 flex sm:w-full justify-center bg-white bg-opacity-20 border-opacity-20 hover:bg-opacity-30 hover:border-opacity-30 items-center py-4 px-2 rounded-2xl cursor-pointer">
                <li className="w-2/5 cursor-pointer"><img src="images/react.png" alt="" className="w-full"/></li>
            </ul>
            <ul className="border-2 border-gray-300 w-2/5 flex sm:w-full justify-center bg-white bg-opacity-20 border-opacity-20 hover:bg-opacity-30 hover:border-opacity-30 items-center py-4 px-2 rounded-2xl cursor-pointer">
                <li className="w-2/5 cursor-pointer"><img src="images/redux.png" alt="" className="w-full"/></li>
            </ul>
            <ul className="border-2 border-gray-300 w-2/5 flex sm:w-full justify-center bg-white bg-opacity-20 border-opacity-20 hover:bg-opacity-30 hover:border-opacity-30 items-center py-4 px-2 rounded-2xl cursor-pointer">
                <li className="w-2/5 cursor-pointer"><img src="images/tailwind.png" alt="" className="w-full"/></li>
            </ul>
          </div>
        </section>
      </section>
    </div>
  );
};

export default TechnologySection;
