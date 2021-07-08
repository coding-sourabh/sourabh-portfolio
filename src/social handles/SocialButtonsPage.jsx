import React from "react";
import "./social.scss";

function SocialButtonsPage() {
  return (
    <div className="social">
      <a
        href="https://www.linkedin.com/in/sourabh-kumar-464178197/"
        className="fa fa-linkedin ic"
        target="_blank"
      ></a>
      <a
        href="https://github.com/coding-sourabh"
        className="fa fa-github ic"
        target="_blank"
      ></a>
      <a
        href="https://www.facebook.com/profile.php?id=100004532386780"
        className="fa fa-facebook ic"
        target="_blank"
      ></a>
      <a
        href="https://www.instagram.com/aroma_sourabh/"
        className="fa fa-instagram ic"
        target="_blank"
      ></a>
      <a href="#" className="fa fa-whatsapp ic" target="_blank"></a>
    </div>
  );
}

export default SocialButtonsPage;
