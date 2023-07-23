import React, { useState } from "react";
import "./Navbar.css";
import verstaile from "../../Assets/verstaileimage.png";
import hamsopen from "../../Assets/Hamburg.png";
import hamsclose from "../../Assets/hamburgclose.png";

function Navbar() {
  const [hamimagevisible, sethamimagevisible] = useState(true);

  function hamburghandle() {
    sethamimagevisible(!hamimagevisible);
    console.log(hamimagevisible);
  }
  return (
    <div className="navbarcontainer">
      {/* For Mobile Phones */}

      <ul className="mobileul">
        <li className="cure"> Cure</li>
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
          <img className="verstaile" src={verstaile} alt="verstaileimage"></img>
        </li>
        <li className="windowli"> Contact</li>
        <li className="windowli">About</li>
        <li className="windowli">Feedback</li>
        <li className="windowli">Home </li>
      </ul>
      <ul className="windowul">
        <li className="cure"> Cure</li>
        <li className="verstaileli">
          <img className="verstaile" src={verstaile} alt="verstaileimage"></img>
        </li>
        {/* <li className="windowli"> About</li> */}
        <li className="windowli"> Contact</li>
        <li className="windowli">Insights</li>
        <li className="windowli">Products</li>
        <li className="windowli">Home </li>
      </ul>
    </div>
  );
}

export default Navbar;
