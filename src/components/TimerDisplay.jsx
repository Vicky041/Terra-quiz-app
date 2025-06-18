import { useTimer } from '../hooks/useTimer';
import { formatTime } from '../utils/formatTime';
import '../styles/TimerDisplay.css';

const TimerDisplay = () => {
  const { timeLeft } = useTimer();
  const timeClass = timeLeft <= 30 ? 'timer-text low-time' : 'timer-text';

  return (
    <div className="timer-wrapper">
      <div className={timeClass}>Time Left: {formatTime(timeLeft)}</div>
    </div>
  );
};

export default TimerDisplay;