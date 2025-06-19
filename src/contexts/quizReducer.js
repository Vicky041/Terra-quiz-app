import { createContext } from "react";

export const QuizContext = createContext();

export const initialQuizState = {
  questions: [],
  currentIndex: 0,
  score: 0,
  showResult: false,
  selectedAnswer: null,
  error: null,
  history: [],
  userAnswers: [],
  latestResult: null,
};

export const quizReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_QUESTIONS":
      return { ...state, questions: action.payload };
    case "ANSWER_QUESTION": {
      const currentQuestion = state.questions[state.currentIndex];
      const isCorrect = action.payload === currentQuestion.answer;

      const updatedUserAnswers = [...state.userAnswers];
      updatedUserAnswers[state.currentIndex] = {
        question: currentQuestion.question,
        selectedAnswer: action.payload,
        correctAnswer: currentQuestion.answer,
        isCorrect,
      };

      return {
        ...state,
        selectedAnswer: action.payload,
        score: isCorrect ? state.score + 1 : state.score,
        userAnswers: updatedUserAnswers,
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
    case "SUBMIT_QUIZ": {
      const attempt = {
        id: Date.now(),
        score: state.score,
        total: state.questions.length,
        date: new Date().toLocaleString(),
        answers: state.userAnswers,
      };
      return {
        ...state,
        showResult: true,
        selectedAnswer: null,
        history: [...(state.history || []), attempt],
        latestResult: attempt,
      };
    }
    case "RESTART_QUIZ":
      return {
        ...state,
        currentIndex: 0,
        score: 0,
        showResult: false,
        selectedAnswer: null,
        error: null,
        userAnswers: [],
        latestResult: null,
      };
    case "SHOW_RESULT":
      return { ...state, showResult: Boolean(action.payload) };
    case "SET_USER_ANSWERS":
      return { ...state, userAnswers: action.payload };
    case "SET_LATEST_RESULT":
      return { ...state, latestResult: action.payload };
    case "CLEAR_HISTORY":
      return {
        ...state,
        history: [],
      };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
