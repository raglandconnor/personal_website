import React from "react";

import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Education from "../components/Education";

function Home() {
  return (
    <div className="flex flex-col gap-48 mt-52">
      <About />
      <Skills />
      <Education />
      <Projects />
    </div>
  );
}

export default Home;
