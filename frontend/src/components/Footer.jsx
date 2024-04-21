import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
          <div className="mb-4 md:mb-0 text-center">
            <h3 className="text-lg font-semibold">Flats N Flatmates</h3>
            <p className="text-sm">A brief description of the company.</p>
          </div>
          <div className="mb-4 md:mb-0 text-center">
            <h4 className="text-lg font-semibold mb-2">Links</h4>
            <ul>
              <li className="mb-2">
                <a href="#">Home</a>
              </li>
              <li className="mb-2">
                <a href="#">About</a>
              </li>
              <li className="mb-2">
                <a href="#">Services</a>
              </li>
              <li className="mb-2">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-2">Social Media</h4>
            <ul>
              <li className="mb-2">
                <a href="#">Facebook</a>
              </li>
              <li className="mb-2">
                <a href="#">Twitter</a>
              </li>
              <li className="mb-2">
                <a href="#">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2024 Flats N Flatmates. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
