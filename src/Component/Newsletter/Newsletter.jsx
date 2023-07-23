import React, { useState } from "react";
import "./Newsletter.css";
import image21 from "../../Assets/image21.png";
import { useNavigate } from "react-router-dom";
function Newsletter() {
  const [email, setemail] = useState("");
  const navigate = useNavigate("");
  const [err, seterr] = useState("");
  function submitnews() {
    if (email) {
      navigate("/News");
    } else {
      //   alert("Please fill out this field");
      seterr("Please fill out this field");
      setTimeout(() => {
        seterr("");
      }, 3000);
    }
  }
  return (
    <div className="newslettercontainer">
      <div className="newsbox1">
        <img className="image21" src={image21} alt="image21"></img>
        <br></br>&nbsp;
        <div className="newsbox1heading"> Cure just made for Ayurvedha.</div>
        <div className="newsbox1descryption">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
          laboriosam excepturi temporibus! Rerum incidunt itaque reprehenderit
          ab doloremque doloribus omnis cumque ullam, error vero quia. Officiis
          quas ipsa suscipit nulla!
        </div>
      </div>
      <div className="newsbox2">
        <div className="newsbox2heading">
          Subscribe to Newsletter & discover more.
        </div>
        <div className="newsbox2descryption">
          Get all the latest news and offers we provide along with the special
          discounts we offer you!
        </div>
        <input
          className="newsletteremail"
          onChange={(e) => setemail(e.target.value)}
          type="email"
          placeholder="Enter your email..."
          value={email}
          required
        ></input>
        <button
          onClick={submitnews}
          style={{
            height: "70px",
            width: "100px",
            color: "green",
            backgroundColor: "#e0ffdf",
            fontSize: "20px",
            border: "2px solid transparent",
          }}
        >
          Send
        </button>
        <div className="newslettererror">{err}</div>{" "}
      </div>
    </div>
  );
}

export default Newsletter;
