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
        fullDescription: (
            <>
                <section>
                    <p className="mb-4 md:mx-24">
                        My journal web app has been styled with mobile, tablet,
                        and desktop in mind. It is a full-stack application with
                        user authentication, personal data encryption, and
                        secure data handling.
                    </p>
                    <p className="mb-4 md:mx-24">
                        The front-end was created using React and Tailwind CSS.
                        The back-end was created using Express.js and Node.js.
                        The database was created using MongoDB and Mongoose.
                    </p>
                    <div className="grid md:grid-cols-2 items-center justify-center my-8  gap-4 md:mx-28">
                        <img
                            src="/project-screenshots/journal-app/journal-app-mobile-phone-journal-page.png"
                            alt="Journal Page Mobile Screenshot"
                            className="h-[600px] object-cover"
                            draggable="false"
                        />
                        <img
                            src="/project-screenshots/journalapp-screenshot1.png"
                            alt="Journal Page Desktop Screenshot"
                            className="rounded-2xl"
                            draggable="false"
                        />
                    </div>
                    <p className="mb-4 md:mx-24">
                        The design was inspired by the Apple iPhone journal app.
                    </p>
                </section>
                <section>
                    <h2 className="mt-24 mx-24 mb-8 font-semibold">Features</h2>

                    <h4 className="text-center mb-4">Log In/Sign Up</h4>
                    <div className="grid lg:grid-cols-2 lg:mx-24 gap-12 items-center justify-center">
                        <div className="md:text-lg">
                            <p className="mb-4 lg:mb-8">
                                The log in page securely sends information
                                to/from the database.
                            </p>
                            <p className="mb-4 lg:mb-8">
                                Passwords are hashed using bcrypt.
                            </p>
                        </div>
                        <video
                            src="/project-screenshots/journal-app/sign-up-page.mp4"
                            alt="Sign Up Page Demonstration Video"
                            autoPlay
                            loop
                            muted
                            playsInline
                        ></video>
                    </div>

                    <h4 className="text-center mb-4 mt-12">
                        Writing Journal Entries
                    </h4>
                    <div className="grid lg:grid-cols-2 lg:mx-24 gap-12 items-center justify-center">
                        <div className="md:text-lg">
                            <p className="mb-4 lg:mb-8">
                                By clicking the button at the bottom of the
                                screen, you add a new journal entry.
                            </p>
                            <p className="mb-4 lg:mb-8">
                                All journal entries are encrypted using
                                mongoose-encryption. This means that the data is
                                encrypted in the database and only the user can
                                see it when logged into their account.
                            </p>
                            <p className="mb-4 lg:mb-8">
                                Journal entries are only accessible by the user
                                who created them.
                            </p>
                            <p className="mb-4"></p>
                        </div>
                        <video
                            src="/project-screenshots/journal-app/adding-journal-entries-demo.mp4"
                            alt="Adding Journal Entries Demonstration Video"
                            autoPlay
                            loop
                            muted
                            playsInline
                        ></video>
                    </div>

                    <h4 className="text-center mb-4 mt-12">
                        Editing/Deleting Journal Entries
                    </h4>
                    <div className="grid lg:mx-24 gap-12 items-center justify-center">
                        {/* <div className="md:text-lg">
                            <p className="mb-4 lg:mb-8">
                                On this page there are journal entries.
                            </p>
                            <p className="mb-4 lg:mb-8">lol</p>
                        </div> */}
                        <video
                            src="/project-screenshots/journal-app/editing-deleting-journal-entries-demo.mp4"
                            alt="Editing and Deleting Journal Entries Demonstration Video"
                            className="lg:h-[545px]"
                            autoPlay
                            loop
                            muted
                            playsInline
                        ></video>
                    </div>

                    <h4 className="text-center mb-4 mt-12">Logout/Login</h4>
                    <div className="grid lg:grid-cols-2 lg:mx-24 gap-12 items-center justify-center">
                        <div className="md:text-lg">
                            <p className="mb-4 lg:mb-8">
                                The user can log out of their account to keep
                                their journal entries secret.
                            </p>
                            <p className="mb-4 lg:mb-8">
                                Logging back in retrieves all journal entries
                                associated with their account from the database.
                            </p>
                        </div>
                        <video
                            src="/project-screenshots/journal-app/logout-login.mp4"
                            alt="Logout/Login Demonstration Video"
                            autoPlay
                            loop
                            muted
                            playsInline
                        ></video>
                    </div>
                </section>

                <section>
                    <h2 className="mt-24 mx-24 mb-8 font-semibold">
                        Accessibility
                    </h2>
                    <div className="grid lg:grid-cols-2 lg:mx-24 gap-12 items-center justify-center">
                        <div className="md:text-lg">
                            <p className="mb-4 lg:mb-8">
                                Accessibility is a key feature of this app.
                            </p>
                            <p className="mb-4 lg:mb-8">
                                All functionality is accessible using only the
                                keyboard.
                            </p>
                            <p className="mb-4"></p>
                        </div>
                        <video
                            src="/project-screenshots/journal-app/accessibility-demo.mp4"
                            alt="Adding Journal Entries Demonstration Video"
                            autoPlay
                            loop
                            muted
                            playsInline
                        ></video>
                    </div>
                </section>

                <section className="text-center mt-24">
                    <h3 className="mb-4">Access the repository here</h3>
                    <a
                        href="https://github.com/raglandconnor/journal_app"
                        target="_blank"
                        className="text-2xl font-semibold bg-blue-500 p-2 rounded-lg bg-opacity-75 hover:bg-opacity-85 hover:underline"
                    >
                        GitHub
                    </a>
                </section>
            </>
        ),
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
    },
];
