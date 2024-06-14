import React from "react";

import { projectsArr } from "../data/projects-data";

function ProjectsPage() {
  const projectsElements = projectsArr.map((project, index) => {
    return (
      <button className="outline text-left rounded transition-all duration-150 ease hover:outline-4">
        <div key={index} className="w-96">
          <div className="">
            <img src={project.imgSrc} alt={project.alt} />
          </div>
          <div className="p-4">
            <h4 className="font-bold">{project.title}</h4>
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
