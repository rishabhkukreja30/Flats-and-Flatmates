import React from "react";
import FlatCard from "../components/FlatCard";
import FilterBox from "../components/FilterBox";
import { useSelector } from "react-redux";
import Shimmer from "../components/Shimmer";
import { filterFlats } from "../utils/filterFlats";

const FlatsListing = () => {
  const flats = useSelector((state) => state.flats?.flatData);
  const filters = useSelector((state) => state.filters);
  // console.log(flats);
  // console.log(filters);

  const filteredFlats = filterFlats(flats, filters);
  // console.log(filteredFlats);

  return !flats ? (
    <Shimmer />
  ) : (
    <div className="bg-slate-900 p-10 md:flex-row justify-center flex flex-col">
      <FilterBox />
      <div className="md:w-9/12 md:ml-10">
        {filteredFlats?.map((flat) => (
          <FlatCard key={flat._id} flat={flat} />
        ))}
      </div>
    </div>
  );
};

export default FlatsListing;
