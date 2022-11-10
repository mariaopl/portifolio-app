import React, { useEffect, useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";


export const HomePage = () => {
  const [scrollPos, setScrollPos] = useState(0);
  const [width, setWidth]   = useState(window.innerWidth);
  const updateDimensions = () => {
      setWidth(window.innerWidth);
  }
  useEffect(() => {
      window.addEventListener("resize", updateDimensions);
      return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        setScrollPos(window.pageYOffset);
      });
    }
  }, [scrollPos]);
  
  
  return (
    <div id="home" className="w-full h-screen bg-[#edede9]">
      <div className="max-w-[1000 px] mx-auto px-20 flex flex-col justify-center h-full">
        <p className="text-lg pb-2">Hi, my name is</p>
        <h1 className="text-5xl sm:text-7xl font-bold text-gray-700 pb-2">
          Maria Opland
        </h1>
        <h2 className="text-3xl sm:text-5xl font-bold text-[#848794] pb-2">
         I'm a developer
        </h2>
        <div>
            <Link to="about" className="text-gray-700 group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#989cab] hover:border-[#989cab] hover:text-white w-fit cursor-pointer cursor-pointer">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
            </Link>
        </div>
        {(scrollPos === 0 || width < 800) && (
        <div className="absolute bottom-10 left-0 flex flex-col items-end gap-2 z-0">
          <div className="flex gap-2">
            <div className="inline-block bottom-0 right-0 hover:scale-110">
              <a href="https://www.linkedin.com/in/maria-opland-9124031a1/" target="_blank" rel="noreferrer">
              <FaLinkedinIn size={22}/>
              </a>
            </div>
            <div className="inline-block bottom-0 right-0 hover:scale-110">
              <a href="https://github.com/mariaopl" target="_blank" rel="noreferrer">
              <FaGithub size={22}/>
              </a>
            </div>

          </div>
          <div className="border-b-4 border-gray-700 w-40" />
        </div>)}
        {(scrollPos > 0 && width > 800) && (
          <div className="overflow-hidden fixed bottom-0 left-0 flex flex-row z-0 px-20 items-stretch">
            <div className="pr-4 inline-block top-0">
              <div className="block bottom-0 right-0 pb-4 hover:scale-110">
                <a href="https://www.linkedin.com/in/maria-opland-9124031a1/" target="_blank" rel="noreferrer">
                  <FaLinkedinIn size={22}/>
                </a>
              </div>
              <div className="block bottom-0 right-0 hover:scale-110">
                <a href="https://github.com/mariaopl" target="_blank" rel="noreferrer">
                  <FaGithub size={22}/>
                </a>
                </div>
              </div>
            <div className="inline-block border-r-4 border-gray-700 h-40 bottom-0" />
          </div>)}
        
      </div>
    </div>
  );
};
