import React from "react";

import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

function Home() {
  return (
    <div className="flex flex-col gap-32">
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default Home;
