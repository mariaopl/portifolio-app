import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";


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
            <Link to="about" className="text-gray-700 group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#989cab] hover:border-[#989cab] hover:text-white w-fit cursor-pointer cursor-pointer">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
            </Link>
        </div>
        <div className="absolute bottom-10 left-0 flex flex-col items-end gap-2 z-0">
          <div className="flex gap-2">
            <div className="inline-block bottom-0 right-0">
              <a href="https://www.linkedin.com/in/maria-opland-9124031a1/" target="_blank" rel="noreferrer">
              <FaLinkedinIn size={22}/>
              </a>
            </div>
            <div className="inline-block bottom-0 right-0">
              <a href="https://github.com/mariaopl" target="_blank" rel="noreferrer">
              <FaGithub size={22}/>
              </a>
            </div>

          </div>
          <div className="border-b-4 border-gray-700 w-40">
          </div>
        </div>
      </div>
    </div>
  );
};
