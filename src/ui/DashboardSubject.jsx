import "../styles/DashboardSubject.css";
import { useQuizFilter } from "../hooks/useQuizFilter";
import { useNavigate } from "react-router-dom";

const DashboardSubject = () => {
  const navigate = useNavigate();
  const { selectedSubject, dispatch } = useQuizFilter();

  if (!selectedSubject) {
    return (
      <div className="subject-container">
        <h2>No subject selected.</h2>
        <p>Please go back and choose a subject first.</p>
      </div>
    );
  }

  const { subject, subsubjects = [] } = selectedSubject;

  const handleClick = (subsubject) => {
    dispatch({ type: "SET_SUBSUBJECT", payload: subsubject });
    navigate("/dashboard/level");
  };

  return (
    <div className="subject-container">
      <div className="subject-header">
        <h1>Please pick a {subject}</h1>
      </div>

      <div className="subject-cards">
        {subsubjects.map((sub, index) => (
          <div
            key={index}
            className="subject-card"
            onClick={() => handleClick(sub)}
          >
            <h3>{sub.subsubject}</h3>
            <p>Challenge your knowledge in {sub.subsubject}.</p>
            <button>Take Quiz</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardSubject;
