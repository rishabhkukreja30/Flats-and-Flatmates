import React from "react";
import { flats } from "../FlatData";
import ImageGallery from "../components/ImageGallery";
import { faHeart, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const FlatDetails = () => {
  return (
    <div>
      <div className="bg-slate-900 p-10 flex flex-col md:flex-row text-white">
        <div className="w-full md:w-1/2">
          <ImageGallery images={flats[0].flatImages} />
        </div>
        <div className="w-full md:w-1/2 bg-gray-950 m-4 ml-0 border-2 border-white p-4 rounded-lg shadow-lg shadow-indigo-700 md:border-l-0 overflow-auto">
          <FontAwesomeIcon icon={faHeart} className="w-8 h-8 p-5 float-right" />
          <h1 className="text-center text-white font-bold text-2xl">
            {flats[0].title}
          </h1>
          <h2 className="p-2 text-center text-gray-400 font-medium">
            {flats[0].description}
          </h2>
          <div className="border-2 border-white p-5 m-4 rounded-lg flex flex-wrap  overflow-auto">
            <div className="md:w-1/3 w-full text-center p-3">
              <h1 className="p-2 font-medium text-3xl">{flats[0].flatType}</h1>
              <h2 className=" text-gray-400 font-medium">Apartment Type</h2>
            </div>
            <div className="md:w-1/3 w-full text-center p-3">
              <h1 className="p-2 font-medium text-3xl">
                {flats[0].furnishing}
              </h1>
              <h2 className=" text-gray-400 font-medium">Furnishing</h2>
            </div>
            <div className="md:w-1/3 w-full text-center  p-3">
              <h1 className="p-2 font-medium text-3xl">
                {flats[0].preferance}
              </h1>
              <h2 className=" text-gray-400 font-medium">Preferred Tenants</h2>
            </div>
            <div className="md:w-1/3 w-full text-center p-3">
              <h1 className="p-2 font-medium text-3xl">
                ₹ {flats[0].roomRent}
              </h1>
              <h2 className=" text-gray-400 font-medium">Room Rent</h2>
            </div>
            <div className="md:w-1/3 w-full text-center  p-3">
              <h1 className="p-2 font-medium text-3xl">
                ₹ {flats[0].flatrent}
              </h1>
              <h2 className=" text-gray-400 font-medium">Flat Rent</h2>
            </div>
            <div className="md:w-1/3 w-full text-center  p-3">
              <h1 className="p-2 font-medium text-3xl">₹ {flats[0].deposit}</h1>
              <h2 className=" text-gray-400 font-medium">Deposit</h2>
            </div>
            <div className="md:w-1/3 w-full text-center  p-3">
              <h1 className="p-2 font-medium text-3xl">{flats[0].city}</h1>
              <h2 className=" text-gray-400 font-medium">City</h2>
            </div>
            <div className="md:w-1/3 w-full text-center  p-3">
              <h1 className="p-2 font-medium text-3xl">{flats[0].area}</h1>
              <h2 className=" text-gray-400 font-medium">Area</h2>
            </div>
            <div className="md:w-1/3 w-full text-center  p-3">
              <h1 className="p-2 font-medium text-3xl">{flats[0].postedBy}</h1>
              <h2 className=" text-gray-400 font-medium">Posted By</h2>
            </div>
            <div className="md:w-1/3 w-full text-center  p-3">
              <h1 className="p-2 font-medium text-3xl">
                {flats[0].availableFrom}
              </h1>
              <h2 className=" text-gray-400 font-medium">Available From</h2>
            </div>
            <div className="md:w-1/3 w-full text-center">
              <Link to={flats[0].location}>
                <FontAwesomeIcon icon={faLocationDot} className="p-3 h-8 w-8" />
              </Link>
              <h2 className=" text-gray-400 font-medium">Location</h2>
            </div>
            <div className="w-1/3 text-center  p-3">
              <h1 className="p-2 font-medium text-lg">{flats[0].amenities}</h1>
              <h2 className=" text-gray-400 font-medium">Ameneties</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlatDetails;
