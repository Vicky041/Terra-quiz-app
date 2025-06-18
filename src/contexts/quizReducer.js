// src/contexts/quizReducer.js
import { createContext } from "react";

export const QuizContext = createContext();

export const initialQuizState = {
  questions: [],
  currentIndex: 0,
  score: 0,
  showResult: false,
  selectedAnswer: null,
  error: null,
};

export const quizReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_QUESTIONS":
      return { ...state, questions: action.payload };
    case "ANSWER_QUESTION": {
      const isCorrect =
        action.payload === state.questions[state.currentIndex].answer;
      return {
        ...state,
        selectedAnswer: action.payload,
        score: isCorrect ? state.score + 1 : state.score,
      };
    }
    case "NEXT_QUESTION": {
      const isLast = state.currentIndex + 1 === state.questions.length;
      return {
        ...state,
        currentIndex: isLast ? state.currentIndex : state.currentIndex + 1,
        selectedAnswer: null,
        showResult: isLast,
      };
    }
    case "RESET_QUIZ":
      return { ...initialQuizState, questions: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    case "SUBMIT_QUIZ":
      return {
        ...state,
        showResult: true,
        selectedAnswer: null,
      };
    default:
      return state;
  }
};
