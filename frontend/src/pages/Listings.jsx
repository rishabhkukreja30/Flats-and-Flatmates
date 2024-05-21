import React from "react";
import { useSelector } from "react-redux";
import ListedFlat from "../components/ListedFlat";

const Listings = () => {
  const { listings } = useSelector((state) => state.user.userData);
  const flats = useSelector((state) => state.flats.flatData);
  const flatsListedByUser = flats.filter((flat) => listings.includes(flat._id));
  console.log(flatsListedByUser);

  return !flatsListedByUser ? (
    <div className="text-3xl text-center">No Flats Listed</div>
  ) : (
    <div className="text-white bg-slate-900 p-10 flex flex-wrap justify-center">
      {flatsListedByUser.map((flat) => (
        <ListedFlat key={flat._id} flat={flat} />
      ))}
    </div>
  );
};

export default Listings;
