import React, { useState } from "react";
import "./Navbar.css";
import verstaile from "../../Assets/verstaileimage.png";
import hamsopen from "../../Assets/Hamburg.png";
import hamsclose from "../../Assets/hamburgclose.png";
import { Link } from "react-router-dom";
import Usestore from "../Usestore";
function Navbar() {
  const [hamimagevisible, sethamimagevisible] = useState(true);
  const [profileBoxVisible, setProfileBoxVisible] = useState(false);
  const userEmail = Usestore((state) => state.email);
  const userName = Usestore((state) => state.name);
  const userImage = Usestore((state) => state.image);
  const logoutfunction = Usestore((state) => state.logout);
  const uid = Usestore((state) => state.uid);
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
            src={userImage ? userImage : verstaile}
            alt="verstaileimage"
            onClick={handleVerstaileImageClick}
          ></img>
          {profileBoxVisible && (
            <div id="profileBox">
              <div className="profileInfo">
                <p style={{ fontSize: "19px" }}>
                  {userName ? userName : "John Doe"}
                </p>
                <p
                  style={{
                    fontSize: "19px",
                    marginLeft: "-24px",
                    textAlign: "center",
                  }}
                >
                  {" "}
                  {userEmail ? userEmail : "JohnDoe@277gmail.com"}
                </p>
              </div>
              <div className="profileActions">
                <Link to="/Profile">
                  <button onClick={handleprofilebox} className="navbarlogin">
                    UserProfile
                  </button>
                </Link>
              </div>
              <div className="profileActions">
                <Link to="/Login">
                  <button onClick={handleprofilebox} className="navbarlogin">
                    {userName ? "Logout" : "Login"}
                  </button>
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
            src={userImage ? userImage : verstaile}
            alt="verstaileimage"
            onClick={handleVerstaileImageClick}
          ></img>
          {profileBoxVisible && (
            <div id="profileBox">
              <div className="profileInfo">
                <p style={{ fontSize: "20px" }}>
                  {userName ? userName : "John Doe"}
                </p>
                <p style={{ fontSize: "20px" }}>
                  {userEmail ? userEmail : "JohnDoe@277gmail.com"}
                </p>
              </div>
              <div className="profileActions">
                <Link to="/Profile">
                  <button onClick={handleprofilebox} className="navbarlogin">
                    UserProfile
                  </button>
                </Link>
              </div>
              <div className="profileActions">
                <Link to="/Login">
                  <button onClick={logoutfunction} className="navbarlogin">
                    {userName ? "Logout" : "Login"}
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
