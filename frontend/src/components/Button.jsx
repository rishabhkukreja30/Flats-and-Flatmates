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
    <div className={`${className}`}>
      <button
        type={`${type}`}
        className={`border-white border-2 px-4 py-3 mr-4 rounded-lg hover:bg-indigo-500 w-fit ${bgColor} ${textColor} `}
        {...props}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
