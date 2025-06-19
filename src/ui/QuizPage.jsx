import Quiz from "../components/Quiz";
import QuizProvider from "../contexts/QuizContext";
import TimerDisplay from "../components/TimerDisplay";
import TimerProvider from "../contexts/TimerContext";

const QuizPage = () => {
  return (
    <TimerProvider>
      <QuizProvider>
        <div className="quiz-page-container">
          <TimerDisplay />
          <Quiz />
        </div>
      </QuizProvider>
    </TimerProvider>
  );
};

export default QuizPage;
