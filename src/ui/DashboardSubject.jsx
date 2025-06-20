import React from 'react';
import '../styles/DashboardSubject.css';

const subjectData = [
  {
    id: 1,
    title: 'Physics',
    description: 'Challenge your knowledge in physics.',
  },
  {
    id: 2,
    title: 'Chemistry',
    description: 'Challenge your knowledge in chemistry.',
  },
  {
    id: 3,
    title: 'Biology',
    description: 'Challenge your knowledge in biology.',
  },
];

const DashboardSubject = () => {
  return (
    <div className="subject-container">
      <div className="subject-header">
        <h1>Please pick a Science subject</h1>
      </div>

      <div className="subject-cards">
        {subjectData.map((subject) => (
          <div key={subject.id} className="subject-card">
            <h2>{subject.title}</h2>
            <p>{subject.description}</p>
            <button>Take Quiz</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardSubject;

