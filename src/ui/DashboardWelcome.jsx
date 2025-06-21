import React from 'react'
import "../styles/DashboardWelcome.css"
import User from "../assets/man.png"
import Art from "../assets/Art.png"
import Science from "../assets/dna.png"
import Commercial from "../assets/Commercial2.png"
import General from "../assets/interface-searching-01-8.png"



const DashboardWelcome = () => {
  return (
    <>
    <div className="container">
      <div className="welcomesection">
        <div className="welcomeText">
          <img src={User} alt="Science" />
          <h1>Welcome, Natalie Dave</h1>
        </div>
        <div className="cards">
          <div className="card arts">
            <img src={Art} alt="Arts" />
            <h2>Arts</h2>
            <p>Explore quizzes on Art history, Famous painter and creative movement</p>
            <button>Take Quiz</button>
          </div>
          <div className="card science">
            <img src={Science} alt="Science" />
            <h2>Science</h2>
            <p>Challenge your knowledge in physics, chemistry, biology, and more</p>
            <button>Take Quiz</button>
          </div>
          <div className="card commercial">
            <img src={Commercial} alt="Commercial" />
            <h2>Commercial</h2>
            <p>Test your skills in business, economics, finance, and marketing</p>
            <button>Take Quiz</button>
          </div>
          <div className="card general">
            <img src={General} alt="General Studies" />
            <h2>General Studies</h2>
            <p>Dive into global politics, international relations, and world events</p>
            <button>Take Quiz</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default DashboardWelcome