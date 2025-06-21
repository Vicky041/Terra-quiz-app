import { useEffect, useState } from "react";
import { useQuiz } from "../hooks/useQuiz";
import { useQuizFilter } from "../hooks/useQuizFilter";
import { useTimer } from "../hooks/useTimer";
import { useNavigate } from "react-router-dom";

import QuestionCard from "../components/QuestionCard";
import ResultPanel from "../components/ResultPanel";
import AnswerReview from "../components/AnswerReview";
import Button from "../components/Button";
import ProgressBar from "../components/ProgressBar";

import "../styles/QuizPage.css";

import { getRandomQuestions } from "../utils/getRandomQuestions";

const Quiz = () => {
  const navigate = useNavigate();

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

  const [showReview, setShowReview] = useState(false);

  const { selectedLevel, selectedSubject } = useQuizFilter();

  const { subject } = selectedSubject || {};

  const { isTimeUp, resetTimer, pauseTimer, startTimer } = useTimer();

  useEffect(() => {
    if (isTimeUp && !showResult) {
      dispatch({ type: "SUBMIT_QUIZ" });
      pauseTimer();
    }
  }, [isTimeUp, showResult, dispatch, pauseTimer]);

  useEffect(() => {
    if (showResult) {
      pauseTimer();
    }
  }, [showResult, pauseTimer]);

  useEffect(() => {
    if (questions.length === 0 && selectedLevel?.questions?.length > 0) {
      const random = getRandomQuestions(selectedLevel.questions, 10);
      dispatch({ type: "LOAD_QUESTIONS", payload: random });

      resetTimer();
      startTimer();
    }
  }, [questions.length, selectedLevel, dispatch, resetTimer, startTimer]);

  const handleAnswer = (answer) => {
    dispatch({ type: "ANSWER_QUESTION", payload: answer });
  };

  const nextQuestion = () => {
    if (currentIndex + 1 === questions.length) {
      dispatch({ type: "SUBMIT_QUIZ" });
      pauseTimer();
    } else {
      dispatch({ type: "NEXT_QUESTION" });
    }
  };

  const restartQuiz = () => {
    navigate("/dashboard");
    dispatch({ type: "RESTART_QUIZ" });
    resetTimer();
    startTimer();
  };

  const handleAnswerReview = () => {
    console.log("clicked review");
    setShowReview(true);
  };

  if (error) {
    return (
      <div className="error">
        <h2>Something went wrong.</h2>
        <p>{error.message || "Unknown error occurred."}</p>
      </div>
    );
  }

  if (!questions.length) return <p>Loading questions...</p>;

  if (showResult) {
    const result = latestResult || {
      score,
      total: questions.length,
    };

    return (
      <div className="quiz-container">
        <div>
          {showReview ? (
            <AnswerReview
              answers={questions.map((q) => ({
                question: q.question,
                correct: q.answer,
                selected: q.selected,
              }))}
            />
          ) : (
            <ResultPanel
              score={result.score}
              total={result.total}
              onRestart={restartQuiz}
              onViewAnswers={handleAnswerReview}
              subject={subject}
            />
          )}
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];

  return (
    <div className="quiz-container">
      <div>
        <QuestionCard
          subject={subject}
          question={currentQuestion.question}
          options={currentQuestion.options}
          currentIndex={currentIndex}
          handleAnswer={handleAnswer}
          selectedAnswer={selectedAnswer}
        />
        <div className="question-navigation">
          {currentIndex > 0 && (
            <Button
              onClick={() => dispatch({ type: "PREVIOUS_QUESTION" })}
              secondary
            >
              Previous
            </Button>
          )}

          <Button
            onClick={nextQuestion}
            disabled={!selectedAnswer}
            primary={currentIndex + 1 !== questions.length}
            submit={currentIndex + 1 === questions.length}
          >
            {currentIndex + 1 === questions.length ? "Submit" : "Next"}
          </Button>
        </div>
        <ProgressBar current={currentIndex} total={questions.length} />
      </div>
    </div>
  );
};

export default Quiz;
