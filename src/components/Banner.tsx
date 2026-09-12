import React from "react";

const Banner = () => {
  return (
    <div className="md:grid md:grid-cols-2 md:items-center mx-auto max-w-7xl px-4 sm:px-6 py-16 lg:px-8 md:gap-10 md:py-24">
      <div>
        <h1 className="text-4xl font-extrabold md:text-5xl lg:text-6xl text-slate-900 leading-tight">
          Build Your Ideal
          <br />
          <span className="text-gradient">Development Stack</span>
        </h1>

        <p className="text-slate-500 md:text-lg max-w-lg mt-6">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>
        <div className="flex flex-wrap gap-4 mt-8">
            <a href="#" className="text-sm font-semibold text-white bg-gradient-brand rounded-lg px-6 py-3">
                Explore Technologies 
            </a>
            <a href="#" className="text-sm font-semibold text-slate-700 border border-slate-300 rounded-lg px-6 py-3">
                Learn More
            </a>
        </div>
      </div>
      <div className="md:mt-0 mt-10">
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default Banner;
