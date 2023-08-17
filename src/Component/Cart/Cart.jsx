import React, { useEffect, useState } from "react";
import { collection, doc, getDocs } from "firebase/firestore";
import { firestore } from "../../Firestore"; // Replace with your Firestore configuration
import Usestore from "../Usestore";
import "./Cart.css";

function Cart() {
  const uid = Usestore((state) => state.uid);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (uid) {
      fetchCartData(uid)
        .then((cartData) => {
          setCartItems(cartData);
        })
        .catch((error) => {
          console.error("Error fetching cart data:", error);
        });
    }
  }, [uid]);

  async function fetchCartData(uid) {
    const userDocRef = doc(firestore, "Cart", uid);
    const productsCollectionRef = collection(userDocRef, "products");

    try {
      const querySnapshot = await getDocs(productsCollectionRef);

      const cartItems = [];
      querySnapshot.forEach((doc) => {
        cartItems.push(doc.data());
      });

      return cartItems;
    } catch (error) {
      console.error("Error fetching cart data:", error);
      return [];
    }
  }

  // Render your cart items using the cartItems state
  return (
    <div className="cartcontainer">
      <h1 style={{ paddingLeft: "10px" }}>Your Cart</h1>
      <ul className="cartfullbox">
        {cartItems.map((item, index) => (
          <li className="cartbox" key={index}>
            <h4>{item.name}</h4> <span>Quantitiy={item.quantity} </span>
            <span> Price: ${item.price}</span>
            Details:{item.details} Image:
            <img className="itemimage" src={item.image} alt="item1"></img>
            <button style={{ fontSize: "20px", padding: "1px" }}>
              Remove Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
