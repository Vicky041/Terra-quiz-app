// src/contexts/timerReducer.js
import { createContext } from "react";

export const TimerContext = createContext();

export const initialTimerState = {
  timeLeft: 300,
  intervalId: null,
};

export const timerReducer = (state, action) => {
  switch (action.type) {
    case "DECREMENT_TIME":
      return { ...state, timeLeft: state.timeLeft - 1 };
    case "RESET_TIME":
      return { ...state, timeLeft: action.payload };
    case "SET_INTERVAL":
      return { ...state, intervalId: action.payload };
    case "CLEAR_INTERVAL":
      if (state.intervalId) clearInterval(state.intervalId);
      return { ...state, intervalId: null };
    case 'TIME_UP':
      return {
        ...state,
        timeLeft: 0,
        isTimeUp: true
      };
    default:
      return state;
  }
};
