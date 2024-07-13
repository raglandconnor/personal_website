import React from "react";

import { projectsArr } from "../data/projects-data";
import { Link } from "react-router-dom";

function ProjectsPage() {
    const projectsElements = projectsArr.map((project) => {
        return (
            <div className="outline text-left rounded transition-all duration-150 ease hover:outline-4 bg-gray-700 bg-opacity-15 hover:bg-opacity-10">
                <Link
                    to={`/projects/${project._id}`}
                    key={project._id}
                    onClick={() => window.scrollTo(0, 0)}
                >
                    <button className="w-full">
                        <div>
                            <div>
                                <img
                                    src={project.imgSrc}
                                    alt={project.alt}
                                    draggable="false"
                                    className="max-h-96 object-cover w-full"
                                />
                            </div>
                            <div className="p-4">
                                <h5 className="font-semibold underline">
                                    {project.title}
                                </h5>
                            </div>
                        </div>
                    </button>
                </Link>
            </div>
        );
    });

    return (
        <main className="mt-32">
            <h1 className="mb-16 text-center xl:text-left xl:pl-12 pb-8 border-b border-white border-opacity-50">
                Projects
            </h1>
            <section id="projects-list" className="px-3 xl:w-[1200px]">
                <div className="grid lg:grid-cols-2 gap-8 mx-1.5 md:mx-12 lg:mx-12">
                    {projectsElements}
                </div>
            </section>
        </main>
    );
}

export default ProjectsPage;
