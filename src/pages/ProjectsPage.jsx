import React from "react";

import { projectsArr } from "../data/projects-data";

function ProjectsPage() {
  const projectsElements = projectsArr.map((project, index) => {
    return (
      <button
        key={index}
        className="outline text-left rounded transition-all duration-150 ease hover:outline-4"
        style={{ boxShadow: "0 0 6px rgba(255, 255, 255, 0.15)" }}
      >
        <div>
          <div className="">
            <img
              src={project.imgSrc}
              alt={project.alt}
              className="object-cover object-top w-full h-64"
              draggable="false"
            />
          </div>
          <div className="p-4">
            <h5 className="font-semibold">{project.title}</h5>
          </div>
        </div>
      </button>
    );
  });

  return (
    <main className="mt-32">
      <h1 className="mb-16 text-center xl:text-left xl:pl-12 pb-8 border-b border-white border-opacity-50">
        Projects
      </h1>
      <section id="projects-list" className="px-3">
        <div className="grid lg:grid-cols-2 2xl:grid-cols-3 gap-8">
          {projectsElements}
        </div>
      </section>
    </main>
  );
}

export default ProjectsPage;
