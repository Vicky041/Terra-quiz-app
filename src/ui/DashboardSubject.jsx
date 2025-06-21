import React from 'react'
import "../styles/DashboardSubject.css"

const DashboardSubject = () => {
  return (
      <>
      <div className="container">
          <div className="sectionText">
            <h1>Please pick a Science subject</h1>
          </div>
          <div className="cards">
            <div className="card">
              <h2>Physics</h2>
              <p>Challenge your knowledge in physics.</p>
              <button>Take Quiz</button>
            </div>
            <div className="card">
              <h2>Chemistry</h2>
              <p>Challenge your knowledge in  chemistry.</p>
              <button>Take Quiz</button>
            </div>
            <div className="card">
              <h2>Biology</h2>
              <p>Challenge your knowledge in biology.</p>
              <button>Take Quiz</button>
            </div>
          </div>
      </div>
      </>
    )
}

export default DashboardSubject