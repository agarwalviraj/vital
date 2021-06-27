import React from "react";
import { Layout } from "../components";
import about from "../assets/about.svg";
import viraj from "../assets/viraj.svg";
import kartikey from "../assets/kartikey.svg";
import vedant from "../assets/vedant.svg";
import bhurva from "../assets/bhurva.svg";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
function About() {
  return (
    <Layout>
      <div className="h-100">
        <div className="flex flex-col lg:flex-row">
          <div
            className="flex flex-col xl:ml-40 m-2 sm:m-8 mx-0"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <h1 className="text-5xl mt-10 md:mx-0 mx-auto">
              About <span className="text-green-400">Us</span>
            </h1>
            <p className="text-justify w-90 text-2xl mt-5 ">
              Vital is a one-of-a-kind healthcare solution to increasing
              efficency minus the commuincation hassel.&nbsp;
              <span>
                Get real-time updates from the patients bedside to yours.
                Experience a seamless integration of human and machine with tech
                that doesn’t work for you but with you.
              </span>
            </p>
          </div>
          <img
            data-aos="fade-left"
            data-aos-duration="1500"
            src={about}
            className="h-4/6 mt-10 w-full mx-auto lg:mx-32 md:box hidden"
            alt="dp"
          />
        </div>
        <div
          className="flex m-8 xl:ml-40 mt-24 flex-col"
          data-aos="fade-top"
          data-aos-duration="1500"
        >
          <h1 className="text-5xl mx-auto md:mx-0">
            Meet the <span className="text-red-500">Team</span>
          </h1>
          <div className="flex lg:flex-nowrap flex-wrap flex-row justify-center items-start">
            <div className="sm:w-1/4 sm:mt-10 sm:mx-5 flex justify-center flex-col text-center py-3">
              <img className="h-40" src={viraj} alt="dp" />
              <p className="text-2xl">Viraj Agarwal</p>
              <p className="text-xl">
                Web dev guru who agrees to pretty much everything.
              </p>
            </div>
            <div className=" sm:w-1/4 sm:mt-10 sm:mx-5 flex justify-center flex-col text-center py-3">
              <img className="h-40" src={kartikey} alt="dp" />
              <p className="text-2xl">Kartikey Mahawar</p>
              <p className="text-xl">
                App developer with a solution for anything and excellent comic
                timing.
              </p>
            </div>
            <div className=" sm:w-1/4 sm:mt-10 sm:mx-5 flex justify-center flex-col text-center py-3">
              <img className="h-40" src={vedant} alt="dp" />
              <p className="text-2xl">Vedant Singh</p>
              <p className="text-xl">
                Sleep deprived front end and design guy who can bring any idea
                to life.
              </p>
            </div>
            <div className="sm:w-1/4 sm:mt-10 sm:mx-5 flex justify-center flex-col text-center py-3">
              <img className="h-40" src={bhurva} alt="dp" />
              <p className="text-2xl">Bhurva Sharma</p>
              <p className="text-xl ">
                UI/UX design frontend, content , and chronic cookie baker.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default About;
