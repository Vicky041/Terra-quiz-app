// src/contexts/TimerContext.jsx
import { useReducer, useEffect } from "react";
import { TimerContext, timerReducer, initialTimerState } from "./timerReducer";

const TimerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(timerReducer, initialTimerState);

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "DECREMENT_TIME" });
    }, 1000);
    dispatch({ type: "SET_INTERVAL", payload: id });

    return () => dispatch({ type: "CLEAR_INTERVAL" });
  }, []);

  useEffect(() => {
    if (state.timeLeft <= 0 && !state.isTimeUp) {
      dispatch({ type: "TIME_UP" });
    }
  }, [state.timeLeft, state.isTimeUp]);

  return (
    <TimerContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TimerContext.Provider>
  );
};

export default TimerProvider;
