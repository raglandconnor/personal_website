import React from 'react';

import { SiJavascript } from 'react-icons/si';
import { SiTypescript } from 'react-icons/si';
import { RiNextjsFill } from 'react-icons/ri';
import { FaReact } from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa';
import { SiExpress } from 'react-icons/si';
import { SiMongodb } from 'react-icons/si';
import { SiMongoose } from 'react-icons/si';
import { PiFileCppLight } from 'react-icons/pi';
import { FaPython } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { SiSfml } from 'react-icons/si';
import { FaApple } from 'react-icons/fa';
import { SiWindows11 } from 'react-icons/si';
import { SiOpenai } from 'react-icons/si';

function Skills() {
  const skillsArr = [
    {
      logo: <PiFileCppLight className="w-24 h-24" />,
      text: 'C++',
    },
    {
      logo: <SiJavascript className="w-24 h-24 scale-90" />,
      text: 'JavaScript',
    },
    {
      logo: <RiNextjsFill className="w-24 h-24 scale-105" />,
      text: 'Next.js',
    },
    {
      logo: <FaReact className="w-24 h-24" />,
      text: 'React',
    },
    {
      logo: <RiTailwindCssFill className="w-24 h-24" />,
      text: 'Tailwind CSS',
    },
    {
      logo: <SiOpenai className="w-24 h-24 scale-90" />,
      text: 'OpenAI API',
    },
    {
      logo: <FaPython className="w-24 h-24" />,
      text: 'Python',
    },
    {
      logo: <FaHtml5 className="w-24 h-24" />,
      text: 'HTML',
    },
    {
      logo: <FaCss3Alt className="w-24 h-24" />,
      text: 'CSS',
    },
    {
      logo: <SiSfml className="w-24 h-24 scale-90" />,
      text: 'SFML',
    },
    {
      logo: <SiTypescript className="w-24 h-24 scale-90" />,
      text: 'TypeScript',
    },
    {
      logo: <FaNodeJs className="w-24 h-24 scale-90" />,
      text: 'Node.js',
    },
    {
      logo: <SiExpress className="w-24 h-24" />,
      text: 'Express.js',
    },
    {
      logo: <SiMongodb className="w-24 h-24" />,
      text: 'MongoDB',
    },
    {
      logo: <SiMongoose className="w-24 h-24" />,
      text: 'Mongoose',
    },
    {
      logo: <FaApple className="w-24 h-24" />,
      text: 'MacOS',
    },
    {
      logo: <SiWindows11 className="w-24 h-24 scale-75" />,
      text: 'Windows',
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
    <section id="skills" className="pt-32">
      <h1 className="font-semibold text-center mb-12">Skills</h1>
      <div className="grid grid-cols-3 md:grid-cols-4 md:px-8 lg:grid-cols-5 lg:px-12 xl:grid-cols-6 xl:px-16 gap-4 pointer-events-none">
        {skillsElements}
      </div>
    </section>
  );
}

export default Skills;
