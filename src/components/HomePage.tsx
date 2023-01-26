import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import { SocialLink } from "./SocialLink";
import Portrait from "../assets/portrait_maria.png";

export const HomePage = () => {
  return (
    <div
      id="home"
      className="w-full h-screen bg-[#edede9] grid grid-cols-1 sm:grid-cols-2 gap-1 pt-36"
    >
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
            className="text-gray-700 group border-2 rounded-sm px-6 py-3 my-2 flex items-center hover:bg-[#989cab] hover:border-[#989cab] hover:text-white w-fit cursor-pointer"
            smooth={true}
            duration={500}
          >
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </Link>
        </div>

        <SocialLink />
      </div>
      <div className="flex flex-col justify-end align-bottom h-full ">
        <img
          src={Portrait}
          className="object-contain sm:h-49 sm:w-96 w-72 self-end lg:self-auto"
          alt="Portrait of Maria Opland"
        />
      </div>
    </div>
  );
};
