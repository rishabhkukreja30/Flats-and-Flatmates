import React from "react";
import Carousel from "./Carousel";
import {
  faEdit,
  faLocationDot,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { deleteFlat } from "../store/flatsSlice";
import { removeFlatFromListings } from "../store/userSlice";

const ListedFlat = ({ flat }) => {
  const dispatch = useDispatch();

  const handleDelete = async () => {
    try {
      const { data } = await axios.delete(
        `${import.meta.env.VITE_BACKEND_URL}/flats/${flat._id}`,
        { withCredentials: true }
      );
      if (data.success) {
        dispatch(deleteFlat(flat._id));
        dispatch(removeFlatFromListings(flat._id));
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-gray-950 flex flex-col md:flex-row overflow-auto text-white border-2 mb-8 border-white rounded-xl py-7 px-5 shadow-2xl shadow-indigo-700 relative">
      <div className="w-full md:w-1/2 pr-5">
        {/* <Link to={`/flats/${flat._id}`}> */}
        <Carousel flatImages={flat.flatImages} />
        {/* </Link> */}
      </div>
      <div className="px-5 w-full md:w-1/2 text-center">
        <div className="absolute top-2 right-2 flex ">
          {/* <button
            to={`/edit-flat/${flat._id}`}
            className="text-blue-500 hover:text-blue-700 m-4"
          >
            <FontAwesomeIcon icon={faEdit} className="w-8 h-8" />
          </button> */}
          <button
            onClick={handleDelete}
            className="text-red-500 hover:text-red-700 m-4"
          >
            <FontAwesomeIcon icon={faTrash} className="w-8 h-8" />
          </button>
        </div>
        <h1 className="p-2 font-medium text-3xl">{flat.title}</h1>
        <h2 className="p-2 text-gray-400 font-medium">{flat.description}</h2>
        <div className="flex flex-wrap justify-center m-2 p-2 h-3/5 rounded-xl">
          <div className="w-1/3 p-3">
            <h1 className="p-2 font-medium text-3xl">{flat.flatType}</h1>
            <h2 className="text-gray-400 font-medium">Apartment Type</h2>
          </div>
          <div className="w-1/3 p-3">
            <h1 className="p-2 font-medium text-3xl">{flat.furnishing}</h1>
            <h2 className="text-gray-400 font-medium">Furnishing</h2>
          </div>
          <div className="w-1/3 p-3">
            <h1 className="p-2 font-medium text-3xl">{flat.preference}</h1>
            <h2 className="text-gray-400 font-medium">Preferred Tenants</h2>
          </div>
          <div className="w-1/3 p-3">
            <h1 className="p-2 font-medium text-3xl">
              {new Date(flat.availableFrom).toLocaleDateString()}
            </h1>
            <h2 className="text-gray-400 font-medium">Available From</h2>
          </div>
          <div className="w-1/3 p-3">
            <h1 className="p-2 font-medium text-3xl">₹ {flat.roomRent}</h1>
            <h2 className="text-gray-400 font-medium">Room Rent</h2>
          </div>
          <div className="w-1/3 p-3">
            <h1 className="p-2 font-medium text-3xl">₹ {flat.flatRent}</h1>
            <h2 className="text-gray-400 font-medium">Flat Rent</h2>
          </div>
          <div className="w-1/3 p-3">
            <h1 className="p-2 font-medium text-3xl">{flat.deposit}</h1>
            <h2 className="text-gray-400 font-medium">Deposit</h2>
          </div>
          <div className="w-1/3 p-3">
            <h1 className="p-2 font-medium text-3xl">{flat.city}</h1>
            <h2 className="text-gray-400 font-medium">City</h2>
          </div>
          <div className="w-1/3 p-3">
            <h1 className="p-2 font-medium text-3xl">{flat.area}</h1>
            <h2 className="text-gray-400 font-medium">Area</h2>
          </div>
          <div className="w-1/3 p-3">
            <Link to={flat.location}>
              <FontAwesomeIcon icon={faLocationDot} className="p-3 h-8 w-8" />
            </Link>
            <h2 className="text-gray-400 font-medium">Location</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedFlat;
