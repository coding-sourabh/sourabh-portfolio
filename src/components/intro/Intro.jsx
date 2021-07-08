import React, { useEffect, useRef } from "react";
import "./intro.scss";
import { init } from "ityped";

function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1500,
      showCursor: true,
      strings: ["Competetive Coder", "Gamer", "Content Creator"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/me.png" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2> Hi There , I'm </h2>
          <h1>Sourabh Kumar</h1>
          <h3>
            Developer <span ref={textRef}> </span>
          </h3>

          <a className="cv btn1" href="#contact">
            Hire me
          </a>
          <a
            className="cv"
            href="https://drive.google.com/file/d/1WWuATSSfdPBY2Kl9oYXsRNkIwN2SStlS/view"
            target="_blank"
          >
            View CV
          </a>
        </div>
        <a href="#works">
          <img className = "arrowMove" src="..\assets\rightArrow.png" />
        </a>
      </div>
    </div>
  );
}

export default Intro;
