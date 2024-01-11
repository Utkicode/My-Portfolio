import React from 'react';

const Skills = () => {
  const cards = [
    {
      title: 'Front-End',
      content: ['HTML5', 'CSS3', 'Javascript', 'ReactJS', 'MUI'],
    },
    {
      title: 'Back-End',
      content: ['Java SE', 'Java EE', 'SpringBoot', 'NodeJs', 'ExpressJs'],
    },
    {
      title: 'Database/Cloud',
      content: ['MongoDB', 'Mysql', 'Docker', 'Git'],
    },
  ];

  const cardStyle = {
    backgroundColor: '#FFDB58',
    color: '#fff',
    transition: 'transform 0.3s',
  };

  const listItemStyle = {
    color: '#fff',
    width: '150px',
    transition: 'color 0.3s',
    cursor: 'pointer',
  };

  return (
    <div style={{ backgroundColor: '#F4F9F4', maxWidth: '100vw' }}>
      <div className="container" style={{ height: '90vh', width: '100vw' }}>
        <center>
          <h1>Skills</h1>
        </center>
        <main className="main_content">
          <div className="cards-container">
            {cards.map((card, index) => (
              <div
                className="card"
                key={index}
                style={{ ...cardStyle, ':hover': { transform: 'scale(1.05)' } }}
              >
                <h2 style={{ textAlign: 'center', color: '#332941' }}>{card.title}</h2>
                <ul style={{ textAlign: 'left', paddingLeft: '20px', paddingTop: '15px' }}>
                  {card.content.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      style={listItemStyle}
                      onMouseOver={(e) => (e.target.style.color = 'brown')}
                      onMouseOut={(e) => (e.target.style.color = '#0F1035')}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Skills;
