import PropTypes from "prop-types";
import "../styles/QuestionCard.css";
import TimerDisplay from "./TimerDisplay";

const QuestionCard = ({
  question,
  options,
  handleAnswer,
  selectedAnswer,
  subject,
}) => {
  return (
    <div className="question-card">
      <span>{subject} Quiz</span>
      <TimerDisplay />
      <h3>{question}</h3>
      <ul>
        {options.map((option, index) => (
          <li
            key={index}
            className={`option ${selectedAnswer === option ? "selected" : ""}`}
            onClick={() => handleAnswer(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

QuestionCard.propTypes = {
  question: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  handleAnswer: PropTypes.func.isRequired,
  selectedAnswer: PropTypes.string,
  subject: PropTypes.string.isRequired,
};

export default QuestionCard;
