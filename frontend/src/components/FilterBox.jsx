import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFilters, resetFilters } from "../store/filterSlice";
import Button from "./Button";

const FilterBox = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    let updatedValue;

    if (type === "checkbox") {
      updatedValue = {
        ...filters[name],
        [value]: checked,
      };
    } else {
      updatedValue = value;
    }

    dispatch(updateFilters({ [name]: updatedValue }));
  };

  const setFiltersToInitialState = () => {
    dispatch(resetFilters());
  };

  return (
    <div className="w-full h-fit bg-gray-950 md:w-3/12 text-white border-2 border-white rounded-xl shadow-2xl mr-10 shadow-indigo-700">
      <div className="font-medium text-2xl bg-indigo-700 hover:bg-indigo-500 py-2 m-6 rounded-xl border-2 border-white text-center cursor-pointer">
        <h1>FILTERS</h1>
      </div>
      <h1 className="font-medium text-xl py-2 mx-6">City</h1>
      <div className="flex flex-wrap justify-between mx-6 text-gray-400">
        {["Bengaluru", "Hyderabad", "Gurugram", "Noida"].map((city) => (
          <div key={city} className="py-2 mx-6 font-medium text-xl">
            <input
              type="radio"
              id={city}
              name="city"
              value={city}
              checked={filters.city === city}
              onChange={handleInputChange}
              className="h-4 w-4 mr-2"
            />
            <label htmlFor={city}>{city}</label>
          </div>
        ))}
      </div>
      <h1 className="font-medium text-xl py-2 mt-3 mx-6">BHK Type</h1>
      <div className="flex flex-wrap justify-between mx-6 text-gray-400">
        {["1BHK", "2BHK", "3BHK", "4BHK+"].map((bhk) => (
          <div key={bhk} className="py-2 mx-6 font-medium text-xl">
            <input
              type="checkbox"
              id={bhk}
              name="bhk"
              value={bhk}
              checked={filters.bhk[bhk]}
              onChange={handleInputChange}
              className="h-4 w-4 mr-2"
            />
            <label htmlFor={bhk}>{bhk}</label>
          </div>
        ))}
      </div>
      <h1 className="font-medium text-xl py-2 mt-3 mx-6">
        Rent Range
        <span className="pl-2 text-gray-400 text-lg">
          ₹ 0 to ₹ {filters.rentRange}
        </span>
      </h1>
      <input
        type="range"
        className="py-2 mx-6 w-4/5"
        min={0}
        max={100000}
        name="rentRange"
        value={filters.rentRange}
        onChange={handleInputChange}
      />
      <h1 className="font-medium text-xl py-2 mx-6">Availability</h1>
      <div className="flex flex-wrap justify-between mx-6 text-gray-400">
        {["Immediate", "Within 15 Days", "Within 30 Days", "After 30 Days"].map(
          (availability) => (
            <div key={availability} className="py-2 mx-6 font-medium text-xl">
              <input
                type="radio"
                id={availability}
                name="availability"
                value={availability}
                checked={filters.availability === availability}
                onChange={handleInputChange}
                className="h-4 w-4 mr-2"
              />
              <label htmlFor={availability}>{availability}</label>
            </div>
          )
        )}
      </div>
      <h1 className="font-medium text-xl py-2 mt-3 mx-6">Preferred Tenants</h1>
      <div className="flex flex-wrap justify-between mx-6 text-gray-400">
        {["Family", "Male", "Female", "Anyone"].map((tenant) => (
          <div key={tenant} className="py-2 mx-6 font-medium text-xl">
            <input
              type="checkbox"
              id={tenant}
              name="tenants"
              value={tenant}
              checked={filters.tenants[tenant]}
              onChange={handleInputChange}
              className="h-4 w-4 mr-2"
            />
            <label htmlFor={tenant}>{tenant}</label>
          </div>
        ))}
      </div>
      <h1 className="font-medium text-xl py-2 mt-3 mx-6">Furnishing</h1>
      <div className="flex flex-wrap justify-between mx-6 text-gray-400">
        {["Full", "Semi", "None"].map((furnishing) => (
          <div key={furnishing} className="py-2 mx-6 font-medium text-xl">
            <input
              type="checkbox"
              id={furnishing}
              name="furnishing"
              value={furnishing}
              checked={filters.furnishing[furnishing]}
              onChange={handleInputChange}
              className="h-4 w-4 mr-2"
            />
            <label htmlFor={furnishing}>{furnishing}</label>
          </div>
        ))}
      </div>
      <Button
        onClick={setFiltersToInitialState}
        children={"Reset"}
        className={`m-5 mx-6 text-center`}
      />
    </div>
  );
};

export default FilterBox;
