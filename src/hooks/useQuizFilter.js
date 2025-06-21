import { useContext } from "react";
import { QuizFilterContext } from "../contexts/quizFilterReducer";

export const useQuizFilter = () => {
  const { state, dispatch } = useContext(QuizFilterContext);

  return {
    ...state,
    dispatch,
  };
};
