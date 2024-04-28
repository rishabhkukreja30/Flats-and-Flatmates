import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();

  console.log(err);

  return (
    <div className="items-center p-5 flex flex-col min-h-screen bg-gray-950 text-white">
      <h1 className="font-bold text-3xl p-4">Oops! Something Went Wrong !!</h1>
      <div className="flex ">
        <h1 className="font-bold text-3xl p-3">Error {err.status} : </h1>
        <h1 className="font-bold text-3xl p-3">{err.error.message}</h1>
      </div>
    </div>
  );
};

export default Error;
