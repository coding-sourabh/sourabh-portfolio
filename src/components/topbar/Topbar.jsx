import React from "react";
import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";

export default function Topbar({ menuOpen, setmenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>


      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            {" "}
            Sourabh
          </a>
          {/* <div className="itemContainer"> */}
            {/* <Person className="icon" /> */}
            {/* <span>+91-9871718472</span> */}
          {/* </div> */}
          {/* <div className="itemContainer"> */}
            {/* <Mail className="icon" /> */}
            {/* <span>imsourabhkumar99@gmail.com</span> */}
          {/* </div> */}
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setmenuOpen(!menuOpen)}>
            <span classsName="line1"></span>
            <span classsName="line2"></span>
            <span classsName="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
