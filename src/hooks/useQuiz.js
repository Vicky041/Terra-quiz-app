import { useContext } from "react";
import { QuizContext } from "../contexts/quizReducer";

export const useQuiz = () => {
  const { state, dispatch } = useContext(QuizContext);

  return {
    ...state,
    dispatch,
  };
};
