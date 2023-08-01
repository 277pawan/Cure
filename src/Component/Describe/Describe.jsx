import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Describe.css";
function Describe() {
  const [isintersecting, setintersection] = useState(false);
  const describeref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setintersection(entry.isIntersecting);
        });
      },
      {
        threshold: 0.3,
      }
    );
    observer.observe(describeref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const boxButtons = describeref.current.querySelectorAll(".boxbutton");
    if (isintersecting) {
      boxButtons.forEach((el) => {
        el.classList.add("in-view");
      });
    } else {
      boxButtons.forEach((el) => {
        el.classList.remove("in-view");
      });
    }
  }, [isintersecting]);
  return (
    <div className="describecontainer" ref={describeref}>
      <div className="box1">
        <div className="boxheading">Patients</div>
        <hr className="describehr"></hr>
        <br></br>
        <div className="boxdescript">
          Chronic pain, sleep disorders or migraines can significantly reduce
          the quality of life. Inform yourself comprehensively about therapy
          with medical cannabis.
        </div>
        <br></br>
        <Link to="/Patient">
          <button className="boxbutton">Learn more </button>
        </Link>
      </div>
      <div className="box2">
        <div className="boxheading">For Doctors</div>
        <hr className="describehr"></hr>
        <br></br>
        <div className="boxdescript">
          Chronic pain, sleep disorders or migraines can significantly reduce
          the quality of life. Inform yourself comprehensively about therapy
          with medical cannabis.
        </div>
        <br></br>
        <Link to="/Doctor">
          <button className="boxbutton">Learn more </button>
        </Link>
      </div>
      <div className="box3">
        {" "}
        <div className="boxheading">For Pharmacists</div>
        <hr className="describehr"></hr>
        <br></br>
        <div className="boxdescript">
          Chronic pain, sleep disorders or migraines can significantly reduce
          the quality of life. Inform yourself comprehensively about therapy
          with medical cannabis.
        </div>
        <br></br>
        <Link to="/Pharma">
          <button className="boxbutton">Learn more </button>
        </Link>
      </div>
    </div>
  );
}

export default Describe;
