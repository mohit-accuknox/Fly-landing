import React from "react";

const Navbar = () => {
  return (
    <div>
      <section className="flex justify-around items-center p-7 font-semibold ">
        <h1 className="cursor-pointer text-white text-3xl">Fly.io</h1>
        <ul className="flex items-start gap-10">
          <li>
            <a href="#" className="hover:text-violet-400 transition-all text-white">
              Articles
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-violet-400 transition-all text-white">
              Docs
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-violet-400 transition-all text-white">
              Community
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-violet-400 transition-all text-white">
              Status
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-violet-400 transition-all text-white">
              Pricing
            </a>
          </li>
        </ul>
        <div className="flex justify-center items-center gap-9">
          <button className="border-2 border-white px-4 text-white rounded-lg h-10 transition-all hover:text-shadow-none hover:text-violet-600 hover:border-violet-200 hover:bg-violet-200">
            Sign In
          </button>
          <button className="text-white bg-violet-500 px-4 rounded-lg h-10 hover:bg-violet-600 ">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
