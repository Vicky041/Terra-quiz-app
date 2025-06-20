import Login from "./auth/login";
import SignUp from "./auth/signup";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import QuizPage from "./ui/QuizPage";
import RootLayout from "./layouts/RootLayout";
// import Home from "./ui/Home";
import Hero from "./ui/Hero";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Hero/>} />
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
