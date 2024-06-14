import React from "react";
import { Link } from "react-router-dom";

import { projectsArr } from "../data/projects-data";

function Projects() {
  const projectsElements = projectsArr.map((project, index) => {
    return (
      <div
        key={index}
        className="grid gap-4"
        style={{ gridTemplateColumns: "1fr 2fr" }}
      >
        <div className="p-4">
          <img src={project.imgSrc} alt={project.alt} />
        </div>
        <div className="p-4">
          <h5 className="font-bold">{project.title}</h5>
          {project.description.map((text, index) => {
            return <p key={index}>{text}</p>;
          })}
        </div>
      </div>
    );
  });

  return (
    <div id="projects" className="mx-56 flex flex-col items-center">
      <h1 className="font-semibold text-center mb-12">Projects</h1>
      {projectsElements}
      <Link to="/projects">
        <button className="bg-gray-500 bg-opacity-30 py-2 px-4 mt-4 rounded-md hover:scale-105 active:scale-95 w-36">
          View more
        </button>
      </Link>
    </div>
  );
}

export default Projects;
