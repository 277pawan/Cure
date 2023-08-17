import React, { useEffect, useState } from "react";
import "./Produce1.css";
import mint1 from "../../Assets/mint1.png";
import mint2 from "../../Assets/mint2.png";
import pro2 from "../../Assets/gotukola2.png";
import pro3 from "../../Assets/Aswagandha2.png";
import pro4 from "../../Assets/nirgundhi1.png";
import { Link, Navigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import cart from "../../Assets/cart.png";
import wishlist from "../../Assets/wishlist.png";
import Usestore from "../Usestore";
import { addDoc, collection, doc } from "firebase/firestore";
import { firestore } from "../../Firestore";
function Produce1() {
  const [pimage, setpimage] = useState(mint1);
  const [info, setinfo] = useState("descryption");
  const uid = Usestore((state) => state.uid);
  const [quantity, setquantity] = useState("1");
  const [cartmessage, setcartmessage] = useState("");
  const [wishlistmessage, setwishlistmessage] = useState("");
  const [loginmessage, setloginmessage] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  function handlemint1() {
    setpimage(mint1);
  }

  function handlemint2() {
    setpimage(mint2);
  }

  function handleinfo() {
    setinfo("descryption");
  }

  function handlereview() {
    setinfo("reviews");
  }
  function product1cart() {
    if (uid) {
      const cartCollectionRef = collection(firestore, "Cart");
      const userDocRef = doc(cartCollectionRef, uid);
      const productsCollectionRef = collection(userDocRef, "products");
      // const productDocRef = doc(productsCollectionRef, "product1");
      const productData = {
        name: "Mint and Mullerbox",
        quantity: quantity, // Directly use the variable here
        price: 100,
        details:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae odit voluptate fugit corrupti aliquam, cumque quas expedita impedit, exercitationem facere ducimus voluptas laboriosam maxime vel! Porro quo aperiam quasi ex!",
        image: mint1,
      };

      // Add product data to the subcollection "products"
      addDoc(productsCollectionRef, productData)
        .then(() => {
          console.log("Product added to cart successfully!");
          setcartmessage("Added to cart");
          setTimeout(() => {
            setcartmessage("");
          }, 3000);
        })
        .catch((err) => {
          console.log("Error adding product to cart:", err);
        });
    } else {
      setloginmessage("Please! Login in.");
      setTimeout(() => {
        setloginmessage("");
      }, 3000);
    }
  }
  function product1wishlist() {
    if (uid) {
      const cartCollectionRef = collection(firestore, "Wishlist");
      const userDocRef = doc(cartCollectionRef, uid);
      const productsCollectionRef = collection(userDocRef, "products");
      // const productDocRef = doc(productsCollectionRef, "product1");
      const productData = {
        name: "Mint and Mullerbox",
        price: 100,
        details:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae odit voluptate fugit corrupti aliquam, cumque quas expedita impedit, exercitationem facere ducimus voluptas laboriosam maxime vel! Porro quo aperiam quasi ex!",
        image: mint1,
      };

      // Add product data to the subcollection "products"
      addDoc(productsCollectionRef, productData)
        .then(() => {
          console.log("Product added to wishlist successfully!");
          setwishlistmessage("Added to Wishlist");
          setTimeout(() => {
            setwishlistmessage("");
          }, 3000);
        })
        .catch((err) => {
          console.log("Error adding product to wishlist:", err);
        });
    } else {
      setloginmessage("Please! Login in.");
      setTimeout(() => {
        setloginmessage("");
      }, 3000);
    }
  }

  return (
    <>
      <div className="produce1container">
        <div className={`sucess ${cartmessage ? "visible" : ""}`}>
          {cartmessage}
        </div>
        <div className={`sucess ${wishlistmessage ? "visible" : ""}`}>
          {wishlistmessage}
        </div>
        <div className={`sucess ${loginmessage ? "visible" : ""}`}>
          {loginmessage}
        </div>
        <div className="producebox1">
          <img className="mint1image" src={pimage} alt="mint" />
          <img
            className="mintbutton"
            onClick={handlemint1}
            src={mint1}
            alt="mint"
          />
          <img
            className="mintbutton"
            onClick={handlemint2}
            src={mint2}
            alt="mint"
          />
        </div>
        <div className="producebox2">
          <div className="produceheading">Mint and Mullerbox</div>
          <div className="producecost">Rs 100</div>
          <div className="producebrief">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus facere explicabo quasi eligendi neque mollitia placeat
            ratione eius nesciunt, labore ab ullam cum soluta nam quis. Dolore
            praesentium atque sit.
          </div>
          <button onClick={product1cart} className="producecart">
            <input
              style={{
                height: "30px",
                fontSize: "18px",
                width: "40px",
                padding: "10px 10px 10px 5px",
                marginRight: "10px",
              }}
              type="number"
              min={1}
              max={10}
              value={quantity}
              onChange={(e) => {
                setquantity(e.target.value);
              }}
            ></input>{" "}
            Add to Cart
          </button>

          <button onClick={product1wishlist} className="producewishlist">
            Add to Wishlist
          </button>
          <div style={{ fontSize: "18px", marginLeft: "10px" }}>Categories</div>
          <div style={{ fontSize: "18px", marginLeft: "10px" }}>Tags</div>
        </div>
        <div className="socialbuttons">
          <abbr title="Cart">
            {" "}
            <Link to="/Cart">
              {" "}
              <img className="social" src={cart} alt="cart" />
            </Link>
          </abbr>

          <abbr title="Wishlist">
            {" "}
            <Link to="/Wishlist">
              {" "}
              <img className="social" src={wishlist} alt="wishlist" />
            </Link>
          </abbr>
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
                    border: "2px solid darkgreen",
                  }}
                  id="comment"
                  name="comment"
                  cols="183"
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
                <button className="shopbutton">20rs Buy Now</button>
              </Link>
            </div>
          </div>
          <div className="shop3" style={{ margin: "10px" }}>
            <div>
              <img
                style={{ height: "200px" }}
                src={pro3}
                alt="Aswagandha"
              ></img>
            </div>
            <div
              style={{
                fontSize: "24px",
                fontFamily: "vollkron",
                textAlign: "center",
              }}
            >
              Ashwagandha{" "}
            </div>
            <div className="shopbutt">
              {" "}
              <Link eaxct to="/Produce3">
                <button className="shopbutton">20rs Buy Now</button>
              </Link>
            </div>
          </div>
          <div className="shop4" style={{ margin: "10px" }}>
            <div>
              <img style={{ height: "200px" }} src={pro4} alt="Nirgundhi"></img>
            </div>
            <div
              style={{
                fontSize: "24px",
                fontFamily: "vollkron",
                textAlign: "center",
              }}
            >
              Nirgundhi Kwath
            </div>
            <div className="shopbutt">
              {" "}
              <Link exact to="/Produce4">
                {" "}
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

export default Produce1;
