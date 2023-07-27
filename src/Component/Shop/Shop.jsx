import React from "react";
import "./Shop.css";
import pro1 from "../../Assets/mint1.png";
import pro2 from "../../Assets/gotukola1.png";
import pro3 from "../../Assets/Aswagandha1.png";
import pro4 from "../../Assets/nirgundhi1.png";
import mintleaf from "../../Assets/mintlogo.png";
import Footer from "../Footer/Footer";
function Shop() {
  return (
    <>
      <div className="shopcontainer">
        <div className="shopbox1">Pick a Ayurvedha Products</div>
        <div className="shopbox2">
          <hr></hr>
          <hr className="hr2"></hr>
        </div>
        <div className="shopbox3">
          We at Cure provide various services to the nature of the clients. Wish
          how you would like to spend the time here we can talk and come to a
          conclusion.
        </div>
        <div className="shopbox4">
          <div className="shop1">
            <div>
              <img style={{ height: "300px" }} src={pro1} alt="Mint"></img>
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
              <button className="shopbutton">20rs Buy Now</button>
            </div>
          </div>
          <div className="shop2">
            <div>
              <img style={{ height: "300px" }} src={pro2} alt="Gotukola"></img>
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
              <button className="shopbutton">20rs Buy Now</button>
            </div>
          </div>
          <div className="shop3">
            <div>
              <img
                style={{ height: "300px" }}
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
              <button className="shopbutton">20rs Buy Now</button>
            </div>
          </div>
          <div className="shop4">
            <div>
              <img style={{ height: "300px" }} src={pro4} alt="Nirgundhi"></img>
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
              <button className="shopbutton">20rs Buy Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="optioncontainer">
        <div className="optionbox1">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>
              <img
                style={{
                  height: "200px",
                  width: "auto",
                  borderRadius: "20px",
                }}
                src={mintleaf}
                alt="Mint"
              ></img>
            </div>
            <div
              style={{
                fontFamily: "fantasy",
                fontSize: "40px",
                marginTop: "-50px",
              }}
            >
              C U R E
            </div>
            <div
              style={{
                fontSize: "22px",
                textAlign: "center",
                marginBottom: "30px",
                fontFamily: "lora",
              }}
            >
              We at Cure provide various services to the nature of the clients.
              Wish how you would like to spend the time here we can talk and
              come to a conclusion. Phasellus et nisl tellus. Etiam facilisis eu
              nisi scelerisque faucibus. Proin semper suscipit magna, nec
              imperdiet lacus semper vitae. Sed hendrerit enim non justo posuere
              placerat eget purus mauris. Etiam facilisis eu nisi scelerisque
              faucibus. Proin semper suscipit magna, nec imperdiet lacus semper.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Shop;
