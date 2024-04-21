import React from "react";

const Logo = () => {
  return (
    <div className="flex border-2 text-white items-center justify-center bg-indigo-700 p-2 hover:bg-indigo-500 rounded-lg ">
      <img
        className="h-10 w-10"
        src="https://pbs.twimg.com/profile_images/1268906806232801280/Vu4FENEX_400x400.jpg"
        alt="logo"
      />
      <h1 className="px-2 py-1 text-xl font-bold">Flats N Flatmates</h1>
    </div>
  );
};

export default Logo;
