import React, { useState, useContext } from "react";
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
        onClick={() => {
          setDisplay(true);
        }}
      >
        hi
      </button>
    </div>
  );
};

export default Navbar;
