import React from 'react';

function Experience() {
  const experienceArr = [
    {
      title: 'Software Engineer Fellow',
      company: 'Headstarter AI',
      link: true,
      linkColor: '#2AFCCF',
      companyLink: 'https://headstarter.co/',
      location: 'Remote',
      startDate: 'Jul 2024',
      endDate: 'Present',
      description: [
        'Intensive learning program for web development and artificial intelligence',
      ],
    },
  ];

  const experienceElements = experienceArr.map((experience, idx) => {
    return (
      <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div>
          <h4 className="font-semibold">{experience.title}</h4>
          {experience.link ? (
            <a
              href={experience.companyLink}
              target="_blank"
              className={`text-lg font-semibold italic hover:text-[${experience.linkColor}] hover:underline`}
            >
              {experience.company}
            </a>
          ) : (
            <p className="text-lg font-semibold italic">{experience.company}</p>
          )}

          <p>{experience.location}</p>
          <p>
            {experience.startDate} - {experience.endDate}
          </p>
        </div>
        <div>
          {experience.description.map((desc, idx) => {
            return <p key={idx}>{desc}</p>;
          })}
        </div>
      </div>
    );
  });

  return (
    <section id="experience" className="pt-32">
      <h1 className="font-semibold text-center mb-16">Experience</h1>
      <div className="grid grid-cols-1 mx-8 md:mx-64">{experienceElements}</div>
    </section>
  );
}

export default Experience;
