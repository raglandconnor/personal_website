import AVLTreeFullDesc from "../components/project-full-descriptions/AVLTreeFullDesc";
import CrashGuardFullDesc from "../components/project-full-descriptions/CrashGuardFullDesc";
import JournalAppFullDesc from "../components/project-full-descriptions/JournalAppFullDesc";
import MinesweeperFullDesc from "../components/project-full-descriptions/MinesweeperFullDesc";
import PageRankFullDesc from "../components/project-full-descriptions/PageRankFullDesc";
import PomodoroPlusFullDesc from "../components/project-full-descriptions/PomodoroPlusFullDesc";

export const projectsArr = [
    {
        _id: "journal-app",
        imgSrc: "/project-screenshots/journalapp-screenshot1.png",
        alt: "Journal Application Screenshot",
        title: "Journal Web App",
        description: [
            "Inspired by the Apple iPhone journal app, I wanted to create my own.",
            "Full-stack application with user authentication and secure data handling, using React and Express.js.",
            "The database was made using MongoDB and Mongoose, for retrieval of text and images.",
            "The application allows users login and create journal entries with a title, body, and images. Timestamps are saved automatically and entries are ordered accordingly.",
        ],
        techStack: [
            "MongoDB",
            "Express.js",
            "React",
            "Node.js",
            "TypeScript",
            "Tailwind CSS",
            "Mongoose",
        ],
        repoLink: "https://github.com/raglandconnor/journal_app",
        deploymentLink: "",
        fullDescription: <JournalAppFullDesc />,
    },
    {
        _id: "personal-website",
        imgSrc: "/project-screenshots/personal-portfolio.png",
        alt: "Personal Portfolio Site Screenshot",
        title: "Personal Portfolio Website",
        description: [
            "Created a personal portfolio website using React, Tailwind CSS, and React-router. The website is hosted on Vercel.",
        ],
        techStack: ["React", "Tailwind CSS", "JavaScript", "React-router"],
        repoLink: "https://github.com/raglandconnor/personal_website",
        deploymentLink: "https://raglandconnor.com",
        fullDescription: <>You are on my site right now lol</>,
    },
    {
        _id: "todo-list",
        imgSrc: "/project-screenshots/todo-list.png",
        alt: "Pomodoro/Todo List Site Screenshot",
        title: "Pomodoro+ - Todo List and Pomodoro Timer Site",
        description: [
            "Created a website that combines a todo-list and a pomodoro timer. I specifically designed the website to include additional features such as a display of a remaining time for a task and the ability to edit the interval lengths for the pomodoro timer.",
            "Developed using React, HTML, and CSS. The website is hosted on Vercel.",
        ],
        techStack: ["React", "JavaScript", "HTML", "CSS"],
        repoLink: "https://github.com/raglandconnor/personal-todo-app",
        deploymentLink:
            "https://pomodoro-plus-qc99zqf4l-connor-raglands-projects.vercel.app/",
        fullDescription: <PomodoroPlusFullDesc />,
    },
    {
        _id: "crashguard",
        imgSrc: "/project-screenshots/crashguard.png",
        alt: "Crash Data Aggregation Screenshot",
        title: "Crash Data Aggregation/Data Structure Comparison",
        description: [
            "Developed a program that aggregates crash data from a CSV file and finds the places with the top x number of crashes.",
            "Implemented the program using C++ and compared the custom implementations of a hash-map and heap.",
            "The program was created as a final project for COP3530 at UF.",
        ],
        techStack: ["C++", "Kaggle Data Set", "Hash Map", "Heap"],
        repoLink: "https://github.com/raglandconnor/CrashGuard",
        deploymentLink: "",
        fullDescription: <CrashGuardFullDesc />,
    },
    {
        _id: "minesweeper",
        imgSrc: "/project-screenshots/minesweeper-clone.png",
        alt: "Minesweeper Game Screenshot",
        title: "Minesweeper Game",
        description: [
            "Created a custom version of the orgiginal Minesweeper game using C++ and SFML. The game has a functional GUI, timer, and score system.",
            "The game was created as a final projects for COP3503C at UF.",
        ],
        techStack: ["C++", "SFML"],
        repoLink: "https://github.com/raglandconnor/Minesweeper-Clone",
        deploymentLink: "",
        fullDescription: <MinesweeperFullDesc />,
    },
    {
        _id: "pagerank-algorithm",
        imgSrc: "/project-screenshots/pagerank.png",
        alt: "Google Page Rank Algorithm",
        title: "Google Page Rank Algorithm",
        description: [
            "Implemented the Google Page Rank Algorithm in C++ to rank webpages based on their importance.",
            "The page rank algorithm was created as a project for COP3530 at UF.",
        ],
        techStack: ["C++", "Catch2"],
        repoLink: "",
        deploymentLink: "",
        fullDescription: <PageRankFullDesc />,
    },
    {
        _id: "avl-tree",
        imgSrc: "/project-screenshots/avl.png",
        alt: "AVL Tree",
        title: "Custom AVL Tree Implementation",
        description: [
            "Created my own custom AVL Tree Implementation from scratch in C++. The AVL Tree has all the standard functions of an AVL Tree, including insert, delete, and search.",
            "The AVL Tree was created as a project for COP3530 at UF.",
        ],
        techStack: ["C++", "Catch2"],
        repoLink: "",
        deploymentLink: "",
        fullDescription: <AVLTreeFullDesc />,
    },
];
