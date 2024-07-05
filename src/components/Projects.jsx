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
                <div className="grid md:grid-cols-2 gap-1">
                    <div className="col-span-1 p-4">
                        <div className="flex flex-col items-center justify-center h-full w-full">
                            <h4 className="text-center font-semibold">
                                {project.title}
                            </h4>
                        </div>
                        {/* {project.description.map((text, index) => {
                            return (
                                <p key={index} className="mb-2">
                                    {text}
                                </p>
                            );
                        })} */}
                    </div>
                    <div className="col-span-1">
                        <div className="p-4 flex flex-row align-center justify-center">
                            <img
                                className="rounded-lg w-96 h-64 object-cover object-top"
                                draggable="false"
                                src={project.imgSrc}
                                alt={project.alt}
                            />
                        </div>
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
            <div className="grid gap-3 md:px-32 lg:px-56">
                {projectsElements}
            </div>
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
