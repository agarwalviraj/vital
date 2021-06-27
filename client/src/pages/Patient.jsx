import React, { useState, useEffect, useContext, useCallback } from "react";
import { useParams } from "react-router-dom";
import { Chart, Layout } from "../components";
import { fetchPatients } from "../utils/api";
import image2 from "../assets/doctorimg.png";
import { useSocket } from "../store/socketContext";
import Beat from "../assets/Beat.svg";
import Blood from "../assets/Blood.svg";
import Heart from "../assets/Heart.svg";
import Thermometer from "../assets/Thermometer.svg";
import { AlertContext } from "../store/alertContext";

const Patient = () => {
  const { id } = useParams();
  const { getAlerts, addAlert } = useContext(AlertContext);
  const [data, setData] = useState({
    BloodPressure: 0,
    BloodO2: 0,
    Temperature: 0,
    HeartRate: 0,
  });
  const [patient, setPatient] = useState();
  const updateData = useCallback(
    (newData, vitalName) => {
      const newObj = data;
      newObj[vitalName] = newData.value;
      if (newData.value < 60) {
        addAlert({
          message: `${vitalName} of ${patient.name} is below critical level`,
          PatientId: patient._id,
        });
      }
      setData((oldData) => ({ ...oldData, ...newObj }));
    },
    [setData]
  );
  const socket = useSocket();
  useEffect(() => {
    if (socket && patient) {
      if (patient.vitals.includes("BloodPressure"))
        socket.on(`${patient.name}BloodPressure`, (newData) => {
          updateData(newData, "BloodPressure");
        });

      if (patient.vitals.includes("BloodO2"))
        socket.on(`${patient.name}BloodO2`, (newData) => {
          updateData(newData, "BloodO2");
        });

      if (patient.vitals.includes("Temperature"))
        socket.on(`${patient.name}Temperature`, (newData) => {
          updateData(newData, "Temperature");
        });

      if (patient.vitals.includes("HeartRate"))
        socket.on(`${patient.name}HeartRate`, (newData) => {
          updateData(newData, "HeartRate");
        });

      // socket.on("TimBloodPressure", (newData) => updateData(newData));
      return () => socket.off();
    }
  }, [socket, updateData]);

  useEffect(() => {
    const func = async () => {
      const result = await fetchPatients(id);
      setPatient(result);
    };
    func();
  }, []);

  return (
    <Layout>
      {patient !== undefined ? (
        <div
          key={patient._id}
          className="flex w-full flex-col xl:flex-row justify-evenly items-center xl:items-stretch lg:mt-10"
        >
          <ul className="flex flex-col shadow-xl bg-blue-200 lg:w-2/5 m-2 p-4 md:p-8 rounded-lg lg:ml-32 items-center text-lg">
            <img
              src={image2}
              alt="Profile"
              className="w-24 h-24 object-cover m-2 rounded-full"
            />
            <div className="text-2xl text-center font-bold mb-8">
              {patient.name}
            </div>
            <div className="flex flex-wrap">
              <li className="w-full">
                <span className="font-semibold mx-2">Hospital Name:</span>
                {patient.hospitalName}
              </li>
              <li className="w-3/4">
                <span className="font-semibold mx-2">Age:</span>
                {patient.age}
              </li>
              <li className="">
                <span className="font-semibold mx-2">Sex:</span>
                {patient.sex}
              </li>
              <li>
                <span className="font-semibold mx-2">Description:</span>
                {patient.description}
              </li>
            </div>
            <div className="flex flex-wrap items-center w-full justify-center">
              {patient && patient.vitals
                ? patient.vitals.map((vital) => {
                    return (
                      <div
                        key={patient._id + vital + patient.name}
                        className="bg-gray-300 mx-4 lg:mx-3 lg:my-2 my-4 w-24 sm:w-36 h-32 sm:h-36 flex items-center rounded-xl shadow-lg flex-col pt-4"
                      >
                        {vital === "BloodPressure" ? (
                          <img src={Blood} alt="Blood" />
                        ) : null}
                        {vital === "BloodO2" ? (
                          <img src={Heart} alt="heart" />
                        ) : null}
                        {vital === "Temperature" ? (
                          <img src={Thermometer} alt="thermo" />
                        ) : null}
                        {vital === "HeartRate" ? (
                          <img src={Beat} alt="Beat" />
                        ) : null}
                        <span className="mx-auto my-auto">{data[vital]}</span>
                      </div>
                    );
                  })
                : null}
            </div>
          </ul>

          <div className="flex flex-wrap items-center justify-center mt-4 ml-8">
            {patient.vitals
              ? patient.vitals.map((vital) => (
                  <div className="flex flex-col justify-center items-center">
                    <Chart
                      socketName={`${patient.name}${vital}`}
                      width={380}
                      height={200}
                      className="m-4"
                    />
                    <div className="text-lg font-semibold mb-4">{vital}</div>
                  </div>
                ))
              : null}
          </div>
        </div>
      ) : null}
    </Layout>
  );
};

export default Patient;
