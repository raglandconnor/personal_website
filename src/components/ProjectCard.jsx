import React from 'react';

const ProjectCard = ({ title, shortDescription, techStack, imageUrl }) => {
  const techStackElements = techStack.map((tech, idx) => {
    return (
      <div
        key={idx}
        className="bg-[#00E3B2] rounded-full p-0.5 px-2 text-sm text-white bg-opacity-50"
      >
        {tech}
      </div>
    );
  });

  const shortDescriptionElements = shortDescription.map((text, idx) => {
    return (
      <p key={idx} className="inline-block mb-1">
        {text}
      </p>
    );
  });

  return (
    <div className="overflow-hidden relative duration-700 border rounded-xl hover:bg-zinc-800 hover:bg-opacity-90 group hover:border-zinc-400/50 md:gap-8 border-zinc-600 p-4 h-full">
      <div className="pointer-events-none">
        <h4 className="mb-3 text-[1.6rem]">{title}</h4>
        <img
          className="rounded-lg w-full h-64 object-cover object-top mb-3"
          draggable="false"
          src={imageUrl}
          alt={title}
        />
        <div className="flex flex-wrap gap-2 mb-3">{techStackElements}</div>
        <div>{shortDescriptionElements}</div>
      </div>
    </div>
  );
};

export default ProjectCard;
