import React from "react";

function Navbar() {
  return (
    <nav>
      <div className="backdrop-blur-lg bg-gray-600 bg-opacity-10 p-5 px-12 fixed top-6 rounded-full font-extralight left-1/2 transform -translate-x-1/2">
        <ul className="flex flex-row items-center space-x-5 justify-center text-2xl">
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Skills</li>
          <li className="cursor-pointer">Projects</li>
          <li className="cursor-pointer">Education</li>
          <li className="cursor-pointer">Experience</li>
        </ul>
      </div>
      <div className="p-5 font-thin fixed right-6 top-6">
        <ul className="flex flex-row items-center space-x-4 text-2xl">
          <li className="cursor-pointer">
            <a
              href="https://www.linkedin.com/in/raglandconnor/"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
          <li className="cursor-pointer">
            <a href="https://github.com/raglandconnor/" target="_blank">
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
