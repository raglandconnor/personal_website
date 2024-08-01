import AVLTreeFullDesc from '../components/project-full-descriptions/AVLTreeFullDesc';
import CrashGuardFullDesc from '../components/project-full-descriptions/CrashGuardFullDesc';
import JournalAppFullDesc from '../components/project-full-descriptions/JournalAppFullDesc';
import MinesweeperFullDesc from '../components/project-full-descriptions/MinesweeperFullDesc';
import PageRankFullDesc from '../components/project-full-descriptions/PageRankFullDesc';
import PomodoroPlusFullDesc from '../components/project-full-descriptions/PomodoroPlusFullDesc';
import ReticketerFullDesc from '../components/project-full-descriptions/ReticketerFullDesc';

export const projectsArr = [
  {
    _id: 'reticketer',
    imgSrc: '/project-screenshots/reticketer-screenshot.png',
    alt: 'Reticketer Web App Screenshot',
    title: 'Reticketer',
    description: [
      'An all-in-one ticket reselling platform for any event, at any time.',
      "Created as a project for Headstarter's week one hackatho.",
    ],
    techStack: ['Next.js', 'JavaScript', 'Tailwind CSS', 'Vercel'],
    repoLink: 'https://github.com/raglandconnor/reticketer',
    deploymentLink: 'https://reticketer.vercel.app/',
    fullDescription: <ReticketerFullDesc />,
  },
  {
    _id: 'journal-app',
    imgSrc: '/project-screenshots/journalapp-screenshot1.png',
    alt: 'Journal Application Screenshot',
    title: 'Journal Web App',
    description: [
      'Inspired by the Apple iPhone journal app, I wanted to create my own.',
      'Full-stack application with user authentication and secure data handling.',
      'Users can create accounts, write journal entries, and view/edit past entries.',
    ],
    techStack: [
      'MongoDB',
      'Express.js',
      'React',
      'Node.js',
      'TypeScript',
      'Tailwind CSS',
      'Mongoose',
    ],
    repoLink: 'https://github.com/raglandconnor/journal_app',
    deploymentLink: '',
    fullDescription: <JournalAppFullDesc />,
  },
  {
    _id: 'personal-website',
    imgSrc: '/project-screenshots/personal-portfolio.png',
    alt: 'Personal Portfolio Site Screenshot',
    title: 'Personal Portfolio Website',
    description: ['My personal website where I showcase projects and skills.'],
    techStack: [
      'React',
      'Tailwind CSS',
      'JavaScript',
      'React-router',
      'Vercel',
    ],
    repoLink: 'https://github.com/raglandconnor/personal_website',
    deploymentLink: 'https://raglandconnor.com',
    fullDescription: (
      <>
        <p className="mb-4 md:mx-24">Hey, check out the GitHub repo above.</p>
      </>
    ),
  },
  {
    _id: 'todo-list',
    imgSrc: '/project-screenshots/todo-list.png',
    alt: 'Pomodoro/Todo List Site Screenshot',
    title: 'Pomodoro+ - Todo List and Pomodoro Timer Site',
    description: [
      'Designed a productivity web app that include features such as a display of a remaining time for a task and the ability to edit the interval lengths for the pomodoro timer.',
    ],
    techStack: ['React', 'JavaScript', 'HTML', 'CSS', 'Vercel'],
    repoLink: 'https://github.com/raglandconnor/personal-todo-app',
    deploymentLink: 'https://pomodoro-plus-iota.vercel.app/',
    fullDescription: <PomodoroPlusFullDesc />,
  },
  {
    _id: 'crashguard',
    imgSrc: '/project-screenshots/crashguard.png',
    alt: 'Crash Data Aggregation Screenshot',
    title: 'Crash Data Aggregation/Data Structure Comparison',
    description: [
      'Developed a program that aggregates crash data finds the places with the top x number of crashes.',
      'Created as a final project for COP3530 where we were tasked to compare two data structures.',
      'I was in charge of building the hash map.',
    ],
    techStack: ['C++', 'Kaggle Data Set', 'Hash Map', 'Heap'],
    repoLink: 'https://github.com/raglandconnor/CrashGuard',
    deploymentLink: '',
    fullDescription: <CrashGuardFullDesc />,
  },
  {
    _id: 'minesweeper',
    imgSrc: '/project-screenshots/minesweeper-clone.png',
    alt: 'Minesweeper Game Screenshot',
    title: 'Minesweeper Game',
    description: [
      'Created a custom version of the orgiginal Minesweeper game using C++ and SFML. The game has a functional GUI, timer, and score system.',
      'The game was created as a final projects for COP3503C at UF.',
    ],
    techStack: ['C++', 'SFML'],
    repoLink: 'https://github.com/raglandconnor/Minesweeper-Clone',
    deploymentLink: '',
    fullDescription: <MinesweeperFullDesc />,
  },
  {
    _id: 'pagerank-algorithm',
    imgSrc: '/project-screenshots/pagerank.png',
    alt: 'Google Page Rank Algorithm',
    title: 'Google Page Rank Algorithm',
    description: [
      'Implemented the Google Page Rank Algorithm in C++ to rank webpages based on their importance.',
      'The page rank algorithm was created as a project for COP3530 at UF.',
    ],
    techStack: ['C++', 'Catch2'],
    repoLink: '',
    deploymentLink: '',
    fullDescription: <PageRankFullDesc />,
  },
  {
    _id: 'avl-tree',
    imgSrc: '/project-screenshots/avl.png',
    alt: 'AVL Tree',
    title: 'Custom AVL Tree Implementation',
    description: [
      'Created my own custom AVL Tree Implementation from scratch in C++. The AVL Tree has all the standard functions of an AVL Tree, including insert, delete, and search.',
      'The AVL Tree was created as a project for COP3530 at UF.',
    ],
    techStack: ['C++', 'Catch2'],
    repoLink: '',
    deploymentLink: '',
    fullDescription: <AVLTreeFullDesc />,
  },
];
