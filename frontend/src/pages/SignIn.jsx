import React, { useState } from "react";
import Input from "../components/Input";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [isSigIn, setIsSignIn] = useState(false);

  return (
    <div className="bg-slate-900 flex-grow flex  justify-center">
      <div className=" bg-gray-950 md:w-2/5 w-full text-white border-2 border-white rounded-xl py-7 px-2 my-20 flex flex-col items-center">
        <h1 className="font-medium text-3xl p-2 text-center">
          Find Your Pefect Flatmate with
        </h1>
        <h1 className="font-medium text-4xl p-2  text-indigo-700 text-center">
          Flats N Flatmates
        </h1>
        <Input placeholder="Enter Username" icon={faUser} />
        <Input placeholder="Enter Password" type="password" icon={faLock} />
        <Button
          children={"SignIn"}
          className="w-full mt-4 flex justify-center"
        />
        <p className="my-4">
          Don’t you have an account?
          <span className="mx-2 text-indigo-700 hover:text-indigo-500">
            <Link to="/signup">Sign up</Link>{" "}
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
