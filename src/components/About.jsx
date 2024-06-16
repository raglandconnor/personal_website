import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div id="about">
      <div className="about-content flex items-center pl-24 pr-24 gap-24">
        <img
          className="shrink-0 mx-auto rounded-full w-[500px] h-[500px] object-cover mt-5 mb-5"
          src="/images/connor-ragland-nm-2024.JPG"
          alt="Picture of Connor Ragland"
        />
        <div>
          <h1 className="text-5xl font-semibold mb-8">
            Hi, I'm Connor Ragland
          </h1>
          <p className="text-lg font-light">
            I am an aspiring software engineer with a passion for front-end web
            development. I am currently studying computer science and
            mathematics at the University of Florida.
          </p>
          <Link to="/contact">
            <button className="bg-gray-500 bg-opacity-30 py-2 px-4 mt-4 mr-4 rounded-md hover:scale-105 active:scale-95">
              Contact
            </button>
          </Link>

          <Link to="/resume">
            <button className="bg-gray-500 bg-opacity-30 py-2 px-4 mt-4 rounded-md hover:scale-105 active:scale-95">
              Resume
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
