import { useReducer } from "react";
import { quizReducer, initialQuizState, QuizContext } from "./quizReducer";

const QuizProvider = ({ children }) => {
  const [state, dispatch] = useReducer(quizReducer, initialQuizState);

  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};

export default QuizProvider;
