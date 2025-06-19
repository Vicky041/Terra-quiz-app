import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { ImFacebook } from "react-icons/im";
import styles from "./login.module.css";
import { Link } from "react-router-dom";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      setError("No user found. Please sign up first.");
      return;
    }

    if (email === storedUser.email && password === storedUser.password) {
      alert("Login successful!");
      // Redirect or proceed here
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.middle}>
        <div className={styles.section1}>
          <div>
            <div className={styles.param1}>
              <img src="./quizzy.png" />
            </div>

            <div>
              <div className={styles.secImg}>
                <img src="./group1.png" />
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

        <div className={styles.section2}>
          <div className={styles.param}>
            <p>Welcome to quizzy</p>
            <h4>Log in</h4>
          </div>

          <div className={styles.form}>
            <form onSubmit={handleLogin}>
              <label>Email or Phone Number</label>
              <input
                placeholder="Email or Phone Number "
                type="text"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <label>Password</label>
              <input
                placeholder="Password"
                type="text"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />

              {error && (
                <small style={{ color: "red", marginTop: "10px" }}>
                  {error}
                </small>
              )}

              <button>Log In</button>
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
                <ImFacebook />
              </p>
            </div>
            <div className={styles.account}>
              <p>Don’t have an account? </p>
              <Link to="/signup">Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
