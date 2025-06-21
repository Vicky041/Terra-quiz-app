import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "../styles/ResultPanel.css";
import Button from "./Button";

const ResultPanel = ({ score, total, onRestart, onViewAnswers, subject }) => {
  const navigate = useNavigate();

  const handleClose = () => {
    onRestart();
    navigate("/dashboard");
  };

  return (
    <div className="result-panel">
      <button className="close-button" onClick={handleClose}>
        &times;
      </button>
      <div className="flex-col">
        <h2 className="text-lg">Congratulations</h2>
        <span>Category: {subject}</span>
      </div>
      <div className="flex-col">
        <p>You answered:</p>
        <div className="text-lg">
          {score} / {total}
        </div>
        <p>Questions correct</p>
      </div>

      <div className="buttons">
        <Button onClick={onViewAnswers}>View Answers</Button>
        <Button onClick={onRestart} secondary>
          Play Again
        </Button>
      </div>

      <div className="share-button-container">
        <Button primary>Share Result</Button>
      </div>
    </div>
  );
};

ResultPanel.propTypes = {
  score: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  onRestart: PropTypes.func.isRequired,
  onViewAnswers: PropTypes.func,
  subject: PropTypes.string,
};

export default ResultPanel;
