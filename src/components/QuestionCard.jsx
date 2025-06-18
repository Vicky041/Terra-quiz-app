import PropTypes from 'prop-types';
import "../styles/QuestionCard.css"

const QuestionCard = ({ question, options, currentIndex, handleAnswer, selectedAnswer }) => {
  return (
    <div className="question-card">
      <h2>Question {currentIndex + 1}</h2>
      <p>{question}</p>
      <ul>
        {options.map((option, index) => (
          <li
            key={index}
            className={`option ${selectedAnswer === option ? 'selected' : ''}`}
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
  currentIndex: PropTypes.number.isRequired,
  handleAnswer: PropTypes.func.isRequired,
  selectedAnswer: PropTypes.string
};

export default QuestionCard;
