import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import { SocialLink } from "./SocialLink";

export const HomePage = () => {
  return (
    <div id="home" className="w-full h-screen bg-[#edede9]">
      {" "}
      <div className="max-w-[1000 px] mx-auto px-20 flex flex-col justify-center h-full">
        <p className="text-lg pb-2">Hi, my name is</p>
        <h1 className="text-5xl sm:text-7xl font-bold text-gray-700 pb-2">
          Maria Opland
        </h1>
        <h2 className="text-3xl sm:text-5xl font-bold text-[#848794] pb-2">
          I'm a developer
        </h2>
        <div>
          <Link
            to="projects"
            className="text-gray-700 group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#989cab] hover:border-[#989cab] hover:text-white w-fit cursor-pointer cursor-pointer"
            smooth={true}
          >
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </Link>
        </div>
        <SocialLink />
      </div>
    </div>
  );
};
