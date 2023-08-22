import React, { useEffect } from "react";
import "./Proplan.css";

function Proplan() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="proplancontainer">
      <div className="probox">
        <div className="proboxheading">Basic Plan </div>
        <div className="proboxcost">Rs 0/year</div>
        <div className="proboxfeatures">
          <div className="proboxfeature">Free Preview.</div>
          <div className="proboxfeature">Ayurvedic medicine.</div>
          <div className="proboxfeature">All Free Primitives.</div>
          <div className="proboxfeature">Get to know more.</div>
          <div className="proboxfeature">Convenient Time.</div>
        </div>
        <div className="default">
          <button>Default Pack</button>
        </div>
      </div>

      <div className="probox">
        <div className="proboxheading">Pro Plan </div>
        <div className="proboxcost">Rs 100/year</div>
        <div className="proboxfeatures">
          <div className="proboxfeature">Free Preview.</div>
          <div className="proboxfeature">Infinite Profile Change.</div>
          <div className="proboxfeature">All Free Primitives.</div>
          <div className="proboxfeature">Add to Cart.</div>
          <div className="proboxfeature">Add to Wishlist.</div>
          <div className="proboxfeature">Book online consultation.</div>
          <div className="proboxfeature">Free Newsletter.</div>
        </div>
        <div className="default">
          <button>
            <a
              style={{ textDecoration: "none", color: "white" }}
              href="https://buy.stripe.com/eVafZ4dwM9jz6ju4gg"
            >
              Buy Now
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Proplan;
