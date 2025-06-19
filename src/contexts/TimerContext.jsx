import { useReducer, useEffect } from "react";
import { timerReducer, initialTimerState, TimerContext } from "./timerReducer";

const TimerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(timerReducer, initialTimerState);

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "DECREMENT_TIME" });
    }, 1000);

    dispatch({ type: "SET_INTERVAL", payload: id });

    return () => {
      clearInterval(id);
      dispatch({ type: "CLEAR_INTERVAL" });
    };
  }, []);

  useEffect(() => {
    if (state.timeLeft <= 0 && !state.isTimeUp) {
      dispatch({ type: "TIME_UP" });
    }
  }, [state.timeLeft, state.isTimeUp]);

  useEffect(() => {
    if (state.isTimeUp && state.intervalId) {
      clearInterval(state.intervalId);
      dispatch({ type: "CLEAR_INTERVAL" });
    }
  }, [state.isTimeUp, state.intervalId]);

  return (
    <TimerContext.Provider value={{ state, dispatch }}>
      {children}
    </TimerContext.Provider>
  );
};

export default TimerProvider;
