import { FaGithub, FaJava, FaReact, FaRegFolder } from "react-icons/fa";
import TypeScriptLogo from "../assets/typescript.svg";
import TailwindLogo from "../assets/tailwind.svg";

const Projects = () => {
  return (
    <div id="projects" className="w-full  bg-[#6d6875] text-white pb-24">
      <div className="flex flex-col items-center w-full h-full">
        <p className="text-4xl font-bold inline border-b-4 border-gray-700 pt-24">
          Projects
        </p>
        <div className="max-w-[1000px] w-full grid grid-cols-1 sm:grid-cols-2 gap-20 pt-24 px-16 text-gray-700">
          <div className="bg-[#edede9] shadow-md shadow-gray-500 py-8 px-7">
            <div className="mb-9">
              <FaRegFolder size={45} />
            </div>
            <p className="my-4 font-semibold text-lg">
              Summer internship - Ardoq
            </p>
            <p className="my-4">A Slack integration with Ardoq</p>
            <div className="flex pt-6 gap-4">
              <div className="rounded-full bg-gray-300 px-2">
                <div className="float-left py-1 pr-1">
                  <FaReact></FaReact>
                </div>
                React
              </div>
              <div className="flex gap-1 rounded-full bg-gray-300 px-2">
                <div className="float-left py-1">
                  <img
                    src={TypeScriptLogo}
                    alt="TypeScript logo"
                    className="w-[18px] h-[18px]"
                  ></img>
                </div>
                Typescript
              </div>
            </div>
          </div>
          <div className="bg-[#edede9] shadow-md shadow-gray-500 py-8 px-7">
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
            <p className="my-4">An Android app to find public bikes.</p>
            <div className="flex pt-6 gap-4">
              <div className="inline-block rounded-full bg-gray-300 px-2">
                <div className="float-left py-1 pr-1">
                  <FaJava></FaJava>
                </div>
                Java
              </div>
            </div>
          </div>
          <div className="bg-[#edede9] shadow-md shadow-gray-500 py-8 px-7">
            <div className="flex mb-9 justify-between">
              <div className="inline-block">
                <FaRegFolder size={45} />
              </div>
              <div className="inline-block hover:scale-110">
                <a
                  href="https://github.com/mariaopl/portifolio-app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub size={22} />
                </a>
              </div>
            </div>
            <p className="my-4 font-semibold text-lg">Portfolio website</p>
            <p className="my-4">This website</p>
            <div className="flex pt-6 gap-4">
              <div className="rounded-full bg-gray-300 px-2">
                <div className="float-left py-1 pr-1">
                  <FaReact></FaReact>
                </div>
                React
              </div>
              <div className="flex gap-1 rounded-full bg-gray-300 px-2">
                <div className="float-left py-1">
                  <img
                    src={TypeScriptLogo}
                    alt="TypeScript logo"
                    className="w-[18px] h-[18px]"
                  ></img>
                </div>
                Typescript
              </div>
              <div className="flex gap-1 rounded-full bg-gray-300 px-2">
                <div className="float-left py-1">
                  <img
                    src={TailwindLogo}
                    alt="TypeScript logo"
                    className="w-[18px] h-[18px]"
                  ></img>
                </div>
                Tailwind
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
