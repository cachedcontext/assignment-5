const Banner = () => {
  return (
    <div className="md:grid md:grid-cols-2 md:items-center mx-auto max-w-7xl px-4 sm:px-6 pt-6 pb-6 md:pt-24 md:pb-6">
      <div className="text-center md:text-left">
        <h1 className="text-4xl font-extrabold md:text-5xl lg:text-6xl text-slate-900 leading-tight">
          Build Your Ideal
          <br />
          <span className="text-gradient">Development Stack</span>
        </h1>

        <p className="text-center md:text-left text-slate-500 md:text-lg max-w-lg mt-6 mx-auto md:mx-0">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-8 md:justify-start">
          <a
            href="#"
            className="text-sm font-semibold text-white bg-gradient-brand rounded-lg px-6 py-3"
          >
            Explore Technologies
          </a>
          <a
            href="#"
            className="text-sm font-semibold text-slate-700 border border-slate-300 rounded-lg px-6 py-3"
          >
            Learn More
          </a>
        </div>
      </div>
      <div className="md:mt-0">
        <img
          src="/banner-stack.png"
          alt="dev stack image"
          className="w-full max-w-xl mx-auto"
        />
      </div>
    </div>
  );
};

export default Banner;
