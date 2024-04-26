import React from "react";
import FlatCard from "../components/FlatCard";
import { flats } from "../FlatData";
import FilterBox from "../components/FilterBox";

const FlatsListing = () => {
  return (
    <div className=" bg-slate-900 p-10 flex justify-between">
      <FilterBox />
      <div className="w-9/12 ml-10">
        {flats.map((flat, index) => (
          <FlatCard key={index} flat={flat} />
        ))}
      </div>
    </div>
  );
};

export default FlatsListing;
