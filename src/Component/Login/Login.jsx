import React, { useState } from "react";
import "./Login.css";
import loginimage from "../../Assets/loginimage.png";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { auth, provider } from "../../Firestore";
import { signInWithEmailAndPassword } from "firebase/auth";
function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [err, seterr] = useState("");
  const [messageerr, setmessageerr] = useState("");
  const Navigate = useNavigate("");
  function handlelogin(e) {
    e.preventDefault();
    if (email || password) {
      signInWithEmailAndPassword(auth, email, password)
        .then((resp) => {
          Navigate("/");
        })
        .catch((err) => {
          console.log(err);
          // seterr(err);
          // setTimeout(() => {
          //   seterr("");
          // }, 3000);
        });
    } else {
      setmessageerr("Fill all the fields.");
      setTimeout(() => {
        setmessageerr("");
      }, 3000);
    }
  }
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
              onChange={(e) => setemail(e.target.value)}
              value={email}
            ></input>
          </div>
          <div>
            <input
              className="loginpassword"
              type="Createpassword"
              placeholder="Enter Your Password..."
              onChange={(e) => setpassword(e.target.value)}
              value={password}
            ></input>
          </div>

          <button onClick={handlelogin} className="login">
            Login
          </button>
          <div>
            <span className="orline"></span>
          </div>
          <button className="googlelogin">
            <span
              style={{
                fontSize: "35px",
                fontFamily: "arial",
                color: "white",
                fontWeight: "800",
                position: "relative",
                height: "50px",
                width: "50px",
                backgroundColor: "darkgreen",
                borderRadius: "40px",
                display: "inline-block",
              }}
            >
              G
            </span>
            &nbsp;google
          </button>
          <div style={{ marginTop: "5%", fontSize: "20px", marginLeft: "-1%" }}>
            Don't have an account?{" "}
            <Link to="/Register">
              <span style={{ textDecoration: "none" }}>Register</span>
            </Link>
          </div>
        </div>{" "}
        <div style={{ color: "tomato", fontSize: "18px" }}>{err}</div>
        <div style={{ color: "tomato", fontSize: "18px" }}> {messageerr}</div>
      </div>
    </div>
  );
}

export default Login;
