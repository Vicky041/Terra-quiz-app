import Login from "./auth/login";
import SignUp from "./auth/signup";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import QuizPage from "./ui/QuizPage";
import RootLayout from "./layout/RootLayout";
import Home from "./ui/Home";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="quiz" element={<QuizPage />} />
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  );
}