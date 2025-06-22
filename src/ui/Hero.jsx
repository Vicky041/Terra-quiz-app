import AboutLogo from "../assets/quizzy2.png";
import image1 from "../assets/Hero-image.png";
import "../styles/Hero.css";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    navigate("/login");
  }

  return (
    <section className="hero-container row">
      <div className="hero-content">
        <h1>
          Master Your <br />
          Knowledge <br />
          With Quick Quizzes
        </h1>
        <h3>Fun, Fast, and Free!</h3>

        <p>
          Challenge yourself, learn new things, and track your progress with our
          engaging quizzes across various topics!
        </p>
        <Button secondary large onClick={handleStartQuiz}>
          Take a Quiz
        </Button>
      </div>

      <div className="hero-image">
        <img src={image1} alt="hero" />
      </div>

      <div className="about-quizy">
        <h2>
          <span>About</span>
          <span>
            <img src={AboutLogo} alt="about-quizy" className="quizy-image" />
          </span>
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
