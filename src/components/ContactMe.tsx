import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const ContactMe = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <div id="contactMe" className="w-full h-screen bg-[#edede9] text-gray-700">
      <div className="flex flex-col justify-evenly w-full h-full mx-auto">
        <div className="w-5 h-20"></div>
        <div className="w-5 h-20"></div>
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 px-20">
          <div className="sm:text-right pb-8 pl-4">
            <div>
              <p className="text-4xl font-bold inline border-b-4 border-gray-700">
                Contact me
              </p>
              <p className="text-3xl pt-5">maria-opl@hotmail.com</p>
            </div>
          </div>
        </div>
        <div className="w-5 h-24"></div>
        {width < 800 && (
          <div className="self-start left-0 flex flex-col items-end gap-2 z-0">
            <div className="flex gap-2">
              <div className="inline-block bottom-0 right-0 hover:scale-110">
                <a
                  href="https://www.linkedin.com/in/maria-opland-9124031a1/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedinIn size={22} />
                </a>
              </div>
              <div className="inline-block bottom-0 right-0 hover:scale-110">
                <a
                  href="https://github.com/mariaopl"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub size={22} />
                </a>
              </div>
            </div>
            <div className="border-b-4 border-gray-700 w-40" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactMe;
