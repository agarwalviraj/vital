import React, { useContext } from "react";
import { AlertContext } from "../store/alertContext";
import { IoAlertCircle } from "react-icons/io5";
import { ImCross } from "react-icons/im";
import { useHistory } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const AlertPage = ({ setDisplay }) => {
  const history = useHistory();
  const { alerts } = useContext(AlertContext);
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-80 backdrop-blur-lg text-white overflow-y-auto z-30 no-scrollbar">
      <div className="flex text-3xl w-full items-center justify-center my-10 z-50">
        <IoAlertCircle />
        Alerts
        <ImCross
          className="fixed right-0 top-0 m-8 cursor-pointer z-50"
          onClick={() => {
            setDisplay(false);
          }}
        />
      </div>
      {alerts
        ? alerts.map((alert) => {
            return (
              <div
                data-aos="fade-up"
                data-aos-duration="1500"
                key={alert._id}
                className="px-4 py-6 border-2 border-red-600 mx-8 my-6 rounded-lg bg-red-400 bg-opacity-80 flex justify-between z-20"
              >
                <p className="text-xl capitalize">{alert.message}</p>
                {alert.PatientId ? (
                  <button
                    className="px-4 py-1 focus:outline-none  rounded-3xl text-black hover:text-white font-semibold  border-2 border-gray-800 transition-all duration-75"
                    onClick={() => {
                      history.push(`/patient/${alert.PatientId}`);
                      setDisplay(false);
                    }}
                  >
                    View
                  </button>
                ) : (
                  ""
                )}
              </div>
            );
          })
        : null}
    </div>
  );
};

export default AlertPage;
