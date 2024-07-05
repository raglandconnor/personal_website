import React from "react";
import { Link } from "react-router-dom";

import { projectsArr } from "../data/projects-data";

function Projects() {
    const projectsSubArr = projectsArr.slice(0, 4);

    const projectsElements = projectsSubArr.map((project) => {
        return (
            <Link
                to={`/projects/${project._id}`}
                key={project._id}
                onClick={() => window.scrollTo(0, 0)}
                className="rounded-lg bg-gray-200 bg-opacity-10 hover:shadow-lg transition-all duration-300 ease-in-out cursor-pointer hover:scale-[1.02]"
            >
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4">
                        <div className="flex flex-row align-center justify-center">
                            <img
                                className="rounded-lg w-64 h-48 object-cover object-top"
                                draggable="false"
                                src={project.imgSrc}
                                alt={project.alt}
                            />
                        </div>
                    </div>
                    <div className="p-4">
                        <h5 className="font-bold">{project.title}</h5>
                        {project.description.map((text, index) => {
                            return (
                                <p key={index} className="mb-2">
                                    {text}
                                </p>
                            );
                        })}
                    </div>
                </div>
            </Link>
        );
    });

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <section id="projects" className="pt-32 px-6">
            <h1 className="font-semibold text-center mb-12">Projects</h1>
            <div className="grid gap-3 lg:px-24">{projectsElements}</div>
            <div className="flex justify-center">
                <Link to="/projects" onClick={scrollToTop}>
                    <button className="bg-gray-500 bg-opacity-30 py-2 px-4 mt-4 rounded-md hover:scale-105 active:scale-95 w-36">
                        View more
                    </button>
                </Link>
            </div>
        </section>
    );
}

export default Projects;
