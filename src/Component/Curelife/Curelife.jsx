import React from "react";
import "./Curelife.css";
import { Link } from "react-router-dom";
function Curelife() {
  return (
    <div className="curelifecontainer">
      <div className="curelifebox1">
        <div className="curelifeheading">
          Your Life of Ayurvedha with <br></br>
          <span className="spancure"> Cure</span>
        </div>
        <div className="curelifedescryption">
          Life with Ayurveda is a holistic journey towards balance and
          well-being. By nurturing the body, mind, and spirit, Ayurveda helps
          individuals achieve harmony, boost vitality, and promote longevity.
          Embracing Ayurvedic principles empowers one to embrace a natural and
          sustainable approach to health, unlocking the potential for a vibrant
          and fulfilling life.
        </div>
        <hr></hr>
        <hr></hr>
        <div className="curelifeamaze">
          Take a look at the amazing features & ask yourself the question.
        </div>
        <Link to="/Knowmore">
          {" "}
          <button className="curelifebutton">Know More</button>
        </Link>
      </div>
    </div>
  );
}

export default Curelife;
