import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../store/userSlice";
import axios from "axios";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State to track mobile menu open/close

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen); // Toggle the state
  };

  const loginStatus = useSelector((state) => state.user.status);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fetchUser = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/users/current-user`,
        { withCredentials: true }
      );
      console.log(data);
      if (data && data.success) {
        dispatch(addUser(data.data));
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const navItems = [
    {
      name: "SignIn",
      url: "/signin",
      active: !loginStatus,
    },
    {
      name: "Sign Up",
      url: "/signup",
      active: !loginStatus,
    },
    {
      name: "WishList",
      url: "/wishlist",
      active: loginStatus,
    },
    {
      name: "Your Listings",
      url: "/listings",
      active: loginStatus,
    },
  ];

  const handleLogout = async () => {
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/users/logout`,
        {}, // passing empty object as second argument in post request is data
        { withCredentials: true }
      );
      console.log(data);
      if (data && data.success) {
        dispatch(removeUser());
        navigate("/signin");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <header className="bg-gray-950 border-b-2 border-indigo-700 ">
        <nav className="flex justify-between  py-4 px-7">
          <Link to="/">
            <Logo />
          </Link>
          <ul className="flex items-center">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <Link to={item.url}>
                    <Button className="hidden md:block" children={item.name} />
                  </Link>
                </li>
              ) : null
            )}
            {loginStatus && (
              <li>
                <Button
                  onClick={handleLogout}
                  className="hidden md:block"
                  children={"Logout"}
                />
              </li>
            )}

            <button onClick={toggleMobileMenu}>
              <FontAwesomeIcon
                icon={isMobileMenuOpen ? faTimes : faBars}
                className="md:hidden text-indigo-700 h-7 w-7"
              />
            </button>
          </ul>
        </nav>
      </header>
      {isMobileMenuOpen && (
        <div className="bg-gray-950 py-4 px-7 md:hidden">
          {navItems.map((item) =>
            item.active ? (
              <Link to={item.url}>
                <div className="flex my-4 mx-2 hover:bg-indigo-700 p-2 text-2xl justify-center text-white rounded-lg border-2 border-white">
                  {item.name}
                </div>
              </Link>
            ) : null
          )}
          {loginStatus && ( // Adding logout button for logged-in users
            <div
              onClick={handleLogout}
              className="flex my-4 mx-2 hover:bg-indigo-700 p-2 text-2xl justify-center text-white rounded-lg border-2 border-white"
            >
              Logout
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Header;
