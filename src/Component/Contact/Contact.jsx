import React, { useEffect, useState } from "react";
import "./Contact.css";
function Contact() {
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");
  const [sucess, setsucess] = useState("");
  const [ssucess, showsucess] = useState(false);
  async function sendmessage() {
    if (email || message) {
      showsucess(true);
      setTimeout(() => {
        showsucess(false);
      }, 4000);
      setsucess("Thank you! Your message has been received.");
      let data = {
        email: email,
        message: message,
      };

      try {
        await fetch("https://index-eta-one.vercel.app/", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        });
      } catch (err) {
        console.log(err);
      }
    }
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="contactcontainer">
        <div className="contactbox1">
          <div className="contactbox1title">contact</div>
          <hr
            style={{
              height: "5px",
              width: "80px",
              backgroundColor: "darkgreen",
              borderRadius: "10px",
            }}
          ></hr>
          <div className="contactbox1desc">
            Feel free to Contact me by submitting the form below and I will get
            back to you as soon as possible
          </div>
        </div>
        <div className="contactbox2">
          <label>Name</label>
          <input type="name" placeholder="Enter your name...."></input>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            placeholder="Enter your email...."
            required
          ></input>
          <label>Message</label>
          <textarea
            name="message"
            placeholder="Enter your message...."
            value={message}
            onChange={(e) => setmessage(e.target.value)}
            required
            id="message"
            cols="30"
            rows="10"
          ></textarea>
          <button onClick={sendmessage} className="boxbutton">
            Message
          </button>
        </div>{" "}
        <div className={`sucess ${ssucess ? "visible" : ""}`}>
          {ssucess ? sucess : " "}
        </div>
      </div>
    </>
  );
}

export default Contact;
