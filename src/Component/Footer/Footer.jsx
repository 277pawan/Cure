import React from "react";
import "./Footer.css";
import Linkdin from "../../Assets/Linkdin.png";
import github from "../../Assets/Github.png";
import resume from "../../Assets/resumeimage.png";

function Footer() {
  return (
    <div className="footercontainer">
      <div className="footbox1">Cure</div>
      <div className="footbox2">
        <div>
          <span>
            <img className="linkdin" src={Linkdin} alt="linkdin"></img>
          </span>
          <span>
            <img className="github" src={github} alt="github"></img>
          </span>
          <span>
            <img className="resume" src={resume} alt="resume"></img>
          </span>
        </div>
        <br></br>
        <div className="whatsapp"> What's app(+91) 9068509220</div>
        <div className="lastline">
          <a
            style={{ textDecoration: "none", color: "darkgreen" }}
            href="/Pawan_bisht-resume.pdf"
            download
          >
            Download My Resume 📂{" "}
          </a>
          || Copyright &copy;2023 Cure
        </div>
      </div>
    </div>
  );
}

export default Footer;
