import React from "react";
import ImageGallery from "../components/ImageGallery";
import { faHeart, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const FlatDetails = () => {
  const params = useParams();
  const flats = useSelector((state) => state.flats?.flatData);
  // console.log(flats);
  const flat = flats?.filter((flat) => flat._id !== params);
  console.log(flat[0]);

  return !flat ? (
    <div>Loading ...</div>
  ) : (
    <div>
      <div className="bg-slate-900 p-10 flex flex-col md:flex-row text-white">
        <div className="w-full md:w-1/2">
          <ImageGallery images={flat[0]?.flatImages} />
        </div>
        <div className="w-full md:w-1/2 bg-gray-950 m-4 ml-0 border-2 border-white p-4 rounded-lg shadow-lg shadow-indigo-700 md:border-l-0 overflow-auto">
          <FontAwesomeIcon icon={faHeart} className="w-8 h-8 p-5 float-right" />
          <h1 className="text-center text-white font-bold text-2xl">
            {flat[0]?.title}
          </h1>
          <h2 className="p-2 text-center text-gray-400 font-medium">
            {flat[0]?.description}
          </h2>
          <div className="border-2 border-white p-5 m-4 rounded-lg flex flex-wrap  overflow-auto justify-center">
            <div className="md:w-1/3 w-full text-center p-3">
              <h1 className="p-2 font-medium text-3xl">{flat[0]?.flatType}</h1>
              <h2 className=" text-gray-400 font-medium">Apartment Type</h2>
            </div>
            <div className="md:w-1/3 w-full text-center p-3">
              <h1 className="p-2 font-medium text-3xl">
                {flat[0]?.furnishing}
              </h1>
              <h2 className=" text-gray-400 font-medium">Furnishing</h2>
            </div>
            <div className="md:w-1/3 w-full text-center  p-3">
              <h1 className="p-2 font-medium text-3xl">
                {flat[0]?.preference}
              </h1>
              <h2 className=" text-gray-400 font-medium">Preferred Tenants</h2>
            </div>
            <div className="md:w-1/3 w-full text-center p-3">
              <h1 className="p-2 font-medium text-3xl">
                ₹ {flat[0]?.roomRent}
              </h1>
              <h2 className=" text-gray-400 font-medium">Room Rent</h2>
            </div>
            <div className="md:w-1/3 w-full text-center  p-3">
              <h1 className="p-2 font-medium text-3xl">
                ₹ {flat[0]?.flatRent}
              </h1>
              <h2 className=" text-gray-400 font-medium">Flat Rent</h2>
            </div>
            <div className="md:w-1/3 w-full text-center  p-3">
              <h1 className="p-2 font-medium text-3xl">₹ {flat[0]?.deposit}</h1>
              <h2 className=" text-gray-400 font-medium">Deposit</h2>
            </div>
            <div className="md:w-1/3 w-full text-center  p-3">
              <h1 className="p-2 font-medium text-3xl">{flat[0]?.city}</h1>
              <h2 className=" text-gray-400 font-medium">City</h2>
            </div>
            <div className="md:w-1/3 w-full text-center  p-3">
              <h1 className="p-2 font-medium text-3xl">{flat[0]?.area}</h1>
              <h2 className=" text-gray-400 font-medium">Area</h2>
            </div>
            <div className="md:w-1/3 w-full text-center  p-3">
              <h1 className="p-2 font-medium text-3xl">
                {new Date(flat[0].availableFrom).toLocaleDateString()}
              </h1>
              <h2 className=" text-gray-400 font-medium">Available From</h2>
            </div>
            <div className="md:w-1/3 w-full text-center">
              <Link to={flat[0].location}>
                <FontAwesomeIcon icon={faLocationDot} className="p-3 h-8 w-8" />
              </Link>
              <h2 className=" text-gray-400 font-medium">Location</h2>
            </div>
            <div className="md:w-1/3 w-full text-center  p-3">
              <h1 className="p-2 font-medium text-3xl">
                {flat[0]?.postedByName}
              </h1>
              <h2 className=" text-gray-400 font-medium">Posted By</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlatDetails;
