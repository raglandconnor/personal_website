import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const handleHomeClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav>
      <div className="backdrop-blur-lg bg-gray-600 bg-opacity-10 p-5 px-12 fixed top-6 rounded-full font-extralight left-1/2 transform -translate-x-1/2">
        <ul className="flex flex-row items-center space-x-5 justify-center text-2xl">
          <NavLink
            end
            className="cursor-pointer"
            to="/"
            onClick={handleHomeClick}
          >
            <p className="transition-all duration-300 hover:mr-2 hover:scale-105">
              Home
            </p>
          </NavLink>
          <NavLink className="cursor-pointer" to="/#about">
            <p className="transition-all duration-300 hover:ml-2 hover:mr-2 hover:scale-105">
              About
            </p>
          </NavLink>
          <NavLink className="cursor-pointer" to="/#skills">
            <p className="transition-all duration-300 hover:ml-2 hover:mr-2 hover:scale-105">
              Skills
            </p>
          </NavLink>
          <NavLink className="cursor-pointer" to="/projects">
            <p className="transition-all duration-300 hover:ml-2 hover:mr-2 hover:scale-105">
              Projects
            </p>
          </NavLink>
          <NavLink className="cursor-pointer" to="/#education">
            <p className="transition-all duration-300 hover:ml-2 hover:mr-2 hover:scale-105">
              Education
            </p>
          </NavLink>
          <NavLink className="cursor-pointer" to="/#experience">
            <p className="transition-all duration-300 hover:ml-2 hover:scale-105">
              Experience
            </p>
          </NavLink>
        </ul>
      </div>
      <div className="p-5 font-thin fixed right-6 top-6">
        <ul className="flex flex-row items-center space-x-4 text-2xl">
          <li>
            <a
              href="https://www.linkedin.com/in/raglandconnor/"
              target="_blank"
              className="cursor-pointer transition duration-150 ease-in-out hover:text-blue-500"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/raglandconnor/"
              target="_blank"
              className="cursor-pointer duration-150 ease-in-out hover:text-blue-500"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
