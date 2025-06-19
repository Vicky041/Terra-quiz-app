import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { ImFacebook } from "react-icons/im";

export default function Login() {
const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')






  return (
    <div className="container">
      <div className="middle">
        <div className="section1">
          <div className="">
            <div className="param1">
              <img src="./quizzy.png" />
            </div>

            <div className="">
              <div className="secImg">
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

        <div className="section2">
          <div className="param">
            <p>Welcome to quizzy</p>
            <h4>Log in</h4>
          </div>

          <div className="form">
            <form>
              <label>Email or Phone Number</label>
              <input placeholder="Email or Phone Number " type="text" />
              <label>Password</label>
              <input placeholder="Password" type="text" />
              <button>Log In</button>
            </form>
          </div>

          <div className="signin">
            <div className="sign">
              <p>OR</p>
              <h6>Sign In With</h6>
            </div>
            <div className="icons">
              <p>
                {" "}
                <FcGoogle />
              </p>
              <p id="facebook">
                <ImFacebook />
              </p>
            </div>
            <div className="account">
              <p>Don’t have an account? </p>
              <a href="#">Sign In</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
