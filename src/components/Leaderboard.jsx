import { useAuth } from "../hooks/useAuth";
import { useQuiz } from "../hooks/useQuiz";
import "../styles/Leaderboard.css";

const Leaderboard = () => {
  const { history } = useQuiz();
  const {user} = useAuth();

  const userName = user?.fullName || "Guest";

  if (!history || history.length === 0) {
    return <p className="leaderboard-error">Leaderboard data not available.</p>;
  }

  const sortedHistory = history.sort((a, b) => {
    const aPercent = a.score / a.total;
    const bPercent = b.score / b.total;
    return bPercent - aPercent;
  });

  return (
    <div className="leaderboard">
      <h2>🏆 Leaderboard</h2>
      {sortedHistory.length === 0 ? (
        <p>No quiz attempts recorded yet.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>User</th>
              <th>Score</th>
              <th>Total</th>
              <th>Percentage</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {sortedHistory.map((entry, index) => (
              <tr key={entry.id}>
                <td>#{index + 1}</td>
                <td>{userName}</td>
                <td>{entry.score}</td>
                <td>{entry.total}</td>
                <td>{((entry.score / entry.total) * 100).toFixed(1)}%</td>
                <td>{entry.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Leaderboard;
