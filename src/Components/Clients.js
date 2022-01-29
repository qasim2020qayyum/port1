import React from "react";
import CountUp from "react-countup";

const Clients = () => {
  return (
    <div>
    <div className="parallex">
      <div className="client">
        <div className="client_com">
        <img src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/50/000000/external-tick-delivery-kiranshastry-lineal-kiranshastry.png"/>          <p></p>
          <CountUp start={0} end={100} duration={5} />
          <h4 className="client_h4">WORKS COMPLETED</h4>
        </div>
        <div className="client_com">
        <img src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/50/000000/external-journal-news-kiranshastry-lineal-kiranshastry.png"/>          <p></p>
          <CountUp start={0} end={150} duration={5} />
          <h4 className="client_h4">Month of experience</h4>
        </div>
        <div className="client_com">
        <img src="https://img.icons8.com/ios/50/000000/conference-call.png"/>          <p></p>
          <CountUp start={0} end={200} duration={5} />
          <h4 className="client_h4">Total Clients</h4>
        </div>
        <div className="client_com">
        <img src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/50/000000/external-tick-delivery-kiranshastry-lineal-kiranshastry.png"/>          <p></p>
          <CountUp start={0} end={170} duration={5} />
          <h4 className="client_h4">Skills</h4>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Clients;
