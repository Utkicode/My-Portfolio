// EducationExperience.js

import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

import './EducationExperience.css';

const EducationExperience = () => {
  const [isEducationHovered, setEducationHovered] = useState(false);
  const [isExperienceHovered, setExperienceHovered] = useState(false);

  const educationAnimation = useSpring({
    opacity: isEducationHovered ? 0.9 : 1,
    transform: isEducationHovered ? 'scale(1.05)' : 'scale(1)',
    boxShadow: isEducationHovered ? '0 0 20px rgba(0, 0, 0, 0.2)' : '0 0 10px rgba(0, 0, 0, 0.1)',
  });

  const experienceAnimation = useSpring({
    opacity: isExperienceHovered ? 1 : 1,
    transform: isExperienceHovered ? 'scale(1.05)' : 'scale(1)',
    boxShadow: isExperienceHovered ? '0 0 20px rgba(0, 0, 0, 0.2)' : '0 0 10px rgba(0, 0, 0, 0.1)',
  });

  const educationDetails = [
    {
      institution: 'IIMT College of Engineering',
      degree: 'Bachelor of Engineering in Information Technology',
      year: '2018 - 2022',
    },
    {
      institution: 'Incapp Pvt Ltd.',
      degree: 'Web Development Bootcamp',
      year: '2021 - 2022',
    },
  ];

  const internshipDetails = {
    position: <strong >Intern</strong>,
    company: 'NIIT Ltd',
    year: 'Jan 2022 - May 2022',
    description: 'Gained hands-on experience in web development and learned best practices.',
  };

  const experienceDetails = [
    {
      position: 'Full-Stack Web Developer',
      company: 'NIIT Learning System Ltd',
      year: '2022 - Present',
      description: 'Worked on building responsive and user-friendly web applications.',
    },
  ];

  return (
    <div id='skills'>
      <h1 className="tagline">A Summary to My Resume</h1>
      <div className="education-experience-container">
        <animated.div
          className="education-section"
          style={educationAnimation}
          onMouseEnter={() => setEducationHovered(true)}
          onMouseLeave={() => setEducationHovered(false)}
        >
          <h2>Education</h2>
          {educationDetails.map((edu, index) => (
            <div key={index}>
              <p>
                {edu.institution} - {edu.degree}<br />
                {edu.year}
              </p>
            </div>
          ))}
          <div>
            <p>
              {internshipDetails.position} - {internshipDetails.company}<br />
              {internshipDetails.year}<br />
              {internshipDetails.description}
            </p>
          </div>
        </animated.div>

        <animated.div
          className="experience-section"
          style={experienceAnimation}
          onMouseEnter={() => setExperienceHovered(true)}
          onMouseLeave={() => setExperienceHovered(false)}
        >
          <h2>Experience</h2>
          {experienceDetails.map((experience, index) => (
            <div key={index} className="experience-item">
              <h3>{experience.position}</h3>
              <p>
                {experience.company} - {experience.year}<br />
                {experience.description}
              </p>
            </div>
          ))}
        </animated.div>
      </div>
    </div>
  );
};

export default EducationExperience;
