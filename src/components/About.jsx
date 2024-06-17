import React from "react";
import { Link } from "react-router-dom";

function About() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="about"
      className="grid lg:grid-cols-2 xl:grid-cols-5 lg:mx-28 lg:gap-12 lg:mt-16 items-center gap-4 mx-6"
    >
      <div className="lg:col-span-1 xl:col-span-2">
        <img
          className="w-64 h-64 lg:w-96 lg:h-96 rounded-full mx-auto object-cover mt-5 mb-5"
          src="/images/connor-ragland-nm-2024.JPG"
          alt="Picture of Connor Ragland"
        />
      </div>
      <div className="lg:col-span-1 xl:col-span-3 flex flex-col md:items-left">
        <h1 className="text-5xl lg:text-6xl font-semibold mb-8 text-center lg:text-left">
          Hi, I'm Connor Ragland
        </h1>
        <p className="text-lg font-light text-center lg:text-left">
          Currently, I am studying computer science and mathematics at the
          University of Florida.
        </p>
        <div className="mx-auto lg:mx-0">
          {/* <Link to="/contact" onClick={scrollToTop}>
            <button className="bg-gray-500 bg-opacity-30 py-2 px-4 mt-4 mr-4 rounded-md hover:scale-105 active:scale-95">
              Contact
            </button>
          </Link> */}

          <a href="mailto:connor.ragland@hotmail.com">
            <button className="bg-gray-500 bg-opacity-30 py-2 px-4 mt-4 mr-4 rounded-md hover:scale-105 active:scale-95">
              Contact
            </button>
          </a>

          <Link to="/resume" onClick={scrollToTop}>
            <button className="bg-gray-500 bg-opacity-30 py-2 px-4 mt-4 rounded-md hover:scale-105 active:scale-95">
              Resume
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default About;
