import React, { useState } from "react";
import {
  faHome,
  faIndianRupeeSign,
  faCity,
  faMapMarkerAlt,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import Input from "../components/Input";
import Select from "../components/Select";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PostFlat = () => {
  const initialState = {
    title: "",
    description: "",
    flatType: "",
    city: "",
    area: "",
    location: "",
    roomRent: "",
    flatRent: "",
    preference: "",
    availableFrom: "",
    deposit: "",
    furnishing: "",
    flatImages: [],
  };

  const [flatData, setFlatData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFlatData((prevState) => ({
        ...prevState,
        flatImages: files,
      }));
    } else {
      setFlatData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(flatData);
  };

  const handleReset = () => {
    setFlatData(initialState);
  };

  return (
    <div className="bg-slate-900 flex justify-center">
      <div className="bg-gray-950 md:w-2/5 w-full text-white border-2 border-white rounded-xl py-7 px-2 my-20 flex flex-col items-center shadow-2xl shadow-indigo-700">
        <h1 className="font-medium text-3xl p-2 text-center">
          Post Your Flat on
        </h1>
        <h1 className="font-medium text-4xl p-2 text-indigo-700 text-center">
          Flats N Flatmates
        </h1>
        <form
          className="w-full flex flex-col items-center"
          onSubmit={handleSubmit}
        >
          <Input
            placeholder="Title"
            name="title"
            value={flatData.title}
            onChange={handleChange}
            icon={faHome}
          />
          <Input
            placeholder="Description"
            name="description"
            value={flatData.description}
            onChange={handleChange}
            icon={faHome}
          />

          <Select
            placeholder="Select Flat Type"
            name="flatType"
            value={flatData.flatType}
            onChange={handleChange}
            icon={faHome}
            options={[
              { value: "1BHK", label: "1BHK" },
              { value: "2BHK", label: "2BHK" },
              { value: "3BHK", label: "3BHK" },
              { value: "4BHK+", label: "4BHK+" },
            ]}
          />

          <Input
            placeholder="City"
            name="city"
            value={flatData.city}
            onChange={handleChange}
            icon={faCity}
          />
          <Input
            placeholder="Area"
            name="area"
            value={flatData.area}
            onChange={handleChange}
            icon={faMapMarkerAlt}
          />
          <Input
            placeholder="Location"
            name="location"
            value={flatData.location}
            onChange={handleChange}
            icon={faMapMarkerAlt}
          />
          <Input
            placeholder="Room Rent"
            name="roomRent"
            type="number"
            value={flatData.roomRent}
            onChange={handleChange}
            icon={faIndianRupeeSign}
          />
          <Input
            placeholder="Flat Rent"
            name="flatRent"
            type="number"
            value={flatData.flatRent}
            onChange={handleChange}
            icon={faIndianRupeeSign}
          />

          <Select
            placeholder="Select Preference"
            name="preference"
            value={flatData.preference}
            onChange={handleChange}
            icon={faHome}
            options={[
              { value: "male", label: "Male" },
              { value: "female", label: "Female" },
              { value: "anyone", label: "Anyone" },
            ]}
          />
          <h1 className="w-full pl-14 text-xl">Available From</h1>
          <div className="relative w-4/5 m-4">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <FontAwesomeIcon
                icon={faCalendarAlt}
                className="text-indigo-700"
              />
            </div>
            <input
              placeholder="Available From"
              name="availableFrom"
              type="date"
              value={flatData.availableFrom}
              onChange={handleChange}
              className="pl-10 w-full py-4 pr-3 text-white bg-gray-900 border-2 border-white rounded-lg"
            />
          </div>

          <Input
            placeholder="Deposit"
            name="deposit"
            type="number"
            value={flatData.deposit}
            onChange={handleChange}
            icon={faIndianRupeeSign}
          />

          <Select
            placeholder="Select Furnishing"
            name="furnishing"
            value={flatData.furnishing}
            onChange={handleChange}
            icon={faHome}
            options={[
              { value: "full", label: "Fully Furnished" },
              { value: "semi", label: "Semi Furnished" },
              { value: "none", label: "Unfurnished" },
            ]}
          />

          <div className="relative w-4/5 m-4">
            <label className="block mb-2 text-white text-xl">Flat Images</label>
            <input
              type="file"
              name="flatImages"
              multiple
              onChange={handleChange}
              className="w-full p-4 text-white bg-gray-900 border-2 border-white rounded-lg"
            />
          </div>
          <div className="flex justify-center">
            <Button children={"Reset"} className="mt-4" onClick={handleReset} />
            <Button children={"Post Flat"} className="mt-4" type="submit" />
          </div>
        </form>
        <p className="my-4">
          <span className="mx-2 text-white hover:text-indigo-500">
            <Link to="/flats">Explore More Flats</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default PostFlat;
