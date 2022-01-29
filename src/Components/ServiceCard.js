import React from "react";
import Services from "./Services";
import Sdata from "./Sdata";
function ServiceCards(valueS) {
  return (
    <Services
      imgsc={valueS.imgsrc}
      namesc={valueS.sname}
      textsc={valueS.text}
    />
  );
}
const ServiceCard = () => {
  return (
    <div>
      <div className="Service_card1">
        <h1>SERVICES</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="card_responsive">{Sdata.map(ServiceCards)}</div>
    </div>
  );
};

export default ServiceCard;
