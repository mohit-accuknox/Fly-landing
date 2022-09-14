import React, { useState } from "react";

const Navbar = () => {

  const [isActive,setIsActive] = useState(false);

  // const handleMenu = () => {
  //   setIsActive(false);
  //   console.log(isActive);
  // }

  // console.log(isActive)

  return (
    <div>
      <section className="flex justify-between items-center p-7 font-semibold ">
        <div className="flex items-center justify-center gap-10 ">
          <h1 className="cursor-pointer text-white text-3xl">Fly.io</h1>
        </div>
        <ul className={isActive ? "flex items-start gap-10 lg:absolute lg:top-24 lg:bg-gray-700 lg:p-10 transition-all lg:-left-2 lg:flex-col lg:w-6/12 lg:items-center sm:w-full" : "flex items-start gap-10 lg:absolute lg:top-24 lg:bg-gray-700 transition-all sm:hidden lg:p-10 lg:-left-1/2 lg:flex-col lg:w-6/12 lg:items-center sm:w-full"}>
          <li>
            <a
              href="#"
              className="hover:text-violet-400 transition-all text-white"
            >
              Articles
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-violet-400 transition-all text-white"
            >
              Docs
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-violet-400 transition-all text-white"
            >
              Community
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-violet-400 transition-all text-white"
            >
              Status
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-violet-400 transition-all text-white"
            >
              Pricing
            </a>
          </li>
        </ul>
        <div className="flex justify-center items-center gap-9">
        <img src={isActive ? "images/cross.png" :  "images/menu.png" } alt="" className="hidden lg:block" onClick={() => setIsActive(!isActive)}/>
          <button className="border-2 border-white px-4 text-white rounded-lg h-10 sm:hidden transition-all hover:text-shadow-none hover:text-violet-600 hover:border-violet-200 hover:bg-violet-200">
            Sign In
          </button>
          <button className="text-white sm:hidden bg-violet-500 px-4 rounded-lg h-10 hover:bg-violet-600 ">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
