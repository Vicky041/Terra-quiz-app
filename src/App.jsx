import Dashboard from "./components/Dashboard"
import ErrorBoundary from "./components/ErrorBoundary"
import QuizPage from "./ui/QuizPage"


function App() {

  return (
    <ErrorBoundary>
      <div className="app-container">
        <Dashboard />
      </div>
    </ErrorBoundary>
  )
}

export default App
