import React from "react";

function Education() {
  const educationArr = [
    {
      imgSrc: "/logos/uf_logo.png",
      imgAlt: "University of Florida Logo",
      name: "University of Florida",
      location: "Gainesville, FL",
      degree: ["B.S. Computer Science", "B.A. Mathematics"],
      date: "August 2022 - May 2026",
      gpa: ["GPA: 3.77"],
    },
    {
      imgSrc: "/logos/mchs_logo.png",
      imgAlt: "Martin County High School Logo",
      name: "Martin County High School",
      location: "Stuart, FL",
      degree: ["General Education"],
      date: "August 2018 - May 2022",
      gpa: ["GPA: 4.0", "Weighted GPA: 6.16/7", "Class Rank: 21/500"],
    },
  ];

  const educationElements = educationArr.map((school, index) => {
    return (
      <div
        key={index}
        className="flex flex-col gap-2 justify-center items-center"
      >
        <img
          src={school.imgSrc}
          alt={school.imgAlt}
          className="w-32 h-32 object-cover"
        />
        <h2 className="text-2xl font-semibold">{school.name}</h2>
        <p className="text-lg">{school.location}</p>
        {school.degree.map((degree) => {
          return <p className="text-lg">{degree}</p>;
        })}
        {school.gpa &&
          school.gpa.map((gpa) => {
            return <p className="text-lg">{gpa}</p>;
          })}
        <p className="text-lg">{school.date}</p>
      </div>
    );
  });

  return (
    <section id="education">
      <h1 className="font-semibold text-center mb-12">Education</h1>
      <div className="grid gap-8">{educationElements}</div>
    </section>
  );
}

export default Education;
