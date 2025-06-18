import ErrorBoundary from "./components/ErrorBoundary"
import QuizPage from "./ui/QuizPage"


function App() {

  return (
    <ErrorBoundary>
      <div className="app-container">
        <QuizPage />
      </div>
    </ErrorBoundary>
  )
}

export default App
