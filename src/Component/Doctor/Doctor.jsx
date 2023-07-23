import React, { useEffect, useRef, useState } from "react";
import "./Doctor.css";
import image19 from "../../Assets/image19.png";
import Footer from "../Footer/Footer";

function Doctor() {
  const [name, setname] = useState("");
  const [number, setnumber] = useState("");
  const [time, settime] = useState("");
  const [email, setemail] = useState("");
  const [numberdoctor, setnumberdoctor] = useState("0");
  const [herbs, setherbs] = useState("0");
  const [isintersecting, setintersection] = useState(false);
  const doctorref = useRef("");
  const handlescrollup = () => {
    window.scrollTo({
      top: 700,
      behavior: "smooth",
    });
  };
  const handlescrolldown = () => {
    window.scrollTo({
      top: 700,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isintersecting) {
            setintersection(true);
            // Run animations and effects only once here
            const incrementInterval = 1; // 50 steps to reach 100
            const herbincrement = 1;

            const incrementValues = () => {
              let currentIncrement = 0;
              const animateIncrement = () => {
                setnumberdoctor(currentIncrement);
                currentIncrement += incrementInterval;
                if (currentIncrement <= 70) {
                  requestAnimationFrame(animateIncrement);
                }
              };
              animateIncrement();
            };

            const herbfunction = () => {
              let herbcurrentincrement = 0;
              const animateHerbIncrement = () => {
                setherbs(herbcurrentincrement);
                herbcurrentincrement += herbincrement;
                if (herbcurrentincrement <= 50) {
                  requestAnimationFrame(animateHerbIncrement);
                }
              };
              animateHerbIncrement();
            };

            herbfunction();
            incrementValues();
          }
        });
      },
      {
        threshold: 0.5,
      }
    );
    observer.observe(doctorref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <>
      <div className="doctorcontainer" ref={doctorref}>
        <div>
          <img className="Doctorimage" src={image19} alt="Patient"></img>
        </div>
        <div className="doctorheading">
          Ayurvedha for
          <div className="doctordiv">
            better health online consultation with ayurvedic doctor
          </div>
          <button className="patientbutton" onClick={handlescrolldown}>
            Book online consultation
          </button>
          <div className="doctordiv">
            First consultation is free and after 100rs/Week
          </div>
        </div>
      </div>
      <div className="whycurecontainer">
        <div className="whybox1">
          <div className="whybox1heading">
            Why{" "}
            <span
              style={{
                color: "darkgreen",
                fontFamily: "fantasy",
                fontSize: "60px",
              }}
            >
              Cure
            </span>
          </div>
          <div className="whybox1desc">
            Cure has set out on a path to reconnect people with nature and
            ayurveda. we bring verified and experienced BAMS doctors, authentic
            raw herbs and medicines sourced from verified vendors and have
            designed tried and trusted wellness programs to reverse conditions
            like PCOS and Diabetes.
          </div>
          <br></br>
          <div className="whycureflex">
            <div className="curebox1">
              <div style={{ fontSize: "50px", textAlign: "center" }}>
                {numberdoctor}+
              </div>{" "}
              Ayurvedha Doctors
            </div>
            <div className="curebox2">
              <div style={{ fontSize: "50px", textAlign: "center" }}>A+</div>{" "}
              Excellence guide
            </div>
            <div className="curebox3">
              <div style={{ fontSize: "50px", textAlign: "center" }}>
                {herbs}+
              </div>
              herbs and medicine
            </div>
          </div>
        </div>
        <div className="whybox2">
          <div className="whybook">Book an apointment</div>
          <div
            style={{
              color: "darkgreen",
              fontSize: "20px",
              fontFamily: "domine",
              padding: "25px",
            }}
          >
            Understand the root-cause of your problem, and begin your
            personalized treatment today
          </div>
          <div>
            <input
              className="whyname"
              type="text"
              placeholder="Name..."
              onChange={(e) => {
                setname(e.target.value);
              }}
              value={name}
              required
            ></input>
          </div>
          <div>
            <input
              className="whynumber"
              type="text"
              placeholder="Number..."
              onChange={(e) => {
                setnumber(e.target.value);
              }}
              value={number}
              required
            ></input>
          </div>
          <div>
            <input
              className="whytime"
              type="time"
              placeholder="Time..."
              onChange={(e) => {
                settime(e.target.value);
              }}
              value={time}
            ></input>
          </div>
          <div>
            <input
              className="whyemail"
              type="email"
              placeholder="Email..."
              onChange={(e) => {
                setemail(e.target.value);
              }}
              value={email}
              required
            ></input>
          </div>
          <div style={{ color: "darkgreen", fontSize: "20px" }}>
            <input className="whycheckbox" type="checkbox" required></input> I
            agree the term and condition.
          </div>
          <div>
            <button className="whysubmit">Book Now</button>
          </div>
        </div>
      </div>
      <div className="doctortrustcontainer">
        <div className="trustbox1">
          Trust in{" "}
          <span style={{ color: "darkgreen", fontFamily: "fantasy" }}>
            Ayurvedha
          </span>
        </div>
        <div className="trustbox2">
          Ayurveda is a science which believes in improving the lifestyle of an
          individual to bring a positive change in physical and mental health.
          to bring this change ayurveda focuses on diet, yoga, natural herbs and
          mindfullness. keeping this mind we have brought experts from the field
          of science, yoga, and diet to provide a holistic solution to reverse
          or treat diseases and conditions.
        </div>
        <div className="trustbox3"></div>
        <button className="trustbutton" onClick={handlescrollup}>
          Book online consultation
        </button>
      </div>
      <Footer />
    </>
  );
}

export default Doctor;
