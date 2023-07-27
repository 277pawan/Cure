import React, { useEffect, useRef, useState } from "react";
import "./Product.css";
import image1 from "../../Assets/image1.webp";
import image2 from "../../Assets/image2.png";
import image3 from "../../Assets/image3.png";
import image4 from "../../Assets/image4.png";
import { Link } from "react-router-dom";
function Product() {
  const productref = useRef(null);
  const [isintersecting, setintersection] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setintersection(entry.isIntersecting);
        });
      },
      {
        threshold: 0.5,
      }
    );
    observer.observe(productref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const boxButtons = productref.current.querySelectorAll(".productbutton");
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
    <div className="productcontainer" ref={productref}>
      <div className="pbox1">
        <img className="image1" src={image1} alt="shopimage"></img>
        <div className="imagetext">
          We support your therapy, your patients and customers with medical
          cannabis.
        </div>
        <br></br>
        <Link to="/Shop">
          {" "}
          <button className="productbutton">To The Shop</button>
        </Link>
      </div>
      <div className="pbox2container">
        <div className="pbox4">
          <img className="image2" src={image2} alt="cureproduct"></img>
          <div
            style={{
              fontFamily: "domine",
              fontSize: "25px",
              fontWeight: "600",
            }}
          >
            {" "}
            The Cure Products
          </div>
          <div
            style={{
              fontFamily: "vesper libre",
              fontSize: "22px",
              padding: "2px",
            }}
          >
            Our products are GMP certified and tested. Click to the shop to go
            to our online shop.
          </div>
        </div>
        <div className="pbox5">
          <img className="image3" src={image3} alt="cureproduct"></img>{" "}
          <div
            style={{
              fontFamily: "domine",
              fontSize: "25px",
              fontWeight: "600",
            }}
          >
            {" "}
            Customer Satisfaction
          </div>
          <div
            style={{
              fontFamily: "vesper libre",
              fontSize: "22px",
              padding: "2px",
            }}
          >
            Customer satisfaction is our top priority. And this is noticeable.
            Time and again, our customers find that we at enua make the
            difference.
          </div>
        </div>
        <div className="pbox6">
          {" "}
          <img className="image4" src={image4} alt="cureproduct"></img>{" "}
          <div
            style={{
              fontFamily: "domine",
              fontSize: "25px",
              fontWeight: "600",
            }}
          >
            Brief details of product
          </div>
          <div
            style={{
              fontFamily: "vesper libre",
              fontSize: "22px",
              padding: "2px",
            }}
          >
            These details include product features, descriptions, dimensions,
            price, weight, availability, color, customer reviews, and more.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
