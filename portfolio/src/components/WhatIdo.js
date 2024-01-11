import React from 'react';
import './WhatIdo.css';

const WhatIdo = () => {

    const cards = [
        {
          title: 'Web Design',
          content: 'I believe that web design is an art form, and I strive to create websites that are not only functional but also visually stunning, leaving a lasting impression on those who experience them.',
        },
        {
          title: 'App Design & Develop',
          content: 'I am a passionate and creative app designer and developer with a proven track record of delivering high-quality, user-friendly apps. My expertise extends from conceptualizing and designing web applications to meticulously crafting each element of the UI, ensuring a seamless and intuitive user experience. ',
        },
        {
          title: 'UI/UX Design',
          content: ' I specialize in creating sophisticated digital experiences that seamlessly blend artistry with functionality. Leveraging a deep understanding of user behavior and employing cutting-edge technologies, I craft intuitive interfaces that prioritize user satisfaction.',
        },
      ];
    
  return (
    <div style={{backgroundColor: 'beige', maxWwidth: '100vw'}} id='whatIdo'>
        <div className="container" style={{height: '90vh', width: '100vw', }}>
      <center>
        <h1 style={{color:'#008080 '}}>What I Do</h1>
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

export default WhatIdo;
