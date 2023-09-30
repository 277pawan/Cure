import React, { useState } from "react";
import "./Newsletter.css";
import image21 from "../../Assets/image21.png";
import { useNavigate } from "react-router-dom";

function Newsletter() {
  const [email, setemail] = useState("");
  const navigate = useNavigate("");
  const [err, seterr] = useState("");
  const [success, setSuccess] = useState("");

  function submitnews() {
    if (email && isValidEmail(email)) {
      navigate("/News");
    } else {
      seterr("Please enter a valid email address");
      setTimeout(() => {
        seterr("");
      }, 3000);
    }
  }

  // Simple email validation function
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  return (
    <div className="newslettercontainer">
      <div className="newsbox1">
        <img className="image21" src={image21} alt="Herbal Product" />
        <br />
        &nbsp;
        <div className="newsbox1heading">Cure just made for Ayurvedha.</div>
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
        <div className="newsletter-form">
          <input
            className="newsletteremail"
            onChange={(e) => setemail(e.target.value)}
            type="email"
            placeholder="Enter your email..."
            value={email}
            required
          />
          <div className="submitnewsbutton">
            <button className="newsbutton" onClick={submitnews}>
              Send
            </button>
          </div>
        </div>
        <div className="newsletter-feedback">
          {err && <div className="newsletter-error">{err}</div>}
          {success && <div className="newsletter-success">{success}</div>}
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
