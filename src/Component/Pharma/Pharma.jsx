import React from "react";
import "./Pharma.css";
import image18 from "../../Assets/image18.png";
import image10 from "../../Assets/image10.png";
import image11 from "../../Assets/image11.png";
import image2 from "../../Assets/image2.png";
import download from "../../Assets/download.png";
import information from "../../Assets/information.png";
import Footer from "../Footer/Footer";

function Pharma() {
  const handlescroll = () => {
    window.scrollTo({
      top: 715,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="pharmacontainer">
        {" "}
        <div>
          <img className="pharmaimage" src={image18} alt="Patient"></img>
        </div>
        <div className="patientheading">
          For Pharmacists
          <div>
            You too can provide your patients with our medical cannabis
            products.
          </div>
          <button className="patientbutton" onClick={handlescroll}>
            To The Blog
          </button>
        </div>
        <div className="productcontainer">
          <div className="pbox1" style={{ backgroundColor: "#e0ffcf" }}>
            {/* <img className="image1" src={image1} alt="shopimage"></img> */}
            <div className="pharmatext">
              This is what you can expect from us
            </div>
            <br></br>
            <button className="patientbutton">To The Shop</button>
          </div>
          <div className="pbox2container">
            <div className="pbox4" style={{ backgroundColor: "#c8f0b2" }}>
              <img className="image2" src={image2} alt="cureproduct"></img>
              <div
                style={{
                  fontFamily: "domine",
                  fontSize: "25px",
                  fontWeight: "600",
                }}
              >
                {" "}
                Transparent Product Information
              </div>
              <div
                style={{
                  fontFamily: "vesper libre",
                  fontSize: "22px",
                  padding: "2px",
                }}
              >
                We give you transparent information about where your medical
                cannabis was grown, what composition your product has and what
                modes of action can be expected.
              </div>
            </div>
            <div className="pbox5" style={{ backgroundColor: "#c8f0b2" }}>
              <img
                className="image3"
                style={{ backgroundColor: "white" }}
                src={download}
                alt="cureproduct"
              ></img>{" "}
              <div
                style={{
                  fontFamily: "domine",
                  fontSize: "25px",
                  fontWeight: "600",
                }}
              >
                {" "}
                Practical templates for download
              </div>
              <div
                style={{
                  fontFamily: "vesper libre",
                  fontSize: "22px",
                  padding: "2px",
                }}
              >
                In order to make billing clearer, we have provided you with
                templates and help for download.
              </div>
            </div>
            <div className="pbox6" style={{ backgroundColor: "#c8f0b2" }}>
              {" "}
              <img
                className="image4"
                style={{ backgroundColor: "white" }}
                src={information}
                alt="cureproduct"
              ></img>{" "}
              <div
                style={{
                  fontFamily: "domine",
                  fontSize: "25px",
                  fontWeight: "600",
                }}
              >
                ... and even more information
              </div>
              <div
                style={{
                  fontFamily: "vesper libre",
                  fontSize: "22px",
                  padding: "2px",
                }}
              >
                These details include product features, descriptions,
                dimensions, price, weight, availability, color, customer
                reviews, and more.
              </div>
            </div>
          </div>
        </div>
        <div className="cannabiscontainer">
          <div className="cannbox1">
            <img className="image10" src={image10} alt="cannimage1"></img>
          </div>
          <div className="cannbox2">
            {" "}
            <img className="image11" src={image11} alt="cannimage1"></img>
          </div>
          <div className="cannbox3">
            <div className="cannheading">
              {" "}
              Your treatment with medical Ayurvedha
            </div>
            <div className="canndescription">
              We at Cure would like to make our contribution to ensuring
              sustainable and standardised therapy with medical Ayurvedha.
            </div>
            <button className="cannbutton">To The Shop</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Pharma;
