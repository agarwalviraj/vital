import React, { useState, useContext } from "react";
import { GoAlert } from "react-icons/go";
import vital from "../assets/vital.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../store/authContext";
import AlertPage from "./AlertPage";
const Navbar = () => {
  const [display, setDisplay] = useState(false);
  const { signOut } = useContext(AuthContext);
  return (
    <div className="font-semibold">
      <header className="flex md:flex-row flex-col justify-between pt-2 px-20 items-center">
        <Link to="/" className=" mb-8 cursor-pointer my-auto">
          <img
            src={vital}
            alt="Logo"
            className=" object-cover object-left w-64 h-10 mt-10"
          />
        </Link>
        <nav>
          <ul className="flex w-full p-4">
            <Link to="/" className="cursor-pointer px-8">
              Home
            </Link>
            <Link to="/profile" className="cursor-pointer px-8">
              Profile
            </Link>
            <Link to="/aboutus" className="cursor-pointer px-8">
              About us
            </Link>
            <li className="cursor-pointer px-8" onClick={signOut}>
              Sign out
            </li>
          </ul>
        </nav>
      </header>
      <button
        className="bottom-0 right-0 fixed md:m-4 p-8  text-5xl text-red-600 focus:outline-none z-30"
        onClick={() => {
          setDisplay(!display);
        }}
      >
        <GoAlert />
      </button>
      {display ? <AlertPage setDisplay={setDisplay} /> : null}
    </div>
  );
};

export default Navbar;
