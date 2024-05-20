import React from "react";
import { useSelector } from "react-redux";
import FlatCard from "../components/FlatCard";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const Listings = () => {
  const { listings } = useSelector((state) => state.user.userData);
  const flats = useSelector((state) => state.flats.flatData);
  const flatsListedByUser = flats.filter((flat) => listings.includes(flat._id));
  console.log(flatsListedByUser);

  return (
    <div className="text-white bg-slate-900 p-10 flex flex-wrap justify-center">
      {flatsListedByUser.map((flat) => (
        <FlatCard key={flat._id} flat={flat} icon={[faTrash, faEdit]} />
      ))}
    </div>
  );
};

export default Listings;
