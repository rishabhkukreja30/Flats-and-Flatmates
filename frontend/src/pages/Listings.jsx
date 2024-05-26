import React from "react";
import { useSelector } from "react-redux";
import ListedFlat from "../components/ListedFlat";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Listings = () => {
  const { listings } = useSelector((state) => state.user.userData);
  const flats = useSelector((state) => state.flats.flatData);
  const flatsListedByUser = flats.filter((flat) => listings.includes(flat._id));

  return flatsListedByUser.length === 0 ? (
    <div className=" text-center text-white bg-slate-900 p-10">
      <div className="text-2xl text-bold p-10">No Flats Listed</div>
      <Link to="/flats/postflat">
        <Button children={"Add Your Flat"} />
      </Link>
    </div>
  ) : (
    <div className="text-white bg-slate-900 p-10 flex flex-wrap justify-center">
      {flatsListedByUser.map((flat) => (
        <ListedFlat key={flat._id} flat={flat} />
      ))}
    </div>
  );
};

export default Listings;
