import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import { FaLinkedinIn } from "react-icons/fa";


export const HomePage = () => {

  return (
    <div id="home" className="w-full h-screen bg-[#edede9]">
      <div className="max-w-[1000 px] mx-auto px-20 flex flex-col justify-center h-full">
        <p className="text-black">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-gray-700">
          Maria Opland
        </h1>
        <h2 className="text-3xl sm:text-6xl font-bold text-[#848794]">
          I´m a developer.
        </h2>
        <div>
            <Link to="about" className="text-gray-700 group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#989cab] hover:border-[#989cab] hover:text-white w-fit">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
            </Link>
        </div>
        <div className="absolute bottom-0 h-16 w-16">
          <a href="https://www.linkedin.com/in/maria-opland-9124031a1/" target="_blank" rel="noreferrer">
          <FaLinkedinIn/>
          </a>
      </div>
      </div>
    </div>
  );
};
