import React from "react";
import Carousel from "./Carousel";
import { flats } from "../FlatData";

const FlatCard = () => {
  return (
    <div className="bg-gray-950 flex text-white border-2 mb-8 border-white rounded-xl py-7 px-5 shadow-2xl shadow-indigo-700">
      <div className="w-1/2 pr-5">
        <Carousel flatImages={flats[0].flatImages} />
      </div>
      <div className="px-5">flatDetails</div>
    </div>
  );
};

export default FlatCard;
