import React, { useEffect, useRef, useState } from "react";
import "./Curelife.css";
import { Link } from "react-router-dom";
function Curelife() {
  const cureliferef = useRef(null);
  const [intersection, setintersection] = useState("");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entry) => {
        entry.forEach((entries) => {
          setintersection(entries.isIntersecting);
        });
      },
      {
        threshold: 0.6,
      }
    );
    observer.observe(cureliferef.current);

    return () => {
      observer.disconnect();
    };
  });
  useEffect(() => {
    const boxButtons = cureliferef.current.querySelectorAll(".curelifebutton");
    if (intersection) {
      boxButtons.forEach((el) => {
        el.classList.add("in-view");
      });
    } else {
      boxButtons.forEach((el) => {
        el.classList.remove("in-view");
      });
    }
  }, [intersection]);

  return (
    <div className="curelifecontainer" ref={cureliferef}>
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link to="/Knowmore">
            {" "}
            <button className="curelifebutton">Know More</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Curelife;
