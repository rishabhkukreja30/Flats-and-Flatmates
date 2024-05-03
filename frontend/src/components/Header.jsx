import React, { useState } from "react";
import Logo from "./Logo";
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State to track mobile menu open/close

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen); // Toggle the state
  };

  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "SignIn",
      url: "/signin",
      active: !authStatus,
    },
    {
      name: "Sign Up",
      url: "/signup",
      active: !authStatus,
    },
    {
      name: "WishList",
      url: "/wishlist",
      active: !authStatus,
    },
    {
      name: "Listings",
      url: "/listings",
      active: !authStatus,
    },
  ];

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
            {authStatus && (
              <li>
                <Button className="hidden md:block" children={"Logout"} />
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
        </div>
      )}
    </>
  );
};

export default Header;
