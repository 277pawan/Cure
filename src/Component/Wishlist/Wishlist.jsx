import React, { useEffect, useState } from "react";
import "./Wishlist.css"; // Make sure to have your CSS file
import Usestore from "../Usestore";
import { firestore } from "../../Firestore";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";

function Wishlist() {
  const uid = Usestore((state) => state.uid);
  const [wishlistItems, setwishlistItems] = useState([]);

  useEffect(() => {
    if (uid) {
      fetchWishlistData(uid)
        .then((wishlistData) => {
          setwishlistItems(wishlistData);
        })
        .catch((error) => {
          console.error("Error fetching wishlist data:", error);
        });
    }
  }, [uid]);

  async function fetchWishlistData(uid) {
    const userDocRef = doc(firestore, "Wishlist", uid);
    const productsCollectionRef = collection(userDocRef, "products");

    try {
      const querySnapshot = await getDocs(productsCollectionRef);

      const wishlistItems = [];
      querySnapshot.forEach((doc) => {
        wishlistItems.push({ ...doc.data(), id: doc.id }); // Include the doc ID
      });

      return wishlistItems;
    } catch (error) {
      console.error("Error fetching wishlist data:", error);
      return [];
    }
  }
  async function removewishlistitem(docid) {
    const productDocRef = doc(firestore, "Wishlist", uid, "Products", docid);
    try {
      await deleteDoc(productDocRef);
      setwishlistItems((prevwishlistitem) =>
        prevwishlistitem.filter((item) => item.id !== docid)
      );

      console.log("wishlist product removed successfully.");
    } catch (error) {
      console.error("Error removing product from wishlist:", error);
    }
  }
  return (
    <div className="wishlist-container">
      <h1>Your Wishlist</h1>
      <ul className="wishlist-items">
        {wishlistItems.map((item, index) => (
          <li className="wishlist-item" key={index}>
            <img src={item.image} alt={item.name} />
            <div className="wishlist-item-details">
              <h3 className="wishlist-item-name">{item.name}</h3>
              <h4 className="wishlist-item-price">Rs. {item.price}</h4>
              <p className="wishlist-item-description">{item.details}</p>
              <button
                onClick={() => removewishlistitem(item.id)}
                className="remove-button"
              >
                Remove from Wishlist
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Wishlist;
