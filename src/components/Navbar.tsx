import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/Logo_MO.png";
import { Link } from "react-scroll";

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#edede9] text-gray-700 z-20">
      <div>
        <img src={logo} alt="Logo" style={{ width: "50px" }} />
      </div>

      <ul className="hidden md:flex ">
        <div className="hover:scale-110">
          <li>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
        </div>
        <div className="hover:scale-110">
          <li>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
        </div>
        <div className="hover:scale-110">
          <li>
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
        </div>
        <div className="hover:scale-110">
          <li>
            <Link to="projects" smooth={true} duration={500}>
              Projects
            </Link>
          </li>
        </div>
      </ul>

      <div onClick={handleClick} className="md:hidden z-20">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      <ul
        className={
          !nav
            ? "hidden absolute"
            : "absolute top-0 left-0 w-full h-screen bg-[#6d6875] flex flex-col justify-center items-center text-white z-10"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="projects"
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
        </li>
      </ul>
    </div>
  );
};
