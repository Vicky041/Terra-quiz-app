import ErrorBoundary from "./components/ErrorBoundary"
import NavBar from "./ui/NavBar"
import QuizPage from "./ui/QuizPage"


function App() {

  return (
    <ErrorBoundary>
      <NavBar/>
      <div className="app-container">
        <QuizPage />
      </div>
    </ErrorBoundary>
  )
}

export default App
