import "../styles/DashboardWelcome.css";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { useQuizFilter } from "../hooks/useQuizFilter";
import quizData from "../data/quiz.json";

import Art from "../assets/Art.png";
import Science from "../assets/dna.png";
import Commercial from "../assets/Commercial2.png";
import General from "../assets/interface-searching-01-8.png";
import User from "../assets/man.png";
import { useAuth } from "../hooks/useAuth";

const subjectImages = {
  Art,
  Science,
  Commercial,
  "General Studies": General,
};

const DashboardWelcome = () => {
  const navigate = useNavigate();
  const { dispatch } = useQuizFilter();

  const { user } = useAuth();

  const handleClick = useCallback(
    (subjectData) => {
      dispatch({ type: "SET_SUBJECT", payload: subjectData });
      navigate("/dashboard/subject");
    },
    [dispatch, navigate]
  );

  if (!user) {
    navigate("/login");
  }

  return (
    <div className="container">
      <div className="welcomeText">
        <img src={User} alt="User" />
        <h1>Welcome, {user.fullName}</h1>
      </div>

      <div className="cards">
        {quizData.map((subjectData, index) => (
          <div
            key={index}
            className={`card ${subjectData.subject}`}
            onClick={() => handleClick(subjectData)}
          >
            <h2>{subjectData.subject}</h2>
            <p>{subjectData.description}</p>
            {subjectImages[subjectData.subject] && (
              <img
                src={subjectImages[subjectData.subject]}
                alt={subjectData.subject}
              />
            )}
            <button>Take Quiz</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardWelcome;
