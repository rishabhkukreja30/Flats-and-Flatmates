import React from "react";
import Carousel from "./Carousel";
import { flats } from "../FlatData";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const FlatCard = () => {
  return (
    <div className="bg-gray-950 flex flex-col md:flex-row overflow-auto text-white border-2 mb-8 border-white rounded-xl py-7 px-5 shadow-2xl shadow-indigo-700 ">
      <div className="w-full md:w-1/2 pr-5">
        <Carousel flatImages={flats[0].flatImages} />
      </div>
      <Link
        to={`/flats/${flats[0].id}`}
        className="px-5 w-full md:w-1/2 text-center"
      >
        <div>
          <FontAwesomeIcon icon={faHeart} className="w-8 h-8 p-5 float-right" />
          <h1 className="p-2 font-medium text-3xl">{flats[0].title}</h1>
          <h2 className="p-2 text-gray-400 font-medium">
            {flats[0].description}
          </h2>
          <div className="flex flex-wrap m-2 p-2 h-3/5  rounded-xl">
            <div className="w-1/2 p-3">
              <h1 className="p-2 font-medium text-3xl">{flats[0].flatType}</h1>
              <h2 className=" text-gray-400 font-medium">Apartment Type</h2>
            </div>
            <div className="w-1/2 p-3">
              <h1 className="p-2 font-medium text-3xl">
                {flats[0].furnishing}
              </h1>
              <h2 className=" text-gray-400 font-medium">Furnishing</h2>
            </div>
            <div className="w-1/2 p-3">
              <h1 className="p-2 font-medium text-3xl">
                {flats[0].preferance}
              </h1>
              <h2 className=" text-gray-400 font-medium">Preferred Tenants</h2>
            </div>
            <div className="w-1/2 p-3">
              <h1 className="p-2 font-medium text-3xl">
                {flats[0].availableFrom}
              </h1>
              <h2 className=" text-gray-400 font-medium">Available From</h2>
            </div>
            <div className="w-1/2 p-3">
              <h1 className="p-2 font-medium text-3xl">{flats[0].postedBy}</h1>
              <h2 className=" text-gray-400 font-medium">Posted By</h2>
            </div>
            <div className="w-1/2 p-3">
              <h1 className="p-2 font-medium text-3xl">{flats[0].city}</h1>
              <h2 className=" text-gray-400 font-medium">City</h2>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default FlatCard;
