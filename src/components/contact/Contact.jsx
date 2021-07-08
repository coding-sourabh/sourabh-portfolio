import React, { useState } from "react";
import "./contact.scss";

import SocialButtonsPage from "../../social handles/SocialButtonsPage";

function Contact() {
  const [message, setmessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setmessage(true);
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <div className="left_first">
          <img src="/assets/contact2.png" />
        </div>
        <div className="left_second">
          <SocialButtonsPage />
        </div>
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I w'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
}

export default Contact;
