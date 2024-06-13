import React from "react";

import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiReactrouter } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { PiFileCppLight } from "react-icons/pi";
import { FaPython } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiSfml } from "react-icons/si";

function Skills() {
  return (
    <div id="skills" className="">
      <h1 className="text-5xl font-semibold text-center mb-4">Skills</h1>
      <div className="grid grid-rows-3 grid-cols-6 grid-flow-row mx-12 gap-8">
        <div className="flex items-center justify-center flex-col">
          <IoLogoJavascript className="w-24 h-24" />
          <p>Javascript</p>
        </div>

        <div className="flex items-center justify-center flex-col">
          <FaReact className="w-24 h-24" />
          <p>React</p>
        </div>

        <div className="flex items-center justify-center flex-col">
          <SiReactrouter className="w-24 h-24" />
          <p>React-Router</p>
        </div>

        <div className="flex items-center justify-center flex-col">
          <RiTailwindCssFill className="w-24 h-24" />
          <p>Tailwind CSS</p>
        </div>

        <div className="flex items-center justify-center flex-col">
          <PiFileCppLight className="w-24 h-24" />
          <p>C++</p>
        </div>

        <div className="flex items-center justify-center flex-col">
          <FaPython className="w-24 h-24" />
          <p>Python</p>
        </div>

        <div className="flex items-center justify-center flex-col">
          <FaHtml5 className="w-24 h-24" />
          <p>HTML</p>
        </div>

        <div className="flex items-center justify-center flex-col">
          <FaCss3Alt className="w-24 h-24" />
          <p>CSS</p>
        </div>

        <div className="flex items-center justify-center flex-col">
          <SiSfml className="w-24 h-24" />
          <p>SFML</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
