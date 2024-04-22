import React, { useState } from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State to track mobile menu open/close

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen); // Toggle the state
  };

  return (
    <>
      <header className="bg-gray-950 border-b-2 border-indigo-700 ">
        <nav className="flex justify-between  py-4 px-7">
          <Link to="/">
            <Logo />
          </Link>
          <div className="flex items-center">
            <Link to="/signin">
              <Button className="hidden md:block" children={"SignIn"} />
            </Link>

            <button onClick={toggleMobileMenu}>
              <FontAwesomeIcon
                icon={isMobileMenuOpen ? faTimes : faBars}
                className="md:hidden text-indigo-700 h-7 w-7"
              />
            </button>
          </div>
        </nav>
      </header>
      {isMobileMenuOpen && (
        <div className="bg-gray-950 py-4 px-7 md:hidden">
          <Link to="/signin">
            <div className="flex m-1 hover:bg-indigo-700 p-2 text-2xl justify-center text-white rounded-lg border-2 border-white">
              SignIn
            </div>
          </Link>

          {/* Add more menu items here if needed */}
        </div>
      )}
    </>
  );
};

export default Header;
