import React from "react";
import { FaGithub, FaRegFolder } from "react-icons/fa";

const Projects = () => {
  return (
    <div
      id="projects"
      className="w-full sm:h-screen bg-[#6d6875] text-white pb-24"
    >
      <div className="flex flex-col items-center w-full h-full">
        <p className="text-4xl font-bold inline border-b-4 border-gray-700 pt-24">
          Projects
        </p>
        <div className="max-w-[1000px] w-full grid grid-cols-1 sm:grid-cols-2 gap-20 pt-24 pl-20 pr-16 text-gray-700">
          <div className="bg-[#edede9] shadow-md shadow-gray-500 mx-1 p-9">
            <FaRegFolder size={45} />
            <p className="my-4 font-semibold text-lg">
              Summer internship - Ardoq
            </p>
            <p className="my-4">
              A Slack integration with Ardoq to broadcast surveys and messages
              to Slack.
            </p>
            <div className="flex pt-6 gap-4">
              <div className="inline-block rounded-full bg-gray-300 px-2">
                React
              </div>
              <div className="inline-block rounded-full bg-gray-300 px-2">
                Typescript
              </div>
            </div>
          </div>
          <div className="bg-[#edede9] shadow-md shadow-gray-500 mx-1 py-8 px-7">
            <div className="flex mb-9 justify-between">
              <div className="inline-block">
                <FaRegFolder size={45} />
              </div>
              <div className="inline-block hover:scale-110">
                <a
                  href="https://github.com/tommyew97/CityBikes"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub size={22} />
                </a>
              </div>
            </div>
            <p className="my-4 font-semibold text-lg">Citybikes</p>
            <p className="my-4">
              An Android application to find publicly available bikes.
            </p>
            <div className="flex pt-6 gap-4">
              <div className="inline-block rounded-full bg-gray-300 px-2">
                Java
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
