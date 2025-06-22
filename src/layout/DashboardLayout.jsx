import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { QuizFilterProvider } from "../contexts/QuizFilterContext";
import { useAuth } from "../hooks/useAuth";
import { getFirstWord } from "../utils/getFirstWord";

const DashboardLayout = () => {
  const { user, dispatch } = useAuth();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    console.log("User logged out");
  };

  const userName = user?.fullName || "Guest";
  const name = getFirstWord(userName);

  return (
    <QuizFilterProvider>
        <div>
          <Navbar
            links={[
              { to: "/dashboard/leaderboard", label: "Leaderboard" },
              { to: "#", label: "Profile" },
              { to: "#", label: "Settings" },
            ]}
            isUser={true}
            user={name}
            handleLogout={handleLogout}
          />
          <div className="dashboard-wrapper">
            <Outlet />
          </div>
        </div>
    </QuizFilterProvider>
  );
};

export default DashboardLayout;
