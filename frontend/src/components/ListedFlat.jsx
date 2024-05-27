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
    <div className="bg-gray-950 flex flex-col md:flex-row overflow-auto text-white border-2 mb-8 border-white rounded-xl py-7 px-5 shadow-2xl shadow-indigo-700">
      <div className="w-full md:w-1/2 pr-5">
        <Carousel flatImages={flat.flatImages} />
      </div>
      <div className="md:px-5 w-full md:w-1/2 text-center">
        <button
          onClick={handleDelete}
          className="text-red-500 hover:text-red-700 m-4 float-right"
        >
          <FontAwesomeIcon icon={faTrash} className="w-8 h-8" />
        </button>
        <h1 className="p-2 font-medium text-3xl">{flat.title}</h1>
        <h2 className="p-2 text-gray-400 font-medium">{flat.description}</h2>
        <div className="flex flex-wrap justify-center m-2 p-2 h-3/5 rounded-xl">
          {[
            { label: "Apartment Type", value: flat.flatType },
            { label: "Furnishing", value: flat.furnishing },
            { label: "Preferred Tenants", value: flat.preference },
            {
              label: "Available From",
              value: new Date(flat.availableFrom).toLocaleDateString(),
            },
            { label: "Room Rent", value: `₹ ${flat.roomRent}` },
            { label: "Flat Rent", value: `₹ ${flat.flatRent}` },
            { label: "Deposit", value: flat.deposit },
            { label: "City", value: flat.city },
            { label: "Area", value: flat.area },
            {
              label: "Location",
              value: (
                <Link to={flat.location}>
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="p-3 h-8 w-8"
                  />
                </Link>
              ),
            },
          ].map((item, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 p-3 flex flex-col items-center"
            >
              <h1 className="p-2 font-medium text-3xl">{item.value}</h1>
              <h2 className="text-gray-400 font-medium">{item.label}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListedFlat;
