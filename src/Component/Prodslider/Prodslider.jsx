import React, { useEffect, useRef, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image5 from "../../Assets/image5.png";
import image6 from "../../Assets/image6.png";
import image7 from "../../Assets/image7.png";
import image8 from "../../Assets/image8.png";

import "./Prodslider.css";
function Prodslider() {
  const [isintersecting, setintersection] = useState(false);
  const proref = useRef(null);
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
    observer.observe(proref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const boxButtons = proref.current.querySelectorAll(".prosliderbutton");
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
    <div className="proslidercontainer" ref={proref}>
      {/* <input type="color"></input> */}
      <div className="proheading">
        Products Insight
        <hr className="prohr"></hr>
        <div
          style={{
            fontFamily: "lobster",
            fontSize: "28px",
            color: "white",
            margin: "10px 0px 10px 10px",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          Cure distributes high-quality medical cannabis. For further detailed
          information, please log in to the department with your DocCheck
          account.
          <br></br>
          <br></br>
          In the department you will also find important basic information,
          scientific studies and answers to the most frequently asked questions
          about cannabinoid-based medicines.
        </div>
        <button className="prosliderbutton">To The Shop</button>
      </div>
      <div className="carousel">
        <Carousel
          showArrows={true}
          showStatus={false}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
          stopOnHover={true}
          transitionTime={500}
          useKeyboardArrows={true}
          centerMode={false}
          centerSlidePercentage={80}
          showIndicators={true}
          width="40%"
          emulateTouch={true}
        >
          <div>
            <img className="proimage2" src={image5} alt="product1" />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img className="proimage3" src={image6} alt="product2" />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img className="proimage4" src={image7} alt="product3" />
            <p className="legend">Legend 3</p>
          </div>
          <div>
            <img className="proimage4" src={image8} alt="product4" />
            <p className="legend">Legend 4</p>
          </div>
        </Carousel>{" "}
      </div>
    </div>
  );
}

export default Prodslider;
