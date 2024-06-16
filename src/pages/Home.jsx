import React from "react";

import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Education from "../components/Education";

function Home() {
  return (
    <main className="flex flex-col gap-48 mt-24 xl:w-[1280px]">
      <About />
      <Skills />
      <Education />
      <Projects />
    </main>
  );
}

export default Home;
