// src/hooks/useTimer.js
import { useContext } from "react";
import { TimerContext } from "../contexts/timerReducer";

export const useTimer = () => useContext(TimerContext);
