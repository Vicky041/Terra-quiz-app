import { useTimer } from '../hooks/useTimer';
import { formatTime } from '../utils/formatTime';
import '../styles/TimerDisplay.css';

const TimerDisplay = () => {
  const { timeLeft } = useTimer();
  const timeClass = timeLeft <= 10 ? 'low-time' : '';

  return (
    <div className="timer-wrapper">
      <div className={`timer-text ${timeClass}`}>Time Left: {formatTime(timeLeft)}</div>
    </div>
  );
};

export default TimerDisplay;