import React from "react";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Carousel from "../components/Carousel";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Home = () => {
  const homePageImages = [
    "https://images.pexels.com/photos/3797991/pexels-photo-3797991.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3356416/pexels-photo-3356416.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3209045/pexels-photo-3209045.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];

  return (
    <div className="bg-slate-900 p-5">
      <div className="flex justify-center text-center text-white">
        <h1 className="font-bold text-3xl p-5 border-b-4 border-white shadow-lg shadow-indigo-700 rounded-xl">
          Welcome to <span className="text-indigo-700">Flats N Flatmates</span>
        </h1>
      </div>
      <div className="flex justify-center text-center text-white">
        <h1 className="font-medium text-2xl p-5">
          The only place to find your perfect Home ! Discover Your Dream
          <FontAwesomeIcon className="h-6 w-6 px-2" icon={faHouse} />
          with Us !
        </h1>
      </div>
      <div className="flex flex-col md:flex-row justify-center md:m-5 md:p-5   text-white relative">
        <div className="w-full md:w-1/2 bg-gray-950 mb-4 md:m-5 rounded-xl relative shadow-xl shadow-indigo-700">
          {/* Carousel with content */}
          <Carousel flatImages={homePageImages} />
          {/* Content */}
          <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-center p-5">
            <h2 className="text-3xl font-bold mb-4">
              Discover Your Dream Home
            </h2>
            <p className="text-lg mb-8">
              Find the perfect flat for you in your desired location.
            </p>
            <Link to="/flats">
              <Button children={"Explore Flats"} />
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 bg-gray-950 md:m-5 m-1 rounded-xl relative shadow-xl shadow-indigo-700">
          {/* Carousel with content */}
          <Carousel flatImages={homePageImages} />
          {/* Content */}
          <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-center p-5">
            <h2 className="text-3xl font-bold mb-4">List Your Flat.</h2>
            <p className="text-lg mb-8">
              Have a flat to rent out? List it here and connect with potential
              tenants.
            </p>
            <Link to="/flats">
              <Button children={"Add Your Flat"} />
            </Link>
          </div>
        </div>
      </div>
      {/* Why Choose Us section */}
      <div className="text-center text-white mt-10">
        <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
        <p className="text-lg mb-8">
          We offer a wide range of flats with various amenities to suit your
          needs. Our platform provides a seamless experience for finding and
          renting flats.
        </p>
      </div>
    </div>
  );
};

export default Home;
