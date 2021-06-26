import React, { useState, useContext } from "react";
import { GoAlert } from "react-icons/go";
import vital from "../assets/Logovital.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../store/authContext";
const Navbar = () => {
  const [display, setDisplay] = useState(false);
  const { signOut } = useContext(AuthContext);
  return (
    <div>
      <header className="flex md:flex-row flex-col justify-between mt-2 px-20 items-center">
        <Link to="/" className="w-24 mb-8 cursor-pointer my-auto">
          <img src={vital} alt="Logo" />
        </Link>
        <nav>
          <ul className="flex w-full p-4">
            <Link to="/" className="cursor-pointer px-8">
              Home
            </Link>
            <Link to="/profile" className="cursor-pointer px-8">
              Profile
            </Link>
            <li className="cursor-pointer px-8" onClick={signOut}>
              Sign out
            </li>
          </ul>
        </nav>
      </header>
      <button
        className="bottom-0 right-0 fixed m-8 p-8 text-5xl text-red-600"
        onClick={() => {
          setDisplay(true);
        }}
      >
        <GoAlert />
      </button>
    </div>
  );
};

export default Navbar;
