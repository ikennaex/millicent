import React from "react";
import "./herosection.css"

const Herosection = () => {
  return (
    <div className="mx-auto container ">
      <div className="text-center py-7 px-7 mb-7">
        <h1 className="tracking-tighter pb-7 text-6xl font-extrabold">Hub of <span className="text-custompurple">GiftCards</span> & <span className="text-custompurple">Digital Payment</span> Solutions</h1>
        <p className="pb-7">Millicent is the best platform to buy and sell gift cards, pay utility bills and at the best rates too.</p>
        <button className="millicent-btn bg-customgreen text-white">Get Started</button>
      </div>
    </div>
  );
};

export default Herosection;
