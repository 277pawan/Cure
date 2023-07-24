import React, { useEffect, useState } from "react";
import registerimage from "../../Assets/registerimage.png";
import { auth } from "../../Firestore";
import "./Register.css";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [Password, setpassword] = useState("");
  const [otp, setotp] = useState("");
  const [signinotp, setsigninotp] = useState("");
  const [otpmessage, setotpmessage] = useState("");
  const [sucess, setsucess] = useState("");
  const [err, seterr] = useState("");
  const Navigate = useNavigate("");

  useEffect(() => {
    if (otp !== "") {
      localStorage.setItem("otp", otp);
    }
  }, [otp]);
  function handlesubmit() {
    const userotp = localStorage.getItem("otp");
    if (userotp === signinotp) {
      if (email || Password) {
        createUserWithEmailAndPassword(auth, email, Password)
          .then((res) => {
            const resp = res.user;
            updateProfile({
              displayName: name,
            });
            setsucess("Successfully your account is created");
            setTimeout(() => {
              Navigate("/");
            }, 3000);
          })
          .catch((err) => {
            console.log(err);
            seterr("Sorry, " + err);
            setTimeout(() => {
              seterr("");
            }, 3000);
          });
      }
    } else {
      alert("check your otp.");
    }
  }
  function generateotp() {
    setotpmessage("Please check your Email for OTP");
    const generatedOtp = Math.floor(Math.random() * 9000 + 1000);
    setotp(generatedOtp.toString());
    let data = {
      email: email,
      otp: otp,
    };
    fetch("http://localhost:3000/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data); // Log the data received from the server
      })
      .catch((error) => {
        console.log("Error occurred: " + error);
      });
    setTimeout(() => {
      localStorage.removeItem("otp");
    }, 120000);
    setTimeout(() => {
      setotpmessage("");
    }, 3000);
  }

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
              onChange={(e) => {
                setname(e.target.value);
              }}
              value={name}
              placeholder="Enter Your Name..."
            ></input>
          </div>
          <div>
            <input
              className="signupemail"
              onChange={(e) => {
                setemail(e.target.value);
              }}
              value={email}
              type="Email"
              placeholder="Enter Your Email..."
            ></input>
          </div>
          <div>
            <input
              className="signuppassword"
              onChange={(e) => {
                setpassword(e.target.value);
              }}
              value={Password}
              type="Createpassword"
              placeholder="Enter Your Password..."
            ></input>
          </div>
          <div>
            <span>
              <input
                className="signupnumber"
                onChange={(e) => {
                  setsigninotp(e.target.value);
                }}
                value={signinotp}
                type="number"
                placeholder="OTP..."
              ></input>
            </span>
            <span>
              <button onClick={generateotp} className="otp">
                Generate OTP
              </button>
            </span>
          </div>
          <button onClick={handlesubmit} className="signup">
            Signin
          </button>
          <div style={{ color: "green", fontSize: "18px" }}>{sucess}</div>
          <div style={{ color: "tomato", fontSize: "18px" }}>{err}</div>
          <div style={{ color: "green", fontSize: "18px" }}>{otpmessage}</div>
        </div>
      </div>
    </div>
  );
}

export default Register;
