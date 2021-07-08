import React from "react";
import "./testimonials.scss";

function Testimonial() {
  const data = [
    {
      id: 1,
      name: "Vinayak Dhiman",
      title: "Student",
      img: "assets/linkedIn.png",
      icon: "",
      desp: "NA",
      featured: false,
    },
    {
      id: 2,
      name: "Rashmi Garg",
      title: "Student",
      img: "assets/twitter.png",
      icon: "",
      desp: "NA",
      featured: true,
    },
    {
      id: 1,
      name: "Prince Kalra",
      title: "Student",
      img: "assets/globe.jpg",
      icon: "",
      desp: "NA",
      featured: false,
    },
  ];

  return (
    <div className="testimonial" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((p) => (
          <div className={p.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/rightArrow.png" className="left" />
              <img src={p.img} className="user" />
              <img src="assets/youtube.png" className="right" />
            </div>
            <div className="center">{p.desp}</div>
            <div className="bottom">
              <h3>{p.name}</h3>
              <h4> {p.title} </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonial;
