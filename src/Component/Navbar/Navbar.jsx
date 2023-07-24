import React, { useState } from "react";
import "./Navbar.css";
import verstaile from "../../Assets/verstaileimage.png";
import hamsopen from "../../Assets/Hamburg.png";
import hamsclose from "../../Assets/hamburgclose.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [hamimagevisible, sethamimagevisible] = useState(true);
  const [profileBoxVisible, setProfileBoxVisible] = useState(false);

  function hamburghandle() {
    sethamimagevisible(!hamimagevisible);
  }

  function handleVerstaileImageClick() {
    setProfileBoxVisible(!profileBoxVisible);
  }
  const handleprofilebox = () => {
    setProfileBoxVisible(!profileBoxVisible);
  };
  return (
    <div className="navbarcontainer">
      {/* For Mobile Phones */}
      <ul className="mobileul">
        <li className="cure">Cure</li>
        <li style={{ listStyle: "none" }}>
          <img
            onClick={hamburghandle}
            className="hamsopen"
            src={hamimagevisible ? hamsopen : hamsclose}
            alt="hamsopen"
          ></img>
          {!hamimagevisible && (
            <div id="hamsburgbox">
              <span className="hamsburgli">Home</span>
              <span className="hamsburgli">Products</span>
              <span className="hamsburgli">Insights</span>
              <span className="hamsburgli">Contact</span>
              <span className="hamsburgli">About</span>
            </div>
          )}
        </li>
        <li className="verstaileli">
          <img
            className="verstaile"
            src={verstaile}
            alt="verstaileimage"
            onClick={handleVerstaileImageClick}
          ></img>
          {profileBoxVisible && (
            <div id="profileBox">
              <div className="profileInfo">
                <p style={{ fontSize: "20px" }}>John Doe</p>
                <p style={{ fontSize: "20px" }}> john.doe@example.com</p>
              </div>
              <div className="profileActions">
                <Link to="/Login">
                  <button className="navbarlogin">Login</button>
                </Link>
              </div>
            </div>
          )}
        </li>
        <li className="windowli">Contact</li>
        <li className="windowli">About</li>
        <li className="windowli">Feedback</li>
        <li className="windowli">Home</li>
      </ul>
      <ul className="windowul">
        <li className="cure">Cure</li>
        <li className="verstaileli">
          <img
            className="verstaile"
            src={verstaile}
            alt="verstaileimage"
            onClick={handleVerstaileImageClick}
          ></img>
          {profileBoxVisible && (
            <div id="profileBox">
              <div className="profileInfo">
                <p style={{ fontSize: "20px" }}> John Doe</p>
                <p style={{ fontSize: "20px" }}>john.doe@example.com</p>
              </div>
              <div className="profileActions">
                <Link to="/Login">
                  {" "}
                  <button onClick={handleprofilebox} className="navbarlogin">
                    Login
                  </button>
                </Link>
              </div>
            </div>
          )}
        </li>
        {/* <li className="windowli"> About</li> */}
        <li className="windowli">Contact</li>
        <li className="windowli">Insights</li>
        <li className="windowli">Products</li>
        <li className="windowli">Home</li>
      </ul>
    </div>
  );
}

export default Navbar;
