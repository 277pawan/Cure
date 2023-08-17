import React, { useEffect, useState } from "react";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
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
        cartItems.push({ ...doc.data(), id: doc.id }); // Include the doc ID
      });

      return cartItems;
    } catch (error) {
      console.error("Error fetching cart data:", error);
      return [];
    }
  }

  async function removeFromCart(docId) {
    const productDocRef = doc(firestore, "Cart", uid, "products", docId);

    try {
      await deleteDoc(productDocRef);
      // Update the local cartItems state by filtering out the removed item
      setCartItems((prevCartItems) =>
        prevCartItems.filter((item) => item.id !== docId)
      );
      console.log("Product removed from cart successfully!");
    } catch (error) {
      console.error("Error removing product from cart:", error);
    }
  }

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <img className="item-image" src={item.image} alt="item1" />
            <div className="item-details">
              <h3>{item.name}</h3>
              <p>Quantity: {item.quantity}</p>
              <p>Price: Rs.{item.price}</p>
              <p>Details: {item.details}</p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="remove-button"
              >
                Remove from Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
