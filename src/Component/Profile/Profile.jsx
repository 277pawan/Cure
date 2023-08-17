import React, { useState } from "react";
import Usestore from "../Usestore";
import { Link, useNavigate } from "react-router-dom";
import "./Profile.css";
import verstaileimage from "../../Assets/verstaileimage.png";
import profilechange from "../../Assets/profilechange.png";

function Profile() {
  const userName = Usestore((state) => state.name);
  const userImage = Usestore((state) => state.image);
  const userEmail = Usestore((state) => state.email);
  const uid = Usestore((state) => state.uid);
  const logoutfunction = Usestore((state) => state.logout);
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  const handleLogout = () => {
    logoutfunction();
    navigate("/"); // Navigate to the home page after logout
  };
  // const handleImageChange = (e) => {
  //   setSelectedImage(e.target.files[0]);
  // };

  return (
    <div className="userprofilecontainer">
      <div class="profile-page">
        <div class="profile-container">
          <div class="profile-image">
            <img
              src={
                selectedImage
                  ? selectedImage
                  : userImage
                  ? userImage
                  : verstaileimage
              }
              alt="UserImage"
            />
          </div>
          {selectedImage && (
            <input
              id="fileinput"
              type="file"
              onChange={(e) => {
                setSelectedImage(e.target.files[0]);
              }}
            ></input>
          )}
          <label for="fileinput" className="filein">
            <img
              style={{
                height: "40px",
                width: "40px",
                position: "relative",
                marginTop: "-18px",
              }}
              src={profilechange}
              alt="profile"
            ></img>
          </label>
          {/* {selectedImage && (
            <button className="upload-button">Upload Image</button>
          )} */}
          <div class="profile-info">
            <h2 class="profile-name">
              UserName={userName ? userName : "John Doe"}
            </h2>
            <p class="profile-email">
              Useremail={userEmail ? userEmail : "JohnDoe277@gmail.com"}
            </p>
            <p class="profile-email">
              Userid={uid ? uid : "kgh23ashjkduiyqwnsnzi7asdas6"}
            </p>

            <Link to="/Login">
              {" "}
              <button class="logout-button" onClick={handleLogout}>
                {uid ? "Logout" : "Login"}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
