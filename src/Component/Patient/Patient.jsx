import React, { useEffect, useState } from "react";
import "./Patient.css";
import image13 from "../../Assets/image13.png";
import image14 from "../../Assets/image14.png";
import image15 from "../../Assets/image15.png";
import image16 from "../../Assets/image16.png";
import image17 from "../../Assets/image17.png";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

function Patient() {
  const [username, setusername] = useState(false);
  const handlescroll = () => {
    window.scrollTo({
      top: 920,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when Doctor component mounts
  }, []);
  return (
    <>
      <div className="patientcontainer">
        <div>
          <img className="patientimage" src={image13} alt="Patient"></img>
        </div>
        <div className="patientheading">
          For Patient
          <div>
            Ayurveda is the ancient Indian system of natural and holistic
            medicine. When translated from Sanskrit, Ayurveda means “the science
            of life
          </div>
          <button className="patientbutton" onClick={handlescroll}>
            To The Blog
          </button>
        </div>
        <div className="aurvedhaheading">How Ayurvedha Works</div>
        <div className="aurvedha">
          “Ayurveda has a lot to do with how to live your life in harmony with
          nature,” says certified ayurvedic practitioner John Douillard, a
          doctor of chiropractic and the founder of LifeSpa in Boulder,
          Colorado. Dr. Douillard calls it “the original circadian medicine,”
          meaning that through ayurveda, you may “align your body clock with
          nature’s circadian rhythm.” For example, you may eat a larger lunch
          and smaller dinner, allowing proper digestion to take place before and
          while you sleep. Ayurveda is a complex system with many facets, but in
          short, here are the basic tenants and how they might apply to overall
          health and wellness.
        </div>

        <div className="patientbox">
          <div className="patientbox1">
            <img className="image14" src={image14} alt="image14"></img>
            <div className="imagebox1">
              <button className="patientbutton1">Explore it.</button>
              <div className="imagebox1heading">
                What is the best direction to sleep
              </div>
              <div className="imagebox1descrpt">
                Ayurveda’s Triad of Health includes aahar (diet), vihar
                (balanced...
              </div>
            </div>
          </div>
          <div className="patientbox2">
            <img className="image15" src={image15} alt="image14"></img>
            <div className="imagebox2">
              <button className="patientbutton1">Explore it.</button>
              <div className="imagebox2heading">
                How to keep your eyes healthy and strong.
              </div>
              <div className="imagebox2descrpt">
                Prevention is better than cure. Before the problem arises,
                take...
              </div>
            </div>
          </div>
          {username ? (
            <div className="patientbox3">
              {" "}
              <img className="image16" src={image16} alt="image14"></img>
              <div className="imagebox3">
                <button className="patientbutton1">Explore it.</button>
                <div className="imagebox3heading">
                  The glory of waking according to Ayurvedha.
                </div>
                <div className="imagebox3descrpt">
                  In Sanskrit, the daily routine is called as Dinacharya.
                  ‘Din’...
                </div>
              </div>
            </div>
          ) : (
            <Link
              style={{ textDecoration: "none", color: "white" }}
              exact
              to="/Proplan"
            >
              <div className="patientlogin">Explore Pro Plan.</div>
            </Link>
          )}
          {username && (
            <div className="patientbox4">
              {" "}
              <img className="image17" src={image17} alt="image14"></img>
              <div className="imagebox4">
                <button className="patientbutton1">Explore it.</button>
                <div className="imagebox4heading">Diabetes and food Myths.</div>
                <div className="imagebox4descrpt">
                  Diabetes is the presence of high blood sugar level in the
                  body...
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Patient;
