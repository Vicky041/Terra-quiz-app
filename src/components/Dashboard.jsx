import { Outlet } from "react-router-dom";
import { QuizFilterProvider } from "../contexts/QuizFilterContext";
const Dashboard = () => {
  return (
    <QuizFilterProvider>
      <div>
        <Outlet />
      </div>
    </QuizFilterProvider>
  );
};

export default Dashboard;
