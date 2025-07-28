import React from "react";
import userImage from "../../assets/images/user.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="bg-purple-50 dark:bg-gray-900 h-[400px] md:h-[600px] lg:h-[700px] flex items-stretch">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 md:grid md:grid-cols-2 md:items-stretch md:gap-8 lg:px-8 w-full h-full">
        {/* Left Text Content */}
        <div className="max-w-2xl flex flex-col justify-center h-full">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white leading-tight">
            One Step To Your <br />
            <strong className="text-purple-400">Dream Job</strong>
          </h1>

          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            impedit minima harum corporis iusto.
          </p>

          <div className="mt-6 flex gap-4">
            <Link
              className="inline-block rounded border border-indigo-600 bg-purple-600 px-6 py-3 text-base font-medium text-white hover:bg-purple-400"
              href="#"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Right Image — full height and increased width, no padding or margin */}
        <div className="hidden md:flex items-end justify-center h-full p-0 m-0">
          <img
            src={userImage}
            alt="User"
            className="h-full w-full max-w-xl object-cover p-0 m-0 border-0"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
