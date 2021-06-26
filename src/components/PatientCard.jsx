import React from "react";
import { useState, useEffect, useCallback } from "react";
import image2 from "../assets/doctorimg.png";
import Chart from "./Chart";
import { useHistory } from "react-router";
import { useSocket } from "../store/socketContext";

const PatientCard = ({ patient }) => {
  const history = useHistory();
  const { _id, name, hospitalName, age, sex, desc, image, vitals } = patient;
  const socket = useSocket();
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
      setData((oldData) => ({ ...oldData, ...newObj }));
    },
    [setData]
  );
  useEffect(() => {
    if (socket) {
      if (vitals.includes("BloodPressure"))
        socket.on(`${name}BloodPressure`, (newData) =>
          updateData(newData, "BloodPressure")
        );

      if (vitals.includes("BloodO2"))
        socket.on(`${name}BloodO2`, (newData) =>
          updateData(newData, "BloodO2")
        );

      if (vitals.includes("Temperature"))
        socket.on(`${name}Temperature`, (newData) =>
          updateData(newData, "Temperature")
        );

      if (vitals.includes("HeartRate"))
        socket.on(`${name}HeartRate`, (newData) =>
          updateData(newData, "HeartRate")
        );

      // socket.on("TimBloodPressure", (newData) => updateData(newData));
    }
    return () => socket.off("TimBloodPressure");
  }, [socket, updateData]);

  return (
    <div
      key={_id}
      className="flex flex-col lg:flex-row justify-around items-center bg-primary py-5 px-10 m-8 rounded-lg"
    >
      {/* {console.log(data)} */}
      <div className="flex">
        <img
          src={image2}
          alt="Profile"
          className="w-24 h-24 object-cover m-2 rounded-full "
        />
        <div className="flex flex-col lg:w-44 lg:text-xl text-base text-left mx-5 ">
          <div>{hospitalName}</div>
          <ul>
            <li>Name: {name}</li>
            <li>Age: {age}</li>
            <li>Sex: {sex}</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-around flex-wrap lg:flex-nowrap">
        {vitals
          ? vitals.map((vital) => {
              return (
                <div className="bg-gray-300 mx-4 my-1 w-32 h-32 flex items-center">
                  <span className="mx-auto my-auto">{data[vital]}</span>
                  {/* <Chart className="mx-auto my-auto">{data[vital]}</Chart> */}
                </div>
              );
            })
          : null}
      </div>
      <button
        onClick={() => {
          history.push(`/patient/${_id}`);
        }}
      >
        Profile
      </button>
    </div>
  );
};

export default PatientCard;
