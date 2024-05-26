import React from "react";
import { useSelector } from "react-redux";
import FlatCard from "../components/FlatCard";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const WishList = () => {
  const { wishList } = useSelector((state) => state.user.userData);
  const flats = useSelector((state) => state.flats.flatData);
  const flatsWishlistedByUser = flats.filter((flat) =>
    wishList.includes(flat._id)
  );
  // console.log(flatsWishlistedByUser);

  return !flatsWishlistedByUser.length ? (
    <div className=" text-center text-white bg-slate-900 p-10">
      <div className="text-2xl text-bold p-10">Your Wishlist is Empty</div>
      <Link to="/flats">
        <Button children={"Explore Flats"} />
      </Link>
    </div>
  ) : (
    <div className="text-white bg-slate-900 p-10 flex flex-wrap justify-center">
      {flatsWishlistedByUser.map((flat) => (
        <FlatCard key={flat._id} flat={flat} />
      ))}
    </div>
  );
};

export default WishList;
