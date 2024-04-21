import React from "react";

const Button = ({
  children,
  type = "button",
  bgColor = "bg-indigo-700",
  textColor = "text-white",
  className = "",
  ...props
}) => {
  return (
    <div>
      <button
        type={`${type}`}
        className={` px-4 py-2 mr-4 rounded-lg hover:bg-indigo-500 ${bgColor} ${textColor} ${className}`}
        {...props}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;