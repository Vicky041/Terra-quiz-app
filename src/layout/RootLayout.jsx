import { Outlet } from "react-router-dom";
import { QuizFilterProvider } from "../contexts/QuizFilterContext";
import QuizProvider from "../contexts/QuizContext";
import TimerProvider from "../contexts/TimerContext";
import { AuthProvider } from "../contexts/AuthContext";

const RootLayout = () => {
  return (
    <div>
      <div className="app-container">
        <QuizFilterProvider>
          <QuizProvider>
            <TimerProvider>
              <AuthProvider>
                <Outlet />
              </AuthProvider>
            </TimerProvider>
          </QuizProvider>
        </QuizFilterProvider>
      </div>
    </div>
  );
};

export default RootLayout;
