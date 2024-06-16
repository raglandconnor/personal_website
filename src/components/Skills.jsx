import React from "react";

import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { PiFileCppLight } from "react-icons/pi";
import { FaPython } from "react-icons/fa";
import { SiReactrouter } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiSfml } from "react-icons/si";

function Skills() {
  const skillsArr = [
    {
      logo: <IoLogoJavascript className="w-24 h-24" />,
      text: "Javascript",
    },
    {
      logo: <FaReact className="w-24 h-24" />,
      text: "React",
    },
    {
      logo: <PiFileCppLight className="w-24 h-24" />,
      text: "C++",
    },
    {
      logo: <FaPython className="w-24 h-24" />,
      text: "Python",
    },
    {
      logo: <SiReactrouter className="w-24 h-24" />,
      text: "React-Router",
    },
    {
      logo: <RiTailwindCssFill className="w-24 h-24" />,
      text: "Tailwind CSS",
    },
    {
      logo: <FaHtml5 className="w-24 h-24" />,
      text: "HTML",
    },
    {
      logo: <FaCss3Alt className="w-24 h-24" />,
      text: "CSS",
    },
    {
      logo: <SiSfml className="w-24 h-24" />,
      text: "SFML",
    },
  ];

  const skillsElements = skillsArr.map((item, index) => {
    return (
      <div
        key={index}
        className="flex items-center justify-center flex-col scale-90"
      >
        {item.logo}
        <p className="text-lg font-semibold">{item.text}</p>
      </div>
    );
  });
  return (
    <section id="skills">
      <h1 className="font-semibold text-center mb-12">Skills</h1>
      <div className="grid grid-cols-3 gap-4">{skillsElements}</div>
    </section>
  );
}

export default Skills;
