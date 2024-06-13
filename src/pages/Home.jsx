import React from "react";

import About from "../components/About";
import Skills from "../components/Skills";

function Home() {
  return (
    <div className="flex flex-col gap-32">
      <About />
      <Skills />
    </div>
  );
}

export default Home;
