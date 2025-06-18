import PropTypes from 'prop-types';
import "../styles/ResultPanel.css"

const ResultPanel = ({ score, total, onRestart }) => {
  return (
    <div className="result-panel">
      <h2>Quiz Complete</h2>
      <p>Your Score: {score} / {total}</p>
      <button onClick={onRestart}>Restart Quiz</button>
    </div>
  );
};

ResultPanel.propTypes = {
  score: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  onRestart: PropTypes.func.isRequired
};

export default ResultPanel;