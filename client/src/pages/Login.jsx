import AOS from "aos";
import "aos/dist/aos.css";
import React, { useState } from "react";
import LoginNotification from "../assets/Login-notfication.svg";
import { Layout, Login, Register } from "../components";

AOS.init();
const LoginPage = () => {
  const [register, setRegister] = useState(false);
  return (
    <Layout>
      <div className="flex flex-col md:flex-row w-full h-full items-center p-2 md:p-4">
        <img
          src={LoginNotification}
          alt="frontline"
          className="max-w-4xl w-1/2 md:p-20 md:m-2 m-8"
        />
        <div className="w-full">
          {register ? (
            <Register setRegister={setRegister} />
          ) : (
            <Login setRegister={setRegister} />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;
