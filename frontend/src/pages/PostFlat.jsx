import React, { useState } from "react";
import {
  faHome,
  faIndianRupeeSign,
  faCity,
  faMapMarkerAlt,
  faCalendarAlt,
  faPerson,
  faNoteSticky,
  faCouch,
} from "@fortawesome/free-solid-svg-icons";
import Input from "../components/Input";
import Select from "../components/Select";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

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
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

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
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(flatData);
    try {
      const formData = new FormData();
      for (const key in flatData) {
        if (key === "flatImages") {
          Array.from(flatData.flatImages).forEach((file) => {
            formData.append("flatImages", file);
          });
        } else {
          formData.append(key, flatData[key]);
        }
        console.log(key, flatData[key]);
      }

      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/flats`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );

      if (data && data.success) {
        navigate("/listings");
      } else {
        setErrorMessage("Something went wrong while posting the flat");
        setFlatData(initialState);
      }
    } catch (error) {
      setErrorMessage("Something went wrong while posting the flat");
      setFlatData(initialState);
      console.error("Error posting flat data:", error);
    }
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
            icon={faNoteSticky}
          />
          <Input
            placeholder="Description"
            name="description"
            value={flatData.description}
            onChange={handleChange}
            icon={faNoteSticky}
          />

          <Select
            placeholder="Flat Type"
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
          <Select
            placeholder="City"
            name="city"
            value={flatData.city}
            onChange={handleChange}
            icon={faCity}
            options={[
              { value: "Bengaluru", label: "Bengaluru" },
              { value: "Hyderabad", label: "Hyderabad" },
              { value: "Gurugram", label: "Gurugram" },
              { value: "Noida", label: "Noida" },
            ]}
          />
          <Input
            placeholder="Area"
            name="area"
            value={flatData.area}
            onChange={handleChange}
            icon={faCity}
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
            icon={faPerson}
            options={[
              { value: "Male", label: "Male" },
              { value: "Female", label: "Female" },
              { value: "Anyone", label: "Anyone" },
            ]}
          />

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
            icon={faCouch}
            options={[
              { value: "full", label: "Fully Furnished" },
              { value: "semi", label: "Semi Furnished" },
              { value: "none", label: "Unfurnished" },
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
          <div className="relative w-4/5 m-2">
            <label className="block mb-4 text-white text-xl">Flat Images</label>
            <input
              type="file"
              name="flatImages"
              multiple
              onChange={handleChange}
              accept="image/*"
              className="w-full p-4 text-white bg-gray-900 border-2 border-white rounded-lg"
            />
          </div>
          <p className="text-red-500 font-mdium text-xl">{errorMessage}</p>
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
