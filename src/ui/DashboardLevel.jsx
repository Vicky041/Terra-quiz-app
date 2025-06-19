import React from "react";
import '../styles/DashboardLevel.css'

const Dashboardlevel = () => {
  return (
    <>
      <div className="container">
        <div className="sectionTitle">
          <h1>Choose your difficulty level to start the quiz</h1>
        </div>
        <div className="cards">
          <div className="card easy">
            <h2>Easy</h2>
            <p>Basic questions to get you started, perfect for beginners.</p>
            <button>Take Quiz</button>
          </div>
          <div className="card medium">
            <h2>Medium</h2>
            <p>
              A balance challenge, test your skills with moderate difficulty.
            </p>
            <button>Take Quiz</button>
          </div>
          <div className="card hard">
            <h2>Hard</h2>
            <p>Only for the experts. Get ready for tough questions!</p>
            <button>Take Quiz</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboardlevel;
