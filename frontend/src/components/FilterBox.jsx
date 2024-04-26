import React from "react";
import Button from "./Button";

const FilterBox = () => {
  return (
    <div className=" hidden md:block bg-gray-950 w-3/12 h-fit text-white border-2 border-white rounded-xl shadow-2xl shadow-indigo-700">
      <div className="font-medium text-2xl bg-indigo-700 hover:bg-indigo-500 py-2 m-6 rounded-xl border-2 border-white text-center cursor-pointer">
        <h1>FILTERS</h1>
      </div>
      <h1 className="font-medium text-xl py-2 mt-3 mx-6 ">BHK Type</h1>
      <div className="flex flex-wrap jutsify-between mx-6 text-gray-400">
        <div className="py-2  mx-6 font-medium text-xl ">
          <input type="checkbox" id="1BHK" className="h-4 w-4 mr-2" />
          <label for="1BHK">1BHK</label>
        </div>
        <div className="py-2 mx-6 font-medium text-xl ">
          <input type="checkbox" id="2BHK" className="h-4 w-4 mr-2" />
          <label for="2BHK">2BHK</label>
        </div>
        <div className="py-2 mx-6 font-medium text-xl ">
          <input type="checkbox" id="3BHK" className="h-4 w-4 mr-2" />
          <label for="3BHK">3BHK</label>
        </div>
        <div className="py-2 mx-6 font-medium text-xl ">
          <input type="checkbox" id="4BHK" className="h-4 w-4 mr-2" />
          <label for="4BHK">4BHK+</label>
        </div>
      </div>
      <h1 className="font-medium text-xl py-2 mt-3 mx-6 ">
        Rent Range:{" "}
        <span className="text-gray-400 text-lg">₹ 0 to ₹ 1 Lac</span>
      </h1>
      <input type="range" className="py-2 mx-6 w-4/5" min={0} max={100000} />
      <h1 className="font-medium text-xl py-2 mx-6 ">Availability</h1>
      <div className="flex flex-wrap jutsify-between mx-6 text-gray-400">
        <div className="py-2  mx-6 font-medium text-xl ">
          <input
            type="radio"
            id="Immediate"
            name="availability"
            className="h-4 w-4 mr-2"
          />
          <label for="Immediate">Immediate</label>
        </div>
        <div className="py-2 mx-6 font-medium text-xl ">
          <input
            type="radio"
            id="Within 15 Days"
            name="availability"
            className="h-4 w-4 mr-2"
          />
          <label for="Within 15 Days">Within 15 Days</label>
        </div>
        <div className="py-2 mx-6 font-medium text-xl ">
          <input
            type="radio"
            id="3Within 30 DaysBHK"
            name="availability"
            className="h-4 w-4 mr-2"
          />
          <label for="3BWithin 30 DaysHK">Within 30 Days</label>
        </div>
        <div className="py-2 mx-6 font-medium text-xl ">
          <input
            type="radio"
            id="After 30 Days"
            name="availability"
            className="h-4 w-4 mr-2"
          />
          <label for="After 30 Days">After 30 Days</label>
        </div>
      </div>
      <h1 className="font-medium text-xl py-2 mt-3 mx-6 ">
        Preferrred Tenants
      </h1>
      <div className="flex flex-wrap jutsify-between mx-6 text-gray-400">
        <div className="py-2  mx-6 font-medium text-xl ">
          <input type="checkbox" id="Family" className="h-4 w-4 mr-2" />
          <label for="Family">Family</label>
        </div>
        <div className="py-2 mx-6 font-medium text-xl ">
          <input type="checkbox" id="Male" className="h-4 w-4 mr-2" />
          <label for="Male">Male</label>
        </div>
        <div className="py-2 mx-6 font-medium text-xl ">
          <input type="checkbox" id="Female" className="h-4 w-4 mr-2" />
          <label for="Female">Female</label>
        </div>
        <div className="py-2 mx-6 font-medium text-xl ">
          <input type="checkbox" id="Anyone" className="h-4 w-4 mr-2" />
          <label for="Anyone">Anyone</label>
        </div>
      </div>
      <h1 className="font-medium text-xl py-2 mt-3 mx-6 ">Furnishing</h1>
      <div className="flex flex-wrap jutsify-between mx-6 text-gray-400">
        <div className="py-2  mx-6 font-medium text-xl ">
          <input type="checkbox" id="Full" className="h-4 w-4 mr-2" />
          <label for="Full">Full</label>
        </div>
        <div className="py-2 mx-6 font-medium text-xl ">
          <input type="checkbox" id="Semi" className="h-4 w-4 mr-2" />
          <label for="Semi">Semi</label>
        </div>
      </div>
      <Button children={"Apply"} className={`m-5 mx-6 text-center`} />
    </div>
  );
};

export default FilterBox;
