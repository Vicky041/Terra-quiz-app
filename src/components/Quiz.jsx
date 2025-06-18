import { useEffect } from "react";
import { useQuiz } from "../hooks/useQuiz";
import { useTimer } from "../hooks/useTimer";
import QuestionCard from "./QuestionCard";
import ResultPanel from "./ResultPanel";
import "../styles/QuizPage.css"

const Quiz = () => {
  const {
    questions,
    currentIndex,
    score,
    showResult,
    selectedAnswer,
    error,
    dispatch,
  } = useQuiz();

  const { isTimeUp } = useTimer();

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

  const resetQuiz = () => {
    dispatch({ type: "RESET_QUIZ", payload: questions });
  };

  if (error) return <p className="error">{error}</p>;
  if (!questions.length) return <p>Loading questions...</p>;
  if (showResult) {
    return (
      <ResultPanel
        score={score}
        total={questions.length}
        onRestart={resetQuiz}
      />
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
        Next
      </button>
    </div>
  );
};

export default Quiz;
