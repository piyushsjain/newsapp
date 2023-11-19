import React, { useState } from "react";
import { Link } from "react-router-dom";
import hamburgerIcon from './hamburger.jpg'

const Navbar = () => {

  const menu = (e) => {
    console.log("hello");
    if (document.getElementById("menuList").classList.contains('hidden')) {
      document.getElementById("menuList").classList.remove("hidden");
    } else {
      document.getElementById("menuList").classList.add("hidden");
    }
  };

  return (
    <div className="w-full md:flex justify-between bg-purple-600 text-white py-2 px-3 sm:px-9 fixed top-0">
      <div className="flex justify-between">  
        <Link to="/">
          <div className="font-bold text-2xl cursor-pointer">NewsApp</div>
        </Link>
        <span className=" md:hidden cursor-pointer">
          <img
            onClick={menu}
            className="w-7 mt-1 mx-2"
            src={hamburgerIcon}
            alt="..."
          />
        </span>
      </div>
      <div id="menuList" className="md:flex hidden">
        <ul className="md:flex font-semibold md:mx-1.5 md:mt-0 mt-3">
          <Link to="/">
            <li className="cursor-pointer text-sm hover:underline md:mx-2 mt-2">
              Home
            </li>
          </Link>
          <Link to="/business">
            <li className="cursor-pointer text-sm hover:underline md:mx-2 mt-2">
              Business
            </li>
          </Link>
          <Link to="/entertainment">
            <li className="cursor-pointer text-sm hover:underline md:mx-2 mt-2">
              Entertainment
            </li>
          </Link>
          <Link to="/general">
            <li className="cursor-pointer text-sm hover:underline md:mx-2 mt-2">
              General
            </li>
          </Link>
          <Link to="/health">
            <li className="cursor-pointer text-sm hover:underline md:mx-2 mt-2">
              Health
            </li>
          </Link>
          <Link to="/science">
            <li className="cursor-pointer text-sm hover:underline md:mx-2 mt-2">
              Science
            </li>
          </Link>
          <Link to="/sports">
            <li className="cursor-pointer text-sm hover:underline md:mx-2 mt-2">
              Sports
            </li>
          </Link>
          <Link to="/technology">
            <li className="cursor-pointer text-sm hover:underline md:mx-2 mt-2">
              Technology
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;