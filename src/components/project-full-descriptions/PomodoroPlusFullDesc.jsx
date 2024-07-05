import React from "react";

function PomodoroPlusFullDesc() {
    return (
        <>
            <section>
                <p className="mb-4 md:mx-24">
                    This app was created as a personal project to test my React
                    abilities and also to make a productivity tool that combined
                    different tools I already use.
                </p>
                <p className="mb-4 md:mx-24">
                    In the app, there is a pomodoro timer that can use custom
                    intervals, as well as a todo list that has countdown timers
                    for each task.
                </p>
                <div className="grid items-center justify-center my-8 md:mx-32 lg:mx-48">
                    <img
                        src="/project-screenshots/pomodoro-plus/pomodoroplus-main-page.png"
                        alt="Pomodoro Plus Main Page Screenshot"
                        className="rounded-2xl"
                        draggable="false"
                    />
                </div>
                <p className="mb-4 md:mx-24">
                    I have found that countdowns help me get tasks done sooner,
                    so I made sure to incorporate that into the app.
                </p>
            </section>

            <section>
                <h2 className="mt-24 mx-24 mb-8 font-semibold">Features</h2>

                <h4 className="text-center mb-4">Custom Pomodoro Intervals</h4>
                <div className="grid lg:grid-cols-2 lg:mx-24 gap-12 items-center justify-center">
                    <div className="md:text-lg">
                        <p className="mb-4 lg:mb-8">
                            The standard pomodoro technique calls for 25 minute
                            work intervals and 5 minute break intervals.
                        </p>
                        <p className="mb-4 lg:mb-8">
                            I have found that as you use the technique more, you
                            may want longer work intervals.
                        </p>
                        <p className="mb-4 lg:mb-8">
                            To address this, I have included the option to fully
                            customize the intervals.
                        </p>
                        <p className="mb-4 lg:mb-8">
                            It will also calculate the total time the full set
                            will take.
                        </p>
                    </div>
                    <img
                        src="/project-screenshots/pomodoro-plus/pomodoroplus-pomodoro-settings.png"
                        alt="Pomodoro Custom Interval Settings Menu"
                        className="rounded-md"
                    />
                </div>

                <h4 className="text-center mb-4 mt-12">Sounds</h4>
                <div className="grid lg:mx-24 items-center justify-center">
                    <div className="md:text-lg">
                        <p className="mb-4 lg:mb-8">
                            When the work interval beings and as a rest interval
                            is ending, associated sounds will play.
                        </p>
                        <p>There are options to disable this if needed.</p>
                    </div>
                </div>

                <h4 className="text-center mb-4 mt-12">Adding Todos</h4>
                <div className="grid lg:grid-cols-2 lg:mx-24 gap-12 items-center justify-center">
                    <div className="md:text-lg">
                        <p className="mb-4 lg:mb-8">
                            The user can add todo items, each having their own
                            finish date/time. The remaining time for each task
                            is displayed as a countdown and can be disabled.
                        </p>
                    </div>
                    <video
                        src="/project-screenshots/pomodoro-plus/pomodoroplus-adding-todos-demo.mp4"
                        alt="Adding Todo Items Demonstration"
                        className="rounded-md"
                        autoPlay
                        loop
                        muted
                        playsInline
                    ></video>
                </div>

                <h4 className="text-center mb-4 mt-12">
                    Editing/Deleting Todos
                </h4>
                <div className="grid lg:mx-24 gap-12 items-center justify-center">
                    {/* <div className="md:text-lg">
                        <p className="mb-4 lg:mb-8">
                            Todos can be edited or deleted by the user.
                        </p>
                        <p className="mb-4 lg:mb-8">
                            Logging back in retrieves all journal entries
                            associated with their account from the database.
                        </p>
                    </div> */}
                    <video
                        src="/project-screenshots/pomodoro-plus/pomodoroplus-editing-deleting-todos-demo.mp4"
                        alt="Editing/Deleting Todo items Demonstration Video"
                        className="lg:h-[545px] rounded-md"
                        autoPlay
                        loop
                        muted
                        playsInline
                    ></video>
                </div>

                <h4 className="text-center mb-4 mt-12">Storage</h4>
                <div className="grid lg:mx-24 items-center justify-center">
                    <div className="md:text-lg">
                        <p className="mb-4 lg:mb-8 lg:mx-24">
                            All todo items are stored in the browser's local
                            storage. This keeps the users data inaccessible to
                            other users and ensures data is not lost when the
                            page is refreshed.
                        </p>
                        <p className="mb-4 lg:mb-8 lg:mx-24">
                            All settings are also retained in local storage.
                        </p>
                    </div>
                </div>

                <h4 className="text-center mb-4 mt-12">App Customization</h4>
                <div className="grid lg:grid-cols-2 lg:mx-24 gap-12 items-center justify-center">
                    <div className="md:text-lg">
                        <p className="mb-4 lg:mb-8">
                            In the settings menu, there are options to hide
                            elements on the page.
                        </p>
                        <p className="mb-4 lg:mb-8">
                            Todo coundowns can be overwhelming for some, so the
                            option to remove them is there.
                        </p>
                        <p className="mb-4 lg:mb-8">
                            Other options are shown in the screenshot.
                        </p>
                    </div>
                    <img
                        src="/project-screenshots/pomodoro-plus/pomodoroplus-app-customization-screenshot.png"
                        alt="Pomodoro App Customization Settings Menu Screenshot"
                        className="rounded-md"
                    />
                </div>
            </section>

            <section className="text-center mt-24">
                <h3 className="mb-4">Try it out</h3>

                <a
                    href="https://pomodoro-plus-qc99zqf4l-connor-raglands-projects.vercel.app/"
                    target="_blank"
                    className="text-2xl font-semibold bg-orange-500 p-2 rounded-lg bg-opacity-75 hover:bg-opacity-85 hover:underline"
                >
                    Live Site
                </a>
            </section>

            <section className="text-center mt-24">
                <h3 className="mb-4">Access the repository here</h3>
                <a
                    href="https://github.com/raglandconnor/personal-todo-app"
                    target="_blank"
                    className="text-2xl font-semibold bg-blue-500 p-2 rounded-lg bg-opacity-75 hover:bg-opacity-85 hover:underline"
                >
                    GitHub
                </a>
            </section>
        </>
    );
}

export default PomodoroPlusFullDesc;
