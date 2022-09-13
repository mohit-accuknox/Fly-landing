import React from "react";

const CompanySection = () => {
  return (
    <div>
      <section className="flex justify-center items-center p-10">
        <section className="flex justify-evenly items-center gap-20 w-full m-8">
          <img src="images/cars.png" alt="" className="w-76" />

          <img src="images/supalogo.webp" alt="" className="w-76" />

          <img
            src="images/fanatic.svg"
            alt=""
            className="w-80"
          />
        </section>
      </section>
    </div>
  );
};

export default CompanySection;
