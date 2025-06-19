import { useReducer, useEffect } from "react";
import { quizReducer, initialQuizState, QuizContext } from "./quizReducer";
import quizData from "../data/quiz.json";
import { getShuffledQuestions } from "../utils/quizUtils";

const QuizProvider = ({ children }) => {
  const [state, dispatch] = useReducer(quizReducer, initialQuizState);

  useEffect(() => {
    try {
      const selected = getShuffledQuestions(quizData, 10);
      dispatch({ type: "LOAD_QUESTIONS", payload: selected });
    } catch (err) {
      console.error(err)
      dispatch({ type: "SET_ERROR", payload: "Failed to load quiz data." });
    }
  }, []);

  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};

export default QuizProvider;
