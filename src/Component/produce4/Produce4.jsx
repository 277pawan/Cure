import React, { useEffect, useState } from "react";
import "./Produce4.css";
import pro1 from "../../Assets/mint1.png";
import pro2 from "../../Assets/gotukola2.png";
import pro3 from "../../Assets/Aswagandha2.png";
import Aswagandha1 from "../../Assets/nirgundhi2.png";
import Aswagandha2 from "../../Assets/nirgundhi1.png";

import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
function Produce4() {
  const [pimage, setpimage] = useState(Aswagandha1);
  const [info, setinfo] = useState("descryption");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  function handlemint1() {
    setpimage(Aswagandha1);
  }

  function handlemint2() {
    setpimage(Aswagandha2);
  }

  function handleinfo() {
    setinfo("descryption");
  }

  function handlereview() {
    setinfo("reviews");
  }

  return (
    <>
      <div className="produce1container">
        <div className="producebox1">
          <img className="mint1image" src={pimage} alt="mint" />
          <img
            className="mintbutton"
            onClick={handlemint1}
            src={Aswagandha1}
            alt="mint"
          />
          <img
            className="mintbutton"
            onClick={handlemint2}
            src={Aswagandha2}
            alt="mint"
          />
        </div>
        <div className="producebox2">
          <div className="produceheading">Nirgundhi kwath</div>
          <div className="producecost">Rs 100</div>
          <div className="producebrief">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus facere explicabo quasi eligendi neque mollitia placeat
            ratione eius nesciunt, labore ab ullam cum soluta nam quis. Dolore
            praesentium atque sit.
          </div>
          <button className="producecart">Add to Cart</button>
          <button className="producewishlist">Add to Wishlist</button>
          <div style={{ fontSize: "18px", marginLeft: "10px" }}>Categories</div>
          <div style={{ fontSize: "18px", marginLeft: "10px" }}>Tags</div>
        </div>
      </div>
      <div className="descryptionbox">
        <span onClick={handleinfo}>
          Description
          <hr></hr>
        </span>
        <span onClick={handlereview}>
          Reviews(0)
          <hr></hr>
        </span>
        {info === "descryption" && (
          <div className="describe">
            <div className="describeheading">Description</div>
            <div className="info">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos facere nemo dolore cum libero non, dolorem ipsa dolor
              quasi? Quaerat quae minima ducimus et assumenda veniam quisquam
              delectus eum sint.
            </div>
          </div>
        )}
        {info === "reviews" && (
          <div className="reviews">
            <div className="reviewtitle">Add a review</div>
            <div>
              <label>Name</label>
            </div>
            <div>
              {" "}
              <input className="reviewname" type="text" />
            </div>
            <div>
              <div>
                <label>Email</label>
              </div>
              <div>
                <input className="reviewemail" type="email" />{" "}
              </div>
            </div>
            <div>
              {" "}
              <div>
                <label>Your Review</label>
              </div>
              <div>
                <textarea
                  style={{
                    backgroundColor: "transparent",
                    width: "100%",
                    border: "2px solid",
                    borderColor: "darkgreen",
                  }}
                  id="comment"
                  name="comment"
                  cols="183"
                  color="red"
                  rows="5"
                  required
                />
              </div>
              <button className="productbutton">Submit</button>
            </div>
          </div>
        )}
        <br></br>
        <div style={{ fontFamily: "vollkron", fontSize: "30px" }}>
          {" "}
          Related Products
        </div>
        <div className="related">
          <div className="shop2" style={{ margin: "10px" }}>
            <div>
              <img style={{ height: "200px" }} src={pro1} alt="Gotukola"></img>
            </div>
            <div
              style={{
                fontSize: "24px",
                fontFamily: "vollkron",
                textAlign: "center",
              }}
            >
              Mint
            </div>
            <div className="shopbutt">
              {" "}
              <Link exact to="/Produce1">
                <button className="shopbutton">20rs Buy Now</button>
              </Link>
            </div>
          </div>
          <div className="shop3" style={{ margin: "10px" }}>
            <div>
              <img style={{ height: "200px" }} src={pro2} alt="Gotukola"></img>
            </div>
            <div
              style={{
                fontSize: "24px",
                fontFamily: "vollkron",
                textAlign: "center",
              }}
            >
              Gotukola Extract
            </div>
            <div className="shopbutt">
              {" "}
              <Link exact to="/Produce2">
                {" "}
                <button className="shopbutton">20rs Buy Now</button>
              </Link>
            </div>
          </div>
          <div className="shop4" style={{ margin: "10px" }}>
            <div>
              <img style={{ height: "200px" }} src={pro3} alt="Nirgundhi"></img>
            </div>
            <div
              style={{
                fontSize: "24px",
                fontFamily: "vollkron",
                textAlign: "center",
              }}
            >
              Aswagandha tablets
            </div>
            <div className="shopbutt">
              {" "}
              <Link exact to="/produce3">
                <button className="shopbutton">20rs Buy Now</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Produce4;
