import React from "react";
import "./Footer.css";
import github from "../../Assets/github1.png";
import linkdin from "../../Assets/linkedin1.png";
import resume from "../../Assets/resume.png";
function Footer() {
  return (
    <div className="footercontainer">
      <div className="footerbox12">
        <div className="footerbox1">
          <div className="footertitle">Cure</div>
          <div className="footerdesc">
            Cure distributes high-quality medical cannabis. For further detailed
            information, please log in to the department with your DocCheck
            account. In the department you will also find important basic
            information, scientific studies and answers to the most frequently
            asked questions about cannabinoid-based medicines.
          </div>
        </div>
        <div className="footerbox2">
          <div className="footertitle">Social</div>
          <div className="footerdesc">
            {" "}
            <a href="https://github.com/277pawan">
              <abbr title="Github">
                {" "}
                <img className="social" src={github} alt="github" />
              </abbr>
            </a>
            <a href="https://www.linkedin.com/in/pawan-bisht-a943161b9/">
              <abbr title="Linkdin">
                <img className="social" src={linkdin} alt="Linkdin" />
              </abbr>
            </a>
            <a href="/PawanBishtresume.pdf" download>
              {" "}
              <abbr title="Resume">
                <img className="social" src={resume} alt="resume" />
              </abbr>
            </a>
          </div>
        </div>
      </div>
      <div className="footerbox3">
        <div className="lastfooterbox">
          &copy;Copyright 2023, Made by Pawan Bisht.
        </div>
      </div>
    </div>
  );
}

export default Footer;
