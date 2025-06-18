import React from 'react'

const Quiz = () => {
  return (
    <section className="quiz">
      <p>Science Quiz</p>
      <div>Timer goes here...</div>
      <div className="quiz__question">
        <p>What is the chemical symbol for water?</p>
        <ul>
          <li>H2O</li>
          <li>CO2</li>
          <li>NaCl</li>
          <li>O2</li>
        </ul>
        <button className="quiz__button">Next</button>
      </div>
    </section>
  )
}

export default Quiz