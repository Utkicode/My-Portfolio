import React from 'react';
import SkillItem from './SkillItem';

const Skills = () => {
  const skills = [
    { name: 'Java', image: 'https://cdn.pixabay.com/photo/2016/08/25/20/43/java-1654096_960_720.png' },
    { name: 'Python', image: 'https://cdn.pixabay.com/photo/2020/01/30/19/35/python-4897438_960_720.jpg' },
    { name: 'ReactJS', image: 'https://cdn.pixabay.com/photo/2018/02/27/18/58/react-js-3192581_960_720.png' },
    { name: 'NodeJS', image: 'https://cdn.pixabay.com/photo/2020/02/09/14/55/node-js-4937759_960_720.png' },
    { name: 'SpringBoot', image: 'https://cdn.pixabay.com/photo/2017/02/22/19/12/spring-boot-2059821_960_720.png' },
  ];

  return (
    <div className="skills-panel">
      {skills.map((skill) => (
        <SkillItem key={skill.name} skill={skill} />
      ))}
    </div>
  );
};

export default Skills;
