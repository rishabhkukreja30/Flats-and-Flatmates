import React, { useState } from "react";
import Carousel from "./Carousel";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, removeFromWishlist } from "../store/userSlice";

const FlatCard = ({ flat }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.user.userData);
  const wishlist = userData ? userData.wishList : [];
  const isInWishlist = wishlist.includes(flat._id);
  const [inWishlist, setInWishlist] = useState(isInWishlist);

  const toggleWishlist = async () => {
    if (!userData) {
      navigate("/signin");
      return;
    }

    try {
      if (inWishlist) {
        // remove from wishlist
        const { data } = await axios.delete(
          `${import.meta.env.VITE_BACKEND_URL}/users/wishlist`,
          { data: { flatId: flat._id }, withCredentials: true }
        );

        if (data.success) {
          setInWishlist(false);
          dispatch(removeFromWishlist(flat._id));
        } else {
          console.error("Failed to remove from wishlist");
        }
      } else {
        // add to wiishlist
        const { data } = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/users/wishlist`,
          {
            flatId: flat._id,
          },
          { withCredentials: true }
        );

        if (data.success) {
          setInWishlist(true);
          dispatch(addToWishlist(flat._id));
        } else {
          console.error("Failed to add to wishlist");
        }
      }
    } catch (error) {
      console.error("Failed to toggle wishlist ", error);
    }
  };

  return (
    <div className="bg-gray-950 flex flex-col md:flex-row overflow-auto text-white border-2 mb-8 border-white rounded-xl py-7 px-5 shadow-2xl shadow-indigo-700 ">
      <div className="w-full md:w-1/2 pr-5">
        <Link to={`/flats/${flat._id}`}>
          <Carousel flatImages={flat.flatImages} />
        </Link>
      </div>
      <div className="px-5 w-full md:w-1/2 text-center">
        {/* <FontAwesomeIcon icon={faHeart} className="w-8 h-8 p-5 float-right" /> */}
        <button onClick={toggleWishlist} className="m-4 float-right">
          <FontAwesomeIcon
            icon={faHeart}
            className={`w-8 h-8 ${inWishlist ? "text-red-500" : ""}`}
          />
        </button>
        <h1 className="p-2 font-medium text-3xl">{flat.title}</h1>
        <h2 className="p-2 text-gray-400 font-medium">{flat.description}</h2>
        <div className="flex flex-wrap m-2 p-2 h-3/5  rounded-xl">
          <div className="w-1/2 p-3">
            <h1 className="p-2 font-medium text-3xl">{flat.flatType}</h1>
            <h2 className=" text-gray-400 font-medium">Apartment Type</h2>
          </div>
          <div className="w-1/2 p-3">
            <h1 className="p-2 font-medium text-3xl">{flat.furnishing}</h1>
            <h2 className=" text-gray-400 font-medium">Furnishing</h2>
          </div>
          <div className="w-1/2 p-3">
            <h1 className="p-2 font-medium text-3xl">{flat.preference}</h1>
            <h2 className=" text-gray-400 font-medium">Preferred Tenants</h2>
          </div>
          <div className="w-1/2 p-3">
            <h1 className="p-2 font-medium text-3xl">
              {new Date(flat.availableFrom).toLocaleDateString()}
            </h1>
            <h2 className=" text-gray-400 font-medium">Available From</h2>
          </div>
          <div className="w-1/2 p-3">
            <h1 className="p-2 font-medium text-3xl">₹ {flat.roomRent}</h1>
            <h2 className=" text-gray-400 font-medium">Rent</h2>
          </div>
          <div className="w-1/2 p-3">
            <h1 className="p-2 font-medium text-3xl">{flat.city}</h1>
            <h2 className=" text-gray-400 font-medium">City</h2>
          </div>
        </div>
      </div>
      {/* </Link> */}
    </div>
  );
};

export default FlatCard;
