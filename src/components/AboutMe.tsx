import React from "react";

const AboutMe = () => {
  return (
    <div id="about" className="w-full h-screen bg-[#6d6875] text-white">
      <div className="flex flex-col justify-center items-center w-full h-full p-14">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-gray-700">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-3xl ">
            <p>Hi. I´m Maria, nice to meet you. Pleace take a look around.</p>
          </div>
          <div>
            <p>I am passionate about tech and solving problems with code.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
