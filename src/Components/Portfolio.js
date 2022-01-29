import React from "react";
import PortfolioLink from "./PortfolioLink";
const Portfolio = (props) => {
  return (
    <div>
        <div className="portfolio_card">
        <div className="portfolioimg">
          <img className="portfolio_img" src= {props.imgsc} />
        </div>
          <div className="portfolio_text">
            <h4>
              <b>{props.namesc}</b>
            </h4>
            <div className="portfolio_button" style={{display:"flex"}}>
            <p>{props.textsc}</p>
            <a href="./PortfolioLink"><img src="https://img.icons8.com/color/48/000000/plus--v3.png"/></a>
            </div>

          </div>
        </div>
      </div>
    
  );
};

export default Portfolio;
