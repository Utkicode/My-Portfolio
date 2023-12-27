import React from 'react'

const Skills = () => {
  
  const cards = [
    {
      title: 'Front-End',
      content: 'HTML5, CSS3, Javascript, ReactJS, MUI',
    },
    {
      title: 'Back-End',
      content: 'Java SE, Java EE, SpringBoot, NodeJs, ExpressJs',
    },
    {
      title: 'Database/Cloud',
      content: 'MongoDB, Mysql, Docker, Git, ',
    },
  ];

return (
<div style={{backgroundColor: '#F4F9F4', maxWwidth: '100vw'}}>
    <div className="container" style={{height: '90vh', width: '100vw', }}>
  <center>
    <h1>Skills</h1>
  </center>
  <main className="main_content">
  <div className="cards-container">
  {cards.map((card, index) => (
    <div className="card" key={index}>
      <h2 >{card.title}</h2>
      <p>{card.content}</p>
    </div>
  ))}
</div>
  </main>
</div>
</div>
);
};

export default Skills