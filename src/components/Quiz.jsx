import { useEffect } from "react";
import { useQuiz } from "../hooks/useQuiz";
import { useTimer } from "../hooks/useTimer";
import QuestionCard from "./QuestionCard";
import ResultPanel from "./ResultPanel";
import HistoryPanel from "./HistoryPanel";
import "../styles/QuizPage.css";

const Quiz = () => {
  const {
    questions,
    currentIndex,
    score,
    showResult,
    selectedAnswer,
    error,
    dispatch,
    latestResult,
  } = useQuiz();

  const { isTimeUp, resetTimer } = useTimer();

  useEffect(() => {
    if (isTimeUp && !showResult) {
      dispatch({ type: "SUBMIT_QUIZ" });
    }
  }, [isTimeUp, showResult, dispatch]);

  const handleAnswer = (answer) => {
    dispatch({ type: "ANSWER_QUESTION", payload: answer });
  };

  const nextQuestion = () => {
    dispatch({ type: "NEXT_QUESTION" });
  };

  const restartQuiz = () => {
    dispatch({ type: "RESTART_QUIZ" });
    resetTimer();
  };

  if (error) {
    console.error("Quiz error:", error);
    return (
      <div className="error">
        <h2>Something went wrong.</h2>
        <p>{error.message || "Unknown error occurred."}</p>
      </div>
    );
  }
  if (!questions.length) return <p>Loading questions...</p>;

  if (showResult) {
    const result = latestResult
      ? {
          score: latestResult.score,
          total: latestResult.total,
        }
      : {
          score,
          total: questions.length,
        };

    return (
      <div className="quiz-wrapper">
        <h2>{latestResult ? "Past Result" : "Your Result"}</h2>
        <ResultPanel
          score={result.score}
          total={result.total}
          onRestart={restartQuiz}
        />
        <HistoryPanel />
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];

  return (
    <div className="quiz-wrapper">
      <QuestionCard
        question={currentQuestion.question}
        options={currentQuestion.options}
        currentIndex={currentIndex}
        handleAnswer={handleAnswer}
        selectedAnswer={selectedAnswer}
      />
      <button onClick={nextQuestion} disabled={!selectedAnswer}>
        {currentIndex + 1 === questions.length ? "Submit" : "Next"}
      </button>
    </div>
  );
};

export default Quiz;
