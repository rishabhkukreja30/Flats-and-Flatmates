import React, { useState } from "react";
import Input from "../components/Input";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faLock, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleSignup = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="bg-slate-900 flex  justify-center">
      <div className=" bg-gray-950 md:w-2/5 w-full text-white border-2 border-white rounded-xl py-7 px-2 my-20 flex flex-col items-center shadow-2xl shadow-indigo-700">
        <h1 className="font-medium text-3xl p-2 text-center">
          Find Your Pefect Flatmate with
        </h1>
        <h1 className="font-medium text-4xl p-2  text-indigo-700 text-center">
          Flats N Flatmates
        </h1>
        <Input placeholder="Enter Username" icon={faUser} />
        {!isSignIn && <Input placeholder="Enter Full Name" icon={faUser} />}
        {!isSignIn && (
          <Input placeholder="Enter email" type="email" icon={faEnvelope} />
        )}
        {!isSignIn && (
          <Input
            placeholder="Phone Number (Optional)"
            type="tel"
            icon={faPhone}
          />
        )}

        <Input placeholder="Password" type="password" icon={faLock} />
        {!isSignIn && (
          <Input placeholder="Confirm Password" type="password" icon={faLock} />
        )}
        <Button
          children={isSignIn ? "Login" : "Sign Up"}
          className="w-full mt-4 flex justify-center"
        />
        {isSignIn ? (
          <p className="my-4">
            Don’t have an account?
            <span className="mx-2 text-indigo-700 hover:text-indigo-500">
              <Link to="/signup" onClick={toggleSignup}>
                Sign up
              </Link>
            </span>
          </p>
        ) : (
          <p className="my-4">
            Already have an account?
            <span className="mx-2 text-indigo-700 hover:text-indigo-500">
              <Link to="/signin" onClick={toggleSignup}>
                Sign in
              </Link>
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default SignIn;
