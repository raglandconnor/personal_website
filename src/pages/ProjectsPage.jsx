import React from "react";

import { projectsArr } from "../data/projects-data";

function ProjectsPage() {
  const projectsElements = projectsArr.map((project, index) => {
    return (
      <button
        className="outline text-left rounded transition-all duration-150 ease hover:outline-4"
        style={{ boxShadow: "0 0 6px rgba(255, 255, 255, 0.15)" }}
      >
        <div key={index} className="w-96">
          <div className="">
            <img
              src={project.imgSrc}
              alt={project.alt}
              className="object-cover w-full h-64"
              draggable="false"
            />
          </div>
          <div className="p-4">
            <h5 className="font-semibold">{project.title}</h5>
            {/* {project.description.map((text, index) => {
          return <p key={index}>{text}</p>;
        })} */}
          </div>
          {/* <button className="ml-5 bg-gray-500 bg-opacity-30 py-2 px-4 mt-4 rounded-md hover:scale-105 active:scale-95 w-28">
        Read more
      </button> */}
        </div>
      </button>
    );
  });

  return (
    <main>
      <h1 className="mb-16">Projects</h1>
      <section id="projects-list" className="flex justify-center">
        <div className="grid grid-cols-3 gap-12">{projectsElements}</div>
      </section>
    </main>
  );
}

export default ProjectsPage;
