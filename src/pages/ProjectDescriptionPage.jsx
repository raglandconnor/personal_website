import React from "react";
import { useParams } from "react-router-dom";

import { projectsArr } from "../data/projects-data";

function ProjectDescriptionPage() {
    const { projectId } = useParams();

    const project = projectsArr.find((project) => project._id === projectId);

    const projectTitle = project.title;
    const projectDescription = project.fullDescription;
    const techStack = project.techStack;

    const techStackElements = techStack.map((skill, index) => {
        return (
            <div
                key={index}
                className="inline-block ml-2 mt-1 bg-gray-500 bg-opacity-50 p-1 px-2 rounded-full text-sm select-none"
            >
                <p className="text-white">{skill}</p>
            </div>
        );
    });

    return (
        <main className="mt-32 xl:w-[1280px]">
            <h1
                id="project-description-title"
                className="mb-4 text-center xl:text-left xl:pl-12 pb-8 border-b border-white border-opacity-50"
            >
                {projectTitle}
            </h1>
            <div className="mb-8 ml-10">{techStackElements}</div>
            <section id="project-description-body" className="px-12">
                {projectDescription}
            </section>
        </main>
    );
}

export default ProjectDescriptionPage;