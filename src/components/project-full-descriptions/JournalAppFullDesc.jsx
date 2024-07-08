import React from "react";

function JournalAppFullDesc() {
    return (
        <>
            <section>
                <p className="mb-4 md:mx-24">
                    My journal web app has been styled with mobile, tablet, and
                    desktop in mind. It is a{" "}
                    <span className="underline">
                        full-stack application with user authentication,
                        personal data encryption, and secure data handling
                    </span>
                    .
                </p>
                <p className="mb-4 md:mx-24">
                    The front-end was created using{" "}
                    <span className="underline">React</span> and{" "}
                    <span className="underline">Tailwind CSS</span>. The
                    back-end was created using{" "}
                    <span className="underline">Express.js</span> and{" "}
                    <span className="underline">Node.js</span>. The database was
                    handled using <span className="underline">MongoDB</span> and{" "}
                    <span className="underline">Mongoose</span>.
                </p>
                <div className="grid md:grid-cols-2 items-center justify-center my-8  gap-4 md:mx-28">
                    <img
                        src="/project-screenshots/journal-app/journal-app-mobile-phone-journal-page.png"
                        alt="Journal Page Mobile Screenshot"
                        className="object-cover"
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
                            The log in page securely sends information to/from
                            the database.
                        </p>
                        <p className="mb-4 lg:mb-8">
                            Passwords are hashed using{" "}
                            <span className="underline">bcrypt</span>.
                        </p>
                    </div>
                    <video
                        src="/project-screenshots/journal-app/sign-up-page.mp4"
                        alt="Sign Up Page Demonstration Video"
                        className="rounded-md"
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
                            By clicking the button at the bottom of the screen,
                            you add a new journal entry.
                        </p>
                        <p className="mb-4 lg:mb-8">
                            All journal entries are encrypted using{" "}
                            <span className="underline">
                                mongoose-encryption
                            </span>
                            . This means that the data is encrypted in the
                            database and only the user can see it when logged
                            into their account.
                        </p>
                        <p className="mb-4 lg:mb-8">
                            Journal entries are only accessible by the user who
                            created them.
                        </p>
                        <p className="mb-4"></p>
                    </div>
                    <video
                        src="/project-screenshots/journal-app/adding-journal-entries-demo.mp4"
                        alt="Adding Journal Entries Demonstration Video"
                        className="rounded-md"
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
                        className="lg:h-[545px] rounded-md"
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
                            The user can log out of their account to keep their
                            journal entries secret.
                        </p>
                        <p className="mb-4 lg:mb-8">
                            Logging back in retrieves all journal entries
                            associated with their account from the database.
                        </p>
                    </div>
                    <video
                        src="/project-screenshots/journal-app/logout-login.mp4"
                        alt="Logout/Login Demonstration Video"
                        className="rounded-md"
                        autoPlay
                        loop
                        muted
                        playsInline
                    ></video>
                </div>
            </section>

            <section>
                <h2 className="mt-24 lg:mx-24 mb-8 font-semibold">
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
                        className="rounded-md"
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
    );
}

export default JournalAppFullDesc;
