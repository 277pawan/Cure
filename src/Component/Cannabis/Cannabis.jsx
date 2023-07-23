import React, { useEffect, useRef, useState } from "react";
import "./Cannabis.css";
import image10 from "../../Assets/image10.png";
import image11 from "../../Assets/image11.png";

function Cannabis() {
  const [isintersecting, setintersection] = useState(false);
  const cannref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setintersection(entry.isIntersecting);
          console.log("yellow");
        });
      },
      {
        threshold: 0.5,
      }
    );
    observer.observe(cannref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const boxButtons = cannref.current.querySelectorAll(".cannbutton");
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
    <div className="cannabiscontainer" ref={cannref}>
      <div className="cannbox1">
        <img className="image10" src={image10} alt="cannimage1"></img>
      </div>
      <div className="cannbox2">
        {" "}
        <img className="image11" src={image11} alt="cannimage1"></img>
      </div>
      <div className="cannbox3">
        <div className="cannheading"> Journey With Medical Cannabis</div>
        <div className="canndescription">
          For many doctors, pharmacists and patients, medical cannabis is part
          of the therapy of various diseases As a wholesaler of medical
          cannabis, we would like to make our contribution to ensuring safe and
          sustainable therapy.
        </div>
        <button className="cannbutton">To The Shop</button>
      </div>
    </div>
  );
}

export default Cannabis;
