import { useCallback, useContext } from "react";
import { TimerContext } from "../contexts/timerReducer";

export const useTimer = () => {
  const { state, dispatch } = useContext(TimerContext);

  const resetTimer = useCallback(() => {
    dispatch({ type: "RESET_TIMER" });
  }, [dispatch]);

  const pauseTimer = useCallback(() => {
    dispatch({ type: "PAUSE_TIMER" });
  }, [dispatch]);

  const startTimer = useCallback(() => {
    dispatch({ type: "RESUME_TIMER" });
  }, [dispatch]);

  return {
    ...state,
    dispatch,
    resetTimer,
    pauseTimer,
    startTimer,
  };
};
