import React from 'react';
import '../styles/DashboardLevel.css';

const levelData = [
  {
    id: 1,
    title: 'Easy',
    description: 'Basic questions to get you started, perfect for beginners.',
    className: 'level-easy',
  },
  {
    id: 2,
    title: 'Medium',
    description: 'A balanced challenge. Test your skills with moderate difficulty.',
    className: 'level-medium',
  },
  {
    id: 3,
    title: 'Hard',
    description: 'Only for the experts. Get ready for tough questions!',
    className: 'level-hard',
  },
];

const DashboardLevel = () => {
  return (
    <div className="level-container">
      <div className="level-header">
        <h1>Choose your difficulty level to start the quiz</h1>
      </div>

      <div className="level-cards">
        {levelData.map((level) => (
          <div key={level.id} className={`level-card ${level.className}`}>
            <h2>{level.title}</h2>
            <p>{level.description}</p>
            <button>Take Quiz</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardLevel;
