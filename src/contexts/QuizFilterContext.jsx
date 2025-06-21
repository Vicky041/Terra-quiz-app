import { useReducer } from "react";
import { quizFilterReducer, initialQuizFilterState, QuizFilterContext } from "./quizFilterReducer";

export const QuizFilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(quizFilterReducer, initialQuizFilterState);
  return (
    <QuizFilterContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizFilterContext.Provider>
  );
};
