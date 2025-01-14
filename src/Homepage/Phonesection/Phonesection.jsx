import React from "react";
import { appleplay, googleplay } from "../../../imports";

const Phonesection = () => {
  return (
    <div className="container mx-auto">
      <div className="bg-custompurple px-7 py-7">
        <h3 className="text-sectionheader text-white pb-7">
          Trade your GiftCards and Pay your bills from anywhere in Nigeria
        </h3>

        <div className="flex items-center gap-3">
          <img className="h-12" src={googleplay} alt="" />
          <img className="h-12" src={appleplay} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Phonesection;
