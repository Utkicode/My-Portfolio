import React from 'react';

const SkillItem = ({ skill }) => {
  const skillIcons = {
    Java: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100" height="100" fill="#007396">
    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#007396">
      Java
    </text>
  </svg>,
    Python: <svg width="50" height="50"><polygon points="20,0 10,25 30,25" fill="yellow" /></svg>,
    ReactJS: <svg width="50" height="50"><path d="M25,0 A25 25,0 1,1 25,50 Z" fill="blue" /></svg>,
    NodeJS: <svg width="50" height="50"><path d="M25,10 L35,25 L15,25 Z" fill="green" /></svg>,
    SpringBoot: <svg width="50" height="50"><rect x="10" y="10" width="30" height="30" fill="orange" /></svg>,
  };

  const icon = skillIcons[skill.name];

  return (
    <div className="skill-item">
      {icon}
      <h3>{skill.name}</h3>
    </div>
  );
};

export default SkillItem;
