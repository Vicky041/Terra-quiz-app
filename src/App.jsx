import Login from "./ui/LoginPage";
import SignUp from "./ui/SignupPage";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Quiz from "./ui/Quiz";
import Home from "./ui/Home";
import DashboardWelcome from "./ui/DashboardWelcome";
import DashboardSubject from "./ui/DashboardSubject";
import DashboardLevel from "./ui/DashboardLevel";
import RootLayout from "./layout/RootLayout";
export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<DashboardWelcome />} />
          <Route path="subject" element={<DashboardSubject />} />
          <Route path="level" element={<DashboardLevel />} />
          <Route path="quiz" element={<Quiz />} />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}