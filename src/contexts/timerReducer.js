import { createContext } from "react";

export const TimerContext = createContext();

export const initialTimerState = {
  timeLeft: 60,
  intervalId: null,
  isTimeUp: false,
};

export const timerReducer = (state, action) => {
  switch (action.type) {
    case "DECREMENT_TIME":
      if (state.timeLeft <= 1) {
        return {
          ...state,
          timeLeft: 0,
          isTimeUp: true,
        };
      }
      return { ...state, timeLeft: state.timeLeft - 1 };
    case "RESET_TIMER":
      if (state.intervalId) clearInterval(state.intervalId);
      return initialTimerState;
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
      };
    default:
      return state;
  }
};
