import React, { useState } from "react";
import "./works.scss";

function Works() {
  const [currentSlide, setcurrentSlide] = useState(0);

  const data = [
    {
      id: 1,
      title: "Movie-Trailer",
      icon: "./assets/netfilxProjectss.png",
      desp: "Built an front-end React web app which fetches movies data from TMDB movie api end points.Plays trailer on youtube, using react-youtube package.Uses react-redux and firebase for authentication.",
      link: "https://github.com/coding-sourabh/netflix-clone",
    },
    {
      id: 2,
      title: "Algorithm-Visualizer",
      icon: "./assets/ag.png",
      desp: "Built an Algorithm Visualizer using ReactJS . Using this web app we can visualize the working of different algorithms and compare their performance with eye pleasing UI.",
      link: "https://github.com/coding-sourabh/algorithm-visualizer",
    },
    {
      id: 3,
      title: "Ecommerce-Website",
      icon: "./assets/ec.png",
      desp: "Built an Ecommerce web app. We can add and remove different product in baskets for purchase. Firebase platform is used for authentication and database.",
      link: "https://github.com/coding-sourabh/MyBasket-Ecommerce-website",
    },
  ];

  const handleClickLeft = (way) => {
    way === "left"
      ? setcurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length - 1)
      : setcurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="works" id="works">
     <h1>Projects</h1>
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desp}</p>
                  <span>
                    {" "}
                    <a href={d.link} target="_blank">
                      Project Link{" "}
                    </a>{" "}
                  </span>
                </div>
              </div>

              <div className="right">
                <img src={d.icon} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        className="arrow left"
        src="assets/rightArrow.png"
        onClick={() => handleClickLeft("left")}
      />
      <img
        className="arrow right"
        src="assets/rightArrow.png"
        onClick={() => handleClickLeft("right")}
      />
    </div>
  );
}

export default Works;
