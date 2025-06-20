import React from "react";
import Button  from "../components/TakeQuizButton";
import AboutLogo from "../assets/quizzy2.png"
import image1 from "../assets/Hero-image.png"
import "../styles/Hero.css"



const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h1>Master Your <br/>Knowledge <br/>With Quick Quizzes</h1>
        <h3>Fun, Fast, and Free!</h3>
        
        <p>
          Challenge yourself, learn new things, and track your progress<br/> with our
          engaging quizzes across various topics!
        </p>
        <div className="hero-btn">
          <Button
            type="button"
            color="#fff"
            bgColor="#442d7c"
            padding="1rem 1.5rem"
            fs=".9rem"
            wd="22%"
          >
            Take A Quiz
          </Button>
          
        </div>
      </div>
      <div className="hero-image">
        <img src={image1} alt="hero" />
      </div>

      <div className="about-quizy">
        <h2>
          About
          <img src={AboutLogo} alt="about-quizy" className="quizy-image" />
        </h2>
        <p>
          Quizy is an interactive quiz app designed to engage your mind, boost
          your knowledge, and make learning fun. Whether you’re looking to test
          your skills or challenge friends, Quizy provides a seamless, enjoyable
          experience. Choose from a variety of topics, track your progress and
          compete with others on the leaderboard.
        </p>
      </div>

    
    </section>
  );
};

export default Hero;