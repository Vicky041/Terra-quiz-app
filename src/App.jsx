import Login from "./auth/login";
import SignUp from "./auth/signup";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard"
import QuizPage from "./ui/QuizPage"
import NavBar from "./ui/NavBar";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    <>
      <NavBar />
      <div className="app-container">
        <Dashboard />
        <QuizPage />
      </div>
    </>
  );
}
