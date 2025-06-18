import { useQuiz } from "../hooks/useQuiz";
import "../styles/QuizPage.css"

const HistoryPanel = () => {
  const { history, setShowResult, setUserAnswers, setLatestResult, clearHistory } = useQuiz();

  return (
    <div className="history-section">
      <h3>Past Results</h3>
      <ul className="history-list">
        {history.map((item, index) => (
          <li key={item.id} className="history-item">
            <strong>Attempt {index + 1}</strong>: {item.score}/{item.total} on {item.date}
            <button
              className="view-button"
              onClick={() => {
                setShowResult(true);
                setUserAnswers(item.answers);
                setLatestResult(item);
              }}
            >
              View
            </button>
          </li>
        ))}
      </ul>
      <button className="clear-history-button" onClick={clearHistory}>
        Clear History
      </button>
    </div>
  );
};

export default HistoryPanel;