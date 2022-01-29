import React from "react";
import Portfolio from "./Portfolio";
import Pdata from "./Pdata";
function PortfolioCards(valueS) {
  return (
    <Portfolio
      imgsc={valueS.imgsrc}
      namesc={valueS.sname}
      textsc={valueS.desc}
    />
  );
}
const PortfolioCard = () => {
  return (
    <div>
      <div className="Portfolio_card1">
        <h1>Portfolio</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="card_responsive">{Pdata.map(PortfolioCards)}</div>
    </div>
  );
};

export default PortfolioCard;
