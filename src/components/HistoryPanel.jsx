import { useCallback } from "react";
import { useQuiz } from "../hooks/useQuiz";
import "../styles/QuizPage.css";

const HistoryPanel = () => {
  const { history, dispatch } = useQuiz();

  const handleView = useCallback((item) => {
    console.log("Viewing:", item);
    dispatch({ type: "SHOW_RESULT", payload: true });
    dispatch({ type: "SET_USER_ANSWERS", payload: item.answers });
    dispatch({ type: "SET_LATEST_RESULT", payload: item });
  }, [dispatch]);

    const handleClear = () => {
    const confirmClear = window.confirm("Are you sure you want to clear all history?");
    if (confirmClear) {
      dispatch({ type: "CLEAR_HISTORY" });
    }
  };

  if (!history.length) {
    return (
      <div className="history-section">
        <h3>Past Results</h3>
        <p>No quiz attempts yet.</p>
      </div>
    );
  }

  return (
    <div className="history-section">
      <h3>Past Results</h3>
      <ul className="history-list">
        {history.map((item, index) => (
          <li key={item.id} className="history-item">
            <strong>Attempt {index + 1}</strong>: {item.score}/{item.total} on{" "}
            {item.date}
            <button className="view-button" onClick={() => handleView(item)}>
              View
            </button>
          </li>
        ))}
      </ul>
      <button
        className="clear-history-button"
        onClick={handleClear}
        aria-label="Clear quiz history"
      >
        Clear History
      </button>
    </div>
  );
};

export default HistoryPanel;
