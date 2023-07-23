import React from "react";
import "./Login.css";
import loginimage from "../../Assets/loginimage.png";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="logincontainer">
      <div className="loginbox1">
        <img className="loginimage" src={loginimage} alt="loginimage"></img>
      </div>
      <div className="loginbox2">
        <div className="signupform">
          <div className="signupheading">Cure Login</div>
          <div>
            <input
              className="loginemail"
              type="Email"
              placeholder="Enter Your Email..."
            ></input>
          </div>
          <div>
            <input
              className="loginpassword"
              type="Createpassword"
              placeholder="Enter Your Password..."
            ></input>
          </div>

          <button className="login">Login</button>
          <div>
            <span className="orline"></span>
          </div>
          <button className="googlelogin">
            <span
              style={{
                fontSize: "50px",
                fontFamily: "cooper",
                color: "white",
                fontWeight: "800",
              }}
            >
              G
            </span>
            &nbsp; Login
          </button>
          <div style={{ marginTop: "5%", fontSize: "20px", marginLeft: "-1%" }}>
            Don't have an account?{" "}
            <Link to="/Register">
              <span style={{ textDecoration: "none" }}>Register</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
