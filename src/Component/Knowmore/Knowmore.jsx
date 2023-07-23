import React, { useState } from "react";
import "./Knowmore.css";
import mint from "../../Assets/mint.png";
import nirgundhi from "../../Assets/Nidgundhi.png";
import aswagandha from "../../Assets/Aswagandha.png";
import gotkola from "../../Assets/gotukola.png";
import Footer from "../Footer/Footer";
function Knowmore() {
  const [openSummaryIndex, setOpenSummaryIndex] = useState(0);

  const faqData = [
    {
      question: "What about insurance coverage?",
      content:
        "Suspendisse at consectetuer amet sit ligula, accumsan in vel, facilisi vulputate, maxime in lacinia suscipit sagittis diam, cras risus aliquam quis sit. Velit elit nec. Nec non et curabitur augue, aliquet sit. Cursus duis in eget in libero etiam, ac ante magna nec, ante lectus, consectetuer neque.",
    },
    {
      question: "What is naturopathic medicine?",
      content:
        "Naturopathic Medicine is the combination of the greatest achievements of the traditional, western diagnostic and treatment techniques with the therapeutic methodologies of naturopathic and ancient medical methods.",
    },
    {
      question: "What is enviromental Medicine?",
      content:
        "Suspendisse at consectetuer amet sit ligula , accusamn in vel facilisi vulputate maxime in lacinia suscripti sageittis diam cras rsius aliquam quis sit. Velit elit nex Nex non et curabitur",
    },
  ];

  const handleSummaryClick = (index) => {
    setOpenSummaryIndex(index);
  };
  return (
    <>
      <div className="knowmorecontainer">
        <div className="knowmoreheading">
          A Brief Description About The Ayurvedha
        </div>
        <div className="knowmoredescryption">
          We at CURE provide various services to the nature of the clients. Wish
          how you would like to spend the time here we can talk and come to a
          conclusion.
        </div>
        <div className="knowbox1">
          <img className="mint" src={mint} alt="mint"></img>
          <hr></hr>
          <div style={{ fontSize: "20px", textAlign: "center" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
            ratione, asperiores odit animi enim ea deleniti perspiciatis nulla
            maxime facilis saepe mollitia est nihil consectetur, repudiandae
            reiciendis sapiente aut obcaecati!
          </div>
        </div>
        <div className="knowbox2">
          <img className="nirgundhi" src={nirgundhi} alt="nirgundhi"></img>
          <hr></hr>
          <div style={{ fontSize: "20px", textAlign: "center" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
            ratione, asperiores odit animi enim ea deleniti perspiciatis nulla
            maxime facilis saepe mollitia est nihil consectetur, repudiandae
            reiciendis sapiente aut obcaecati!
          </div>
        </div>
        <div className="knowbox3">
          <img className="aswagandha" src={aswagandha} alt="aswagandha"></img>
          <hr></hr>
          <div style={{ fontSize: "20px", textAlign: "center" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
            ratione, asperiores odit animi enim ea deleniti perspiciatis nulla
            maxime facilis saepe mollitia est nihil consectetur, repudiandae
            reiciendis sapiente aut obcaecati!
          </div>
        </div>
        <div className="knowbox4">
          <img className="gotukola" src={gotkola} alt="gotukola"></img>{" "}
          <hr></hr>
          <div style={{ fontSize: "20px", textAlign: "center" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
            ratione, asperiores odit animi enim ea deleniti perspiciatis nulla
            maxime facilis saepe mollitia est nihil consectetur, repudiandae
            reiciendis sapiente aut obcaecati!
          </div>
        </div>
      </div>
      <div className="iframecontainer">
        <div className="faqsmall">faq</div>
        <div className="faqlarge">Frequently Asked Question.</div>
        <div className="iframebox1">
          <iframe
            className="iframevideo"
            src="https://player.vimeo.com/video/24253126?portrait=0&autoplay=1"
            frameBorder="0"
            title="iframe"
            webkitallowfullscreen
            mozallowfullscreen
            allowfullscreen
          ></iframe>
          <div
            style={{
              margin: "-70px 10px 10px 10px",
              fontSize: "30px",
              color: "darkgreen",
              fontFamily: "satisfy",
              textAlign: "center",
            }}
          >
            {" "}
            Our Mission is your Natural health.
          </div>
        </div>
        <div className="iframebox2">
          <div>
            {faqData.map((item, index) => (
              <div key={index}>
                <details open={openSummaryIndex === index}>
                  {item.content}
                  <summary
                    className="summary"
                    onClick={() => handleSummaryClick(index)}
                  >
                    {item.question}
                  </summary>
                </details>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Knowmore;
