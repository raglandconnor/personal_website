import React from "react";

function Projects() {
  const projectsArr = [
    {
      imgSrc: "",
      alt: "Personal Portfolio Site Screenshot",
      title: "Personal Portfolio Website",
      description: [
        "Created a personal portfolio website using React, Tailwind CSS, and React-router. The website is hosted on Vercel.",
      ],
    },
    {
      imgSrc: "",
      alt: "Pomodoro/Todo List Site Screenshot",
      title: "Pomodoro+ - Todo List and Pomodoro Timer Site",
      description: [
        "Created a website that combines a todo-list and a pomodoro timer. I specifically designed the website to include additional features such as a display of a remaining time for a task and the ability to edit the interval lengths for the pomodoro timer.",
        "Developed using React, HTML, and CSS. The website is hosted on Vercel.",
      ],
    },
    {
      imgSrc: "",
      alt: "Crash Data Aggregation Screenshot",
      title: "Crash Data Aggregation/Data Structure Comparison",
      description: [
        "Developed a program that aggregates crash data from a CSV file and finds the places with the top x number of crashes.",
        "Implemented the program using C++ and compared the custom implementations of a hash-map and heap.",
        "The program was created as a final project for COP3530 at UF.",
      ],
    },
    {
      imgSrc: "",
      alt: "Minesweeper Game Screenshot",
      title: "Minesweeper Game",
      description: [
        "Created a custom version of the orgiginal Minesweeper game using C++ and SFML. The game has a functional GUI, timer, and score system.",
        "The game was created as a final projects for COP3503C at UF.",
      ],
    },
  ];

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
          <h3 className="font-bold">{project.title}</h3>
          {project.description.map((text, index) => {
            return <p key={index}>{text}</p>;
          })}
        </div>
      </div>
    );
  });

  return (
    <div id="projects" className="mx-56">
      <h1 className="text-5xl font-semibold text-center mb-8">Projects</h1>
      {projectsElements}
    </div>
  );
}

export default Projects;
