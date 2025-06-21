import "../styles/DashboardLevel.css";
import { useQuizFilter } from "../hooks/useQuizFilter";
import { useNavigate } from "react-router-dom";

const levelMeta = {
  Easy: {
    description: "Basic questions to get you started, perfect for beginners.",
    className: "level-easy",
  },
  Medium: {
    description:
      "A balanced challenge. Test your skills with moderate difficulty.",
    className: "level-medium",
  },
  Hard: {
    description: "Only for the experts. Get ready for tough questions!",
    className: "level-hard",
  },
};

const DashboardLevel = () => {
  const navigate = useNavigate();
  const { selectedSubsubject, dispatch } = useQuizFilter();

  if (!selectedSubsubject) {
    return (
      <div className="level-container">
        <h2>No subsubject selected.</h2>
        <p>Please go back and choose a subsubject first.</p>
      </div>
    );
  }

  const { difficulties = [], subsubject } = selectedSubsubject;

  const handleClick = (level) => {
    dispatch({ type: "SET_LEVEL", payload: level });
    setTimeout(() => navigate("/dashboard/quiz"), 0);
  };

  return (
    <div className="level-container">
      <div className="level-header">
        <h1>Choose a difficulty for {subsubject}</h1>
      </div>

      <div className="level-cards">
        {difficulties.map(({ level, questions }) => {
          const meta = levelMeta[level];
          if (!meta) return null;

          return (
            <div
              key={level}
              className={`level-card ${meta.className}`}
              onClick={() => handleClick({ level, questions })}
            >
              <h2>{level}</h2>
              <p>{meta.description}</p>
              <button>Take Quiz</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DashboardLevel;
