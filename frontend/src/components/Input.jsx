import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Input = ({
  placeholder,
  type = "text",
  icon,
  className = "",
  ...props
}) => {
  return (
    // <div className="w-4/5 m-4">
    //   <FontAwesomeIcon icon={`${icon}`} />
    //   <input
    //     placeholder={`${placeholder}`}
    //     type={`${type}`}
    //     className="w-full px-3 py-4  text-white bg-gray-900 border-2 border-indigo-700 rounded-lg"
    //   />
    // </div>

    <div className={`relative w-4/5 m-4 ${className}`}>
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <FontAwesomeIcon icon={icon} className="text-indigo-700" />
      </div>
      <input
        placeholder={placeholder}
        type={type}
        className="pl-10 w-full py-4 pr-3 text-white bg-gray-900 border-2 border-indigo-700 rounded-lg"
        {...props}
      />
    </div>
  );
};

export default Input;
