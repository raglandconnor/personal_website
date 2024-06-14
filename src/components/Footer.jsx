import React from "react";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  const socialsArr = [
    {
      link: "https://www.linkedin.com/in/raglandconnor/",
      icon: <FaLinkedin className="mr-2 scale-[2]" />,
    },
    {
      link: "https://github.com/raglandconnor",
      icon: <FaGithub className="mr-2 scale-[2]" />,
    },
    {
      link: "https://instagram.com/connor.ragland",
      icon: <FaInstagram className="mr-2 scale-[2]" />,
    },
  ];

  const socialsElements = socialsArr.map((social, index) => {
    return (
      <div key={index} className="flex items-center justify-center">
        <a href={social.link} target="_blank">
          {social.icon}
        </a>
      </div>
    );
  });

  return (
    <footer className="mt-96 w-full border-t border-white border-opacity-50 py-24">
      <div className="flex flex-row items-center justify-center gap-x-12">
        <div className="flex items-center justify-center">
          <a href="mailto:connor.ragland@hotmail.com" className="text-xl">
            connor.ragland@hotmail.com
          </a>
        </div>
        {socialsElements}
      </div>
    </footer>
  );
}

export default Footer;
