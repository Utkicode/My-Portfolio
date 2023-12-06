import React from "react";
import "./Resume.css";

const ResumePage = () => {
  const education = [
    {
      degree: "Master in Computer Engineering",
      school: "Harvard University",
      years: "2015-2017",
    },
    {
      degree: "Bachelor in Computer Engineering",
      school: "University of California",
      years: "2014-2015",
    },
    {
      degree: "HTML Developer",
      school: "International Science",
      years: "2013-2014",
    },
  ];

  const experience = [
    {
      title: "Sr. Font End Developer",
      company: "Apple Inc",
      years: "2020 - current",
    },
    {
      title: "Jr. Font End Developer",
      company: "Dribbble Inc",
      years: "2018-2020",
    },
    {
      title: "HTML Developer",
      company: "Adobe Inc",
      years: "2017-2018",
    },
  ];

  return (
    <div className="resume-page">
      <div className="education">
        <h2>Education</h2>
        <ul>
          {education.map((item, index) => (
            <li key={index}>
              <h3>{item.degree}</h3>
              <h4>{item.school}</h4>
              <p>{item.years}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="vertical-line" />
      <div className="experience">
        <h2>Experience</h2>
        <ul>
          {experience.map((item, index) => (
            <li key={index}>
              <h3>{item.title}</h3>
              <h4>{item.company}</h4>
              <p>{item.years}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ResumePage;
