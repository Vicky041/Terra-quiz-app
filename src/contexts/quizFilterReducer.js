import { createContext } from "react";

export const QuizFilterContext = createContext();

export const initialQuizFilterState = {
  selectedSubject: null,
  selectedSubsubject: null,
  selectedLevel: null,
};

export const quizFilterReducer = (state, action) => {
  switch (action.type) {
    case "SET_SUBJECT":
      return {
        selectedSubject: action.payload,
        selectedSubsubject: null,
        selectedLevel: null,
      };
    case "SET_SUBSUBJECT":
      return {
        ...state,
        selectedSubsubject: action.payload,
        selectedLevel: null,
      };
    case "SET_LEVEL":
      return { ...state, selectedLevel: action.payload };
    case "RESET":
      return initialQuizFilterState;
    default:
      return state;
  }
};
