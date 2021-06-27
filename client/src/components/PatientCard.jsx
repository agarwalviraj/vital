import React from "react";
import { useState, useEffect, useCallback, useContext } from "react";
import image2 from "../assets/doctorimg.png";
import { useHistory } from "react-router";
import { useSocket } from "../store/socketContext";
import Beat from "../assets/Beat.svg";
import Blood from "../assets/Blood.svg";
import Heart from "../assets/Heart.svg";
import Thermometer from "../assets/Thermometer.svg";
import { AlertContext } from "../store/alertContext";

const PatientCard = ({ patient }) => {
  const history = useHistory();
  const { _id, name, hospitalName, age, sex, desc, image, vitals } = patient;
  const socket = useSocket();
  const { getAlerts, addAlert } = useContext(AlertContext);
  const [data, setData] = useState({
    BloodPressure: 0,
    BloodO2: 0,
    Temperature: 0,
    HeartRate: 0,
  });

  const updateData = useCallback(
    (newData, vitalName) => {
      const newObj = data;
      newObj[vitalName] = newData.value;
      if (newData.value < 60) {
        addAlert({
          message: `${vitalName} of ${name} is below critical level`,
          PatientId: _id,
        });
      }
      setData((oldData) => ({ ...oldData, ...newObj }));
    },
    [setData]
  );
  useEffect(() => {
    if (socket) {
      if (vitals.includes("BloodPressure"))
        socket.on(`${name}BloodPressure`, (newData) => {
          updateData(newData, "BloodPressure");
        });

      if (vitals.includes("BloodO2"))
        socket.on(`${name}BloodO2`, (newData) => {
          updateData(newData, "BloodO2");
        });

      if (vitals.includes("Temperature"))
        socket.on(`${name}Temperature`, (newData) => {
          updateData(newData, "Temperature");
        });

      if (vitals.includes("HeartRate"))
        socket.on(`${name}HeartRate`, (newData) => {
          updateData(newData, "HeartRate");
        });

      // socket.on("TimBloodPressure", (newData) => updateData(newData));
    }
    return () => socket.off();
  }, [socket, updateData]);

  return (
    <div
      key={_id + "mainDiv"}
      className="flex flex-col mb:0 xl:flex-row justify-around items-center bg-blue-200 py-5 px-2 sm:px-10 mt-10 w-11/12 mx-4 md:mx-12 rounded-lg shadow-lg"
    >
      <div className="flex">
        <img
          // src={`https://hackvital.herokuapp.com/${name}.jpg`}
          src={`http://localhost:3003/${name}.jpg`}
          alt="Profile"
          className="w-28 h-28 object-cover m-2 ml-0 rounded-full "
        />
        <div className="flex flex-col lg:w-44 lg:text-xl text-base text-left mx-5 ">
          <div className="font-semibold uppercase text-xl">{hospitalName}</div>
          <ul>
            <li>
              <span>Name:</span> {name}
            </li>
            <li>
              <span>Age:</span> {age}
            </li>
            <li>
              <span>Sex: </span>
              {sex}
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center flex-wrap lg:flex-nowrap xl:my-0 my-8 text-2xl">
        {vitals
          ? vitals.map((vital) => {
              return (
                <div
                  key={_id + vital + name}
                  className="bg-blue-100 mx-4 lg:mx-2 lg:mt-2 mt-4 w-32 sm:w-40 h-32 sm:h-40 flex items-center rounded-xl shadow-lg flex-col pt-4"
                >
                  {vital === "BloodPressure" ? (
                    <img src={Blood} alt="Blood" />
                  ) : null}
                  {vital === "BloodO2" ? <img src={Heart} alt="heart" /> : null}
                  {vital === "Temperature" ? (
                    <img src={Thermometer} alt="thermo" />
                  ) : null}
                  {vital === "HeartRate" ? <img src={Beat} alt="Beat" /> : null}
                  <span className="mx-auto my-auto flex flex-col items-center">
                    <span className="text-sm">{vital}</span>
                    {data[vital]}
                  </span>
                </div>
              );
            })
          : null}
      </div>
      <button
        className="px-8 py-2 focus:outline-none bg-blue-200 rounded-3xl text-black hover:text-white font-semibold hover:bg-secondary border-2 border-secondary transition-all duration-75"
        onClick={() => {
          history.push(`/patient/${_id}`);
        }}
      >
        View
      </button>
    </div>
  );
};

export default PatientCard;
