import React, { useContext } from "react";
import { AuthContext } from "../store/authContext";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const { isAuth } = useContext(AuthContext);
  return (
    <div className="min-h-screen bg-primary text-secondary font-medium h-auto">
      {isAuth ? <Navbar /> : ""}
      {children}
    </div>
  );
};

export default Layout;