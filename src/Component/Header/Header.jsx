import React, { useEffect } from "react";
import "./Header.css";
import headerLeafvideo from "../../Assets/Headerleaf.mp4";
function Header() {
  return (
    <div className="headercontainer">
      <video
        className="headerleafvideo"
        src={headerLeafvideo}
        autoPlay
        loop
        muted
      ></video>{" "}
      <div className="video1text text-focus-in">
        {" "}
        Health Without Restriction.
      </div>
    </div>
  );
}

export default Header;
