import React from 'react';

import { projectsArr } from '../data/projects-data';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';

function ProjectsPage() {
  const projectsElements = projectsArr.map((project) => {
    return (
      <Link
        to={`/projects/${project._id}`}
        key={project._id}
        onClick={() => window.scrollTo(0, 0)}
        draggable="false"
      >
        <ProjectCard
          title={project.title}
          shortDescription={
            project.description ? project.description : 'no short description'
          }
          techStack={project.techStack}
          imageUrl={project.imgSrc}
        />
      </Link>
    );
  });

  return (
    <main className="mt-32">
      <h1 className="mb-16 text-center xl:text-left xl:pl-12 pb-8 border-b border-white border-opacity-50">
        Projects
      </h1>
      <section id="projects-list" className="px-3 xl:w-[1200px]">
        <div className="grid grid-rows-2 gap-4 grid-cols-1 md:grid-cols-2 lg:mx-12 2xl:mx-0 2xl:grid-cols-3">
          {projectsElements}
        </div>
      </section>
    </main>
  );
}

export default ProjectsPage;
