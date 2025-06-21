import React from 'react';
import '../styles/DashboardWelcome.css';
import Art from '../assets/Art.png';
import Science from '../assets/dna.png';
import Commercial from '../assets/Commercial2.png';
import General from '../assets/interface-searching-01-8.png';
import User from '../assets/man.png';

const cardData = [
  {
    id: 1,
    title: 'Arts',
    description: 'Explore quizzes on Art history, famous painters, and creative movements.',
    image: Art,
    className: 'arts',
  },
  {
    id: 2,
    title: 'Science',
    description: 'Challenge your knowledge in physics, chemistry, and biology.',
    image: Science,
    className: 'science',
  },
  {
    id: 3,
    title: 'Commercial',
    description: 'Test your skills in business, economics, finance, and marketing.',
    image: Commercial,
    className: 'commercial',
  },
  {
    id: 4,
    title: 'General Studies',
    description: 'Dive into global politics, international relations, and world events.',
    image: General,
    className: 'general',
  },
];

const DashboardWelcome = () => {
  return (
    <div className="container">
      <div className="welcomeText">
        <img src={User} alt="User" />
        <h1>Welcome, Natalie Dave</h1>
      </div>

      <div className="cards">
        {cardData.map((card) => (
          <div key={card.id} className={`card ${card.className}`}>
            <img src={card.image} alt={card.title} />
            <h2>{card.title}</h2>
            <p>{card.description}</p>
            <button>Take Quiz</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardWelcome;
