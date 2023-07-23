import React from "react";
import registerimage from "../../Assets/registerimage.png";
import "./Register.css";
function Register() {
  return (
    <div className="registercontainer">
      <div className="registerbox1">
        <img
          className="registerimage"
          src={registerimage}
          alt="registerimage"
        ></img>
      </div>
      <div className="registerbox2">
        <div className="signupform">
          <div className="signupheading">Cure Register</div>
          <div>
            <input
              className="signupname"
              type="name"
              placeholder="Enter Your Name..."
            ></input>
          </div>
          <div>
            <input
              className="signupemail"
              type="Email"
              placeholder="Enter Your Email..."
            ></input>
          </div>
          <div>
            <input
              className="signuppassword"
              type="Createpassword"
              placeholder="Enter Your Password..."
            ></input>
          </div>
          <div>
            <span>
              <input
                className="signupnumber"
                type="number"
                placeholder="OTP..."
              ></input>
            </span>
            <span>
              <button className="otp">Generate OTP</button>
            </span>
          </div>
          <button className="signup">Signin</button>
        </div>
      </div>
    </div>
  );
}

export default Register;
