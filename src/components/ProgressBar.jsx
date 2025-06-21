import "../styles/ProgressBar.css";

const ProgressBar = ({ current, total }) => {
  const percentage = ((current + 1) / total) * 100;

  return (
    <div className="progress-wrapper">
      <div className="progress-container-with-label">
        <div className="progress-container">
          <div className="progress-bar" style={{ width: `${percentage}%` }} />
        </div>
        <div className="progress-label">
          {current + 1}/{total}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
