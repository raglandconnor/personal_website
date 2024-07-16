import React from "react";

import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Experience from "../components/Experience";

function Home() {
    return (
        <main className="flex flex-col mt-24 xl:w-[1280px]">
            <About />
            <Skills />
            {/* <Experience /> */}
            <Education />
            <Projects />
        </main>
    );
}

export default Home;
