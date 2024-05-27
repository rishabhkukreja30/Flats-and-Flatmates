import React from "react";
import FlatCard from "../components/FlatCard";
import FilterBox from "../components/FilterBox";
import { useSelector } from "react-redux";
import Shimmer from "../components/Shimmer";
import { filterFlats } from "../utils/filterFlats";

const FlatsListing = () => {
  const flats = useSelector((state) => state.flats?.flatData);
  const filters = useSelector((state) => state.filters);

  const filteredFlats = filterFlats(flats, filters);

  if (!flats) {
    return <Shimmer />;
  }

  return (
    <div className="bg-slate-900 p-10 md:flex-row justify-center flex flex-col">
      <FilterBox />
      <div className="md:w-9/12 md:ml-10">
        {filteredFlats.length === 0 ? (
          <h2 className="text-white text-center text-3xl bg-gray-950 p-4 rounded-xl border-white border-2">
            No flats Available
          </h2>
        ) : (
          filteredFlats?.map((flat) => <FlatCard key={flat._id} flat={flat} />)
        )}
      </div>
    </div>
  );
};

export default FlatsListing;
