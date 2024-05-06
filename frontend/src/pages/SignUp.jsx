import React, { useRef, useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { faLock, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope, faUser } from "@fortawesome/free-regular-svg-icons";
import { checkSignupData } from "../utils/validate";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../store/userSlice";

const SignUp = () => {
  const email = useRef(null);
  const password = useRef(null);
  const confirmPssword = useRef(null);
  const username = useRef(null);
  const phoneNumber = useRef(null);
  const fullName = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // validate the form data
    const message = checkSignupData(
      username.current.value,
      fullName.current.value,
      email.current.value,
      phoneNumber.current.value,
      password.current.value,
      confirmPssword.current.value
    );
    setErrorMessage(message);

    if (message) return;

    // send backend request to /login to sign in he user
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/users/register`,
        {
          username: username.current.value,
          email: email.current.value,
          password: password.current.value,
          fullName: fullName.current.value,
          phoneNumber: phoneNumber.current.value,
        }
      );
      console.log(data);
      if (data && data.success) {
        dispatch(addUser(data.data));
        navigate("/");
      } else if (data && !data.success) {
        setErrorMessage(data.message);
      }
    } catch (error) {
      setErrorMessage("Unable to Sign Up");
      console.error(error);
    }

    // console.log(res.data);
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
        <form
          className="w-full flex flex-col items-center "
          onSubmit={(e) => handleSubmit(e)}
        >
          <Input
            inputRef={username}
            placeholder="Enter Username"
            icon={faUser}
          />
          <Input
            inputRef={fullName}
            placeholder="Enter Full Name"
            icon={faUser}
          />
          <Input
            inputRef={email}
            placeholder="Enter email"
            type="email"
            icon={faEnvelope}
          />
          <Input
            inputRef={phoneNumber}
            placeholder="Phone Number (Optional)"
            type="tel"
            icon={faPhone}
          />
          <Input
            inputRef={password}
            placeholder="Password"
            type="password"
            icon={faLock}
          />
          <Input
            inputRef={confirmPssword}
            placeholder="Confirm Password"
            type="password"
            icon={faLock}
          />
          <p className="text-red-500 font-mdium text-xl">{errorMessage}</p>
          <Button
            type="submit"
            children={"Sign Up"}
            className="w-full mt-4 flex justify-center"
          />
        </form>
        <p className="my-4">
          Already have an account?
          <span className="mx-2 text-indigo-700 hover:text-indigo-500">
            <Link to="/signin">Sign in</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
