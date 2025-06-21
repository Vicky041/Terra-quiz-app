import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { ImFacebook } from "react-icons/im";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/Auth.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      setError("No user found. Please sign up first.");
      return;
    }

    if (email === storedUser.email && password === storedUser.password) {
      toast.success("Login successful!");
      setError("");
    } else {
      setError("Invalid email or password.");
    }
  };

  const togglePassword = () => {
    if (showPassword === true) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  };

  return (
    <div className={"auth-container"}>
      <div className={"auth-middle"}>
        <div className={"auth-section1"}>
          <div>
            <div className={"auth-param1"}>
              <img src="src/assets/quizzyPurple.png" />
            </div>

            <div>
              <div className={"auth-secImg"}>
                <img src="src/assets/login.png" />
                <p style={{ fontSize: 20 }}>
                  Take a Quiz and increase your knowledge
                </p>
              </div>

              <div
                style={{
                  padding: "0 20px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <p>Skip</p>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div
                    style={{ width: 50, height: 5, backgroundColor: "#442D7C" }}
                  ></div>
                  <div
                    style={{
                      width: 150,
                      height: 5,
                      backgroundColor: "#FECFC4",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={"auth-section2"}>
          <div className={"auth-param"}>
            <p>Welcome to quizzy</p>
            <h4>Log in</h4>
          </div>

          <div className={"auth-form1"}>
            <form className={"auth-form"} onSubmit={handleLogin}>
              {/* <TextInput
                title={"Email or Phone Number"}
                holder={"Email or Phone Number"}
                val={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              /> */}

              <label className={"auth-label"}>Email or Phone Number</label>
              <input
                className={"auth-input"}
                placeholder="Email or Phone Number "
                type="text"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <label className={"auth-label"}>Password</label>

              <div style={{ position: "relative" }}>
                <input
                  className={"auth-input"}
                  placeholder="Password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <span
                  onClick={togglePassword}
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                    color: "#666",
                  }}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              {error && (
                <small style={{ color: "red", marginTop: "10px" }}>
                  {error}
                </small>
              )}

              <button className={"auth-button"}>Log In</button>
            </form>
          </div>

          <div className={"auth-signin"}>
            <div className={"auth-sign"}>
              <p className={"auth-sign-p"}>OR</p>
              <h6 className={"auth-sign-h6"}>Sign In With</h6>
            </div>
            <div className={"auth-icons"}>
              <p>
                {" "}
                <FcGoogle />
              </p>
              <p id="facebook">
                <ImFacebook style={{ color: "#1976D2" }} />
              </p>
            </div>
            <div className={"auth-account"}>
              <p>Don’t have an account? </p>
              <Link className={"auth-account-a"} to="/signup">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

// export function TextInput({ title, holder, val, onChange }) {
//   return (
//     <div>
//       <label className={"label"}>{title}</label>
//       <input
//         input
//         placeholder={holder}
//         type="text"
//         value={val}
//         onChange={onChange}
//       />
//     </div>
//   );
// }
