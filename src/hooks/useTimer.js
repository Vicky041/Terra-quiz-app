import { useContext } from "react";
import { TimerContext } from "../contexts/timerReducer";

export const useTimer = () => {
    const { state, dispatch } = useContext(TimerContext);

  const resetTimer = () => {
    dispatch({ type: "RESET_TIMER" });
  };

  return {
    ...state,
    dispatch,
    resetTimer,
  };
}
