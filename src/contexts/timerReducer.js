import { createContext } from "react";

export const TimerContext = createContext();

export const initialTimerState = {
  timeLeft: 60,
  intervalId: null,
  isTimeUp: false,
  isRunning: false,
};

export const timerReducer = (state, action) => {
  switch (action.type) {
    case "DECREMENT_TIME":
      if (state.timeLeft <= 1) {
        return {
          ...state,
          timeLeft: 0,
          isTimeUp: true,
          isRunning: false,
        };
      }
      return { ...state, timeLeft: state.timeLeft - 1 };
    case "RESET_TIMER":
      if (state.intervalId) clearInterval(state.intervalId);
      return initialTimerState;
    case "PAUSE_TIMER":
      if (state.intervalId) clearInterval(state.intervalId);
      return { ...state, isRunning: false, intervalId: null };
    case "RESUME_TIMER":
      return { ...state, isRunning: true };
    case "SET_INTERVAL":
      return { ...state, intervalId: action.payload };
    case "CLEAR_INTERVAL":
      if (state.intervalId) clearInterval(state.intervalId);
      return { ...state, intervalId: null };
    case "TIME_UP":
      return {
        ...state,
        timeLeft: 0,
        isTimeUp: true,
        isRunning: false,
      };
    default:
      return state;
  }
};
