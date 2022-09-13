import React from "react";

const CompanySection = () => {
  return (
    <div>
      <section className="flex justify-center items-center p-10">
        <section className="flex justify-between items-center gap-20 w-full m-8">
          <ul className="flex justify-evenly items-center w-full">
            <li><img src="images/cars.png" alt="" className="w-32" /></li>
            <li className="text-lg font-medium flex justify-center items-center gap-3"> <img src="images/supabase.png" alt="" className="w-16" /> Supabase</li>
            <li><img
            src="images/fanatics.png"
            alt=""
            className="w-32"
          /></li>
            <li><img
            src="images/tailscale.png"
            alt=""
            className="w-32"
          /></li>
            <li><img
            src="images/apollo.png"
            alt=""
            className="w-32"
          /></li>
          <li><img
            src="images/glide.png"
            alt=""
            className="w-32"
          /></li>
          <li><img
            src="images/glitch.png"
            alt=""
            className="w-32"
          /></li>
          </ul>   
        </section>
      </section>
    </div>
  );
};

export default CompanySection;
