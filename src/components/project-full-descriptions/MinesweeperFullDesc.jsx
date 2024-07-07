import React from "react";

function MinesweeperFullDesc() {
    return (
        <div>
            <section>
                <p className="mb-4 md:mx-24">
                    This project was created as a final project for COP3503C,
                    Programming Fundamentals II, during Fall 2023 at UF.
                </p>
                <p className="mb-4 md:mx-24">
                    I implemented the game logic and the GUI using the Simple
                    and Fast Multimedia Library (SFML) in C++.
                </p>

                <div className="grid items-center justify-center my-8 md:mx-32 lg:mx-48">
                    <img
                        src="/project-screenshots/minesweeper-clone.png"
                        alt="Minesweeper Main Window Screenshot"
                        className="rounded-2xl"
                        draggable="false"
                    />
                </div>
            </section>

            <section>
                <h2 className="mt-24 mx-24 mb-8 font-semibold">Features</h2>

                <p className="mb-4 md:mx-24">
                    The game features classic Minesweeper gameplay with
                    functionalities such as grid generation, mine placement, and
                    user interactions including flagging cells and revealing
                    tiles.
                </p>
                <p className="mb-4 md:mx-24">
                    I also implemented a quality of life feature, found in many
                    modern minesweeper games, where you can click on a revealed
                    tile to potentially reveal all surrounding tiles.
                </p>
                <p className="mb-4 md:mx-24">
                    The GUI provides a clear and interactive experience,
                    displaying the game grid, number of flags placed, time, and
                    status messages. There is also a scoreboard for keeping
                    track of your fastest runs.
                </p>
            </section>

            <section className="text-center mt-24">
                <h3 className="mb-4">Access the repository here</h3>
                <a
                    href="https://github.com/raglandconnor/Minesweeper-Clone"
                    target="_blank"
                    className="text-2xl font-semibold bg-blue-500 p-2 rounded-lg bg-opacity-75 hover:bg-opacity-85 hover:underline"
                >
                    GitHub
                </a>
            </section>
        </div>
    );
}

export default MinesweeperFullDesc;
