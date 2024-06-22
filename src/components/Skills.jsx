import React from "react";

import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiMongoose } from "react-icons/si";
import { PiFileCppLight } from "react-icons/pi";
import { FaPython } from "react-icons/fa";
import { SiReactrouter } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiPostman } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiSfml } from "react-icons/si";
import { FaApple } from "react-icons/fa";
import { SiWindows11 } from "react-icons/si";

function Skills() {
    const skillsArr = [
        {
            logo: <SiJavascript className="w-24 h-24 scale-90" />,
            text: "Javascript",
        },
        {
            logo: <SiTypescript className="w-24 h-24 scale-90" />,
            text: "Typescript",
        },
        {
            logo: <FaReact className="w-24 h-24" />,
            text: "React",
        },
        {
            logo: <FaNodeJs className="w-24 h-24 scale-90" />,
            text: "Node.js",
        },
        {
            logo: <SiExpress className="w-24 h-24" />,
            text: "Express.js",
        },
        {
            logo: <SiMongodb className="w-24 h-24" />,
            text: "MongoDB",
        },
        {
            logo: <SiMongoose className="w-24 h-24" />,
            text: "Mongoose",
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
            logo: <SiPostman className="w-24 h-24 scale-90" />,
            text: "Postman",
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
            logo: <SiSfml className="w-24 h-24 scale-90" />,
            text: "SFML",
        },
        {
            logo: <FaApple className="w-24 h-24" />,
            text: "MacOS",
        },
        {
            logo: <SiWindows11 className="w-24 h-24 scale-75" />,
            text: "Windows",
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
            <div className="grid grid-cols-3 md:grid-cols-4 md:px-8 lg:grid-cols-5 lg:px-12 xl:grid-cols-6 xl:px-16 gap-4 pointer-events-none">
                {skillsElements}
            </div>
        </section>
    );
}

export default Skills;
