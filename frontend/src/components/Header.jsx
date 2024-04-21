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
      <header className="bg-gray-950 shadow-md shadow-indigo-700 z-20">
        <nav className="flex justify-between items-center w-full py-4 px-7">
          <Link to="/">
            <Logo />
          </Link>
          <div className="flex items-center">
            <Link to="/signin">
              <Button
                className="hidden md:block"
                bgColor="bg-indigo-700"
                children={"SignIn"}
              />
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
        <div className="bg-gray-950 py-4 px-7">
          <Link to="/signin">
            <Button bgColor="bg-indigo-700">SignIn</Button>
          </Link>
          {/* Add more menu items here if needed */}
        </div>
      )}
    </>
  );
};

export default Header;
