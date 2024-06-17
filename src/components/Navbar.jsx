import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { LiaHomeSolid } from "react-icons/lia";
import { Menu, X } from "lucide-react";

const navLinks = (scrollToTop) => {
  return (
    <ul className="flex flex-row items-center space-x-5 justify-center text-2xl">
      <NavLink end className="cursor-pointer" to="/" onClick={scrollToTop}>
        <p className="lg:transition-all lg:duration-300 lg:hover:mr-2 lg:hover:scale-105">
          Home
        </p>
      </NavLink>
      <NavLink className="cursor-pointer" to="/#skills">
        <p className="lg:transition-all lg:duration-300 lg:hover:ml-2 lg:hover:mr-2 lg:hover:scale-105">
          Skills
        </p>
      </NavLink>
      <NavLink className="cursor-pointer" to="/#education">
        <p className="lg:transition-all lg:duration-300 lg:hover:ml-2 lg:hover:mr-2 lg:hover:scale-105">
          Education
        </p>
      </NavLink>
      <NavLink className="cursor-pointer" to="/#projects">
        <p className="lg:transition-all lg:duration-300 lg:hover:ml-2 lg:hover:scale-105">
          Projects
        </p>
      </NavLink>
      {/* <NavLink className="cursor-pointer" to="/#experience">
        <p className="">Experience</p>
      </NavLink> */}
    </ul>
  );
};

// transition-all duration-300 hover:mr-2 hover:scale-105
// transition-all duration-300 hover:ml-2 hover:mr-2 hover:scale-105

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav>
      <div className="p-5 font-thin fixed right-12 top-1.5 md:right-6 md:top-6 md:left-auto z-50">
        <ul className="flex flex-row items-center space-x-6 text-xl md:text-3xl">
          <li>
            <a
              href="https://www.linkedin.com/in/raglandconnor/"
              target="_blank"
              className="cursor-pointer transition-all duration-150 ease-in-out md:hover:text-[#0867C2]"
            >
              <FaLinkedin className="scale-150" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/raglandconnor/"
              target="_blank"
              className="cursor-pointer transition-all duration-150 ease-in-out md:hover:text-gray-400"
            >
              <FaGithubSquare className="scale-150" />
            </a>
          </li>
        </ul>
      </div>

      <div className="hidden md:block backdrop-blur-lg bg-gray-600 bg-opacity-10 p-5 px-12 fixed top-6 rounded-full font-light left-1/2 transform -translate-x-1/2 z-40">
        <div className="">{navLinks(scrollToTop)}</div>
      </div>

      <div className="md:hidden backdrop-blur-lg bg-gray-600 bg-opacity-10 flex justify-between fixed p-3 px-4 top-3 right-2 left-2 rounded-full font-light z-40">
        <NavLink
          end
          className="cursor-pointer"
          to="/"
          onClick={() => {
            scrollToTop();
          }}
        >
          <LiaHomeSolid className="text-[24px]" />
        </NavLink>
        <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
      </div>
      {isOpen && (
        <div className="backdrop-blur-lg bg-gray-600 bg-opacity-10 fixed top-16 px-2 rounded-xl right-6">
          <ul className="flex flex-col items-end space-x-5 justify-center text-2xl">
            <NavLink
              className="cursor-pointer"
              to="/#skills"
              onClick={() => {
                toggleNavbar();
              }}
            >
              <p className="">Skills</p>
            </NavLink>
            <NavLink
              className="cursor-pointer"
              to="/#education"
              onClick={() => {
                toggleNavbar();
              }}
            >
              <p className="">Education</p>
            </NavLink>
            <NavLink
              className="cursor-pointer"
              to="/#projects"
              onClick={() => {
                toggleNavbar();
                scrollToTop;
              }}
            >
              <p className="">Projects</p>
            </NavLink>
            {/* <NavLink className="cursor-pointer" to="/#experience">
        <p className="">Experience</p>
      </NavLink> */}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
