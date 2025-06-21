import PropTypes from "prop-types";
import "../styles/AnswerReview.css";

const AnswerReview = ({ answers }) => {
  return (
    <div className="answer-review">
      <h2>Answer Review</h2>
      {answers.map((item, index) => (
        <div key={index} className="review-card">
          <p><strong>Q{index + 1}:</strong> {item.question}</p>
          <p>
            <span className={item.selected === item.correct ? "correct" : "wrong"}>
              Your Answer: {item.selected || "No answer selected"}
            </span>
          </p>
          <p>Correct Answer: <strong>{item.correct}</strong></p>
        </div>
      ))}
    </div>
  );
};

AnswerReview.propTypes = {
  answers: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      correct: PropTypes.string.isRequired,
      selected: PropTypes.string,
    })
  ).isRequired,
};

export default AnswerReview;
