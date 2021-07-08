import React , {useState} from "react";
import "./portfolio.scss";
import PortfolioList from "../portfolioList/PortfolioList";

// Here modify data according to the need later

function Portfolio() {
  const [selected, setselected] = useState("featured");
  

  const list = [
    { id: "featured", title: "Featured" },
    { id: "web", title: "Web App" },
    { id: "mobile", title: "Mobile App" },
    { id: "branding", title: "Branding" },
  ];
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setselected={setselected}
            id = {item.id}
          />
        ))}
      </ul>

      <div className="container">
        <div className="item">
          <img src="assets/banking.jpg" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="assets/banking.jpg" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="assets/banking.jpg" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="assets/banking.jpg" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="assets/banking.jpg" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="assets/banking.jpg" />
          <h3>Banking App</h3>
        </div>
      </div>
    </div>
  ); 
}

export default Portfolio;
