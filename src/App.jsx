import Dashboard from "./components/Dashboard"
import QuizPage from "./ui/QuizPage"
import NavBar from "./ui/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="app-container">
        <Dashboard />
        <QuizPage />
      </div>
    </>
  );
}

export default App;
