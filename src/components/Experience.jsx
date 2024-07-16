import React from "react";

function Experience() {
    const experienceArr = [
        {
            title: "Software Engineer Intern",
            company: "Company",
            location: "Remote",
            startDate: "May 2024",
            endDate: "August 2024",
            description: [
                "Worked on a team of 4 to develop a new feature for the company's website.",
                "Implemented a new API endpoint using Node.js and Express.",
                "Wrote tests for the new feature using Jest and Supertest.",
            ],
        },
        {
            title: "Software Engineer Intern",
            company: "Company",
            location: "Remote",
            startDate: "May 2024",
            endDate: "August 2024",
            description: [
                "Worked on a team of 4 to develop a new feature for the company's website.",
                "Implemented a new API endpoint using Node.js and Express.",
                "Wrote tests for the new feature using Jest and Supertest.",
            ],
        },
        {
            title: "Software Engineer Intern",
            company: "Company",
            location: "Remote",
            startDate: "May 2024",
            endDate: "August 2024",
            description: [
                "Worked on a team of 4 to develop a new feature for the company's website.",
                "Implemented a new API endpoint using Node.js and Express.",
                "Wrote tests for the new feature using Jest and Supertest.",
            ],
        },
    ];

    const experienceElements = experienceArr.map((experience, idx) => {
        return (
            <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
            >
                <div>
                    <h4 className="font-semibold">{experience.title}</h4>
                    <h5 className="font-semibold italic">
                        {experience.company}
                    </h5>
                    <p>{experience.location}</p>
                    <p>
                        {experience.startDate} - {experience.endDate}
                    </p>
                </div>
                <div>
                    {experience.description.map((desc, idx) => {
                        return <p key={idx}>{desc}</p>;
                    })}
                </div>
            </div>
        );
    });

    return (
        <section id="experience" className="pt-32">
            <h1 className="font-semibold text-center mb-16">Experience</h1>
            <div className="grid grid-cols-1 mx-8 md:mx-64">
                {experienceElements}
            </div>
        </section>
    );
}

export default Experience;
