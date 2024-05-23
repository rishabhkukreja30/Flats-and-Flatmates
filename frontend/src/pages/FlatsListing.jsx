import React, { useEffect } from "react";
import FlatCard from "../components/FlatCard";
import FilterBox from "../components/FilterBox";
import { useSelector } from "react-redux";

const FlatsListing = () => {
  const flats = useSelector((state) => state.flats?.flatData);

  return !flats ? (
    <div>Loading ...</div>
  ) : (
    <div className="bg-slate-900 p-10 md:flex-row justify-center flex flex-col">
      <FilterBox />
      <div className="md:w-9/12 md:ml-10">
        {flats?.map((flat) => (
          <FlatCard key={flat._id} flat={flat} />
        ))}
      </div>
    </div>
  );
};

export default FlatsListing;
