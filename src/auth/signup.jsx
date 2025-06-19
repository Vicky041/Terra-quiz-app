import { FcGoogle } from "react-icons/fc";
import { ImFacebook } from "react-icons/im";
import { useState } from "react";
import styles from "./login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";


export default function SignUp() {
  const [fullName, setfullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [fullNameError, setfullNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;
    setfullNameError("");
    setEmailError("");
    setPasswordError("");

    if (fullName.trim().length < 3) {
      setfullNameError("Full name must be at least 3 characters.");
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^(?:\+234|0)[789][01]\d{8}$/;
    if (!emailRegex.test(email) && !phoneRegex.test(email)) {
      setEmailError("Please enter a valid email or phone number");
      isValid = false;
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{8,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError(
        "Password must be 8+ characters with upper/lowercase, number & symbol."
      );
      isValid = false;
    }

    if (isValid) {
      const userData = {
        fullName,
        email,
        password,
      };
      localStorage.setItem("user", JSON.stringify(userData));

      toast.success("Sign up successful!");
      setTimeout(() => {
        navigate("/login");
      }, 2000); 
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
    <div className={styles.container}>
      <div className={styles.middle}>
        <div className={styles.section1}>
          <div>
            <div className={styles.param1}>
              <img src="src/assets/quizzyPurple.png" />
              
            </div>

            <div>
              <div className={styles.secImg}>
              <img src="src/assets/login.png" />
                <p style={{ fontSize: 20 }}>
                  Take a Quiz and increase your knowledge
                </p>
              </div>

              <div
                style={{
                  padding: "0 50px",
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

        <div className={styles.section2}>
          <div className={styles.param}>
            <p style={{ fontSize: "2.2rem" }}>Welcome to quizzy</p>
            <h4>Create an Account</h4>
          </div>

          <div className={styles.form}>
            <form onSubmit={handleSubmit}>
              <label>Full Name</label>
              <input
                placeholder="Full Name"
                type="text"
                value={fullName}
                onChange={(e) => setfullName(e.target.value)}
              />
              {fullNameError && (
                <small style={{ color: "red" }}>{fullNameError}</small>
              )}

              <label>Email or Phone Number</label>
              <input
                placeholder="Email or Phone Number"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && (
                <small style={{ color: "red" }}>{emailError}</small>
              )}

              <label>Password</label>
              <div style={{ position: "relative" }}>
                <input
                  placeholder="Password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
              {passwordError && (
                <small style={{ color: "red" }}>{passwordError}</small>
              )}

              <button type="submit" style={{ marginTop: "20px" }}>
                Sign Up
              </button>
            </form>
          </div>

          <div className={styles.signin}>
            <div className={styles.sign}>
              <p>OR</p>
              <h6>Sign In With</h6>
            </div>
            <div className={styles.icons}>
              <p>
                {" "}
                <FcGoogle />
              </p>
              <p id="facebook">
                <ImFacebook style={{ color: "#1976D2" }} />
              </p>
            </div>
            <div className={styles.account}>
              <p>Don’t have an account? </p>
              <Link to="/login">Log In</Link>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}
