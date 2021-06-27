import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Beat from "../assets/Beat.svg";
import Blood from "../assets/Blood.svg";
import image2 from "../assets/doctorimg.png";
import Heart from "../assets/Heart.svg";
import Thermometer from "../assets/Thermometer.svg";
import { Chart, Layout } from "../components";
import { AlertContext } from "../store/alertContext";
import { fetchPatients } from "../utils/api";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

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
          <ul
            data-aos="fade-right"
            data-aos-duration="1500"
            className="flex flex-col shadow-xl bg-blue-200 lg:w-2/5 m-2 p-4 md:p-8 rounded-lg lg:ml-32 items-center text-lg"
          >
            <img
              // src={`https://hackvital.herokuapp.com/${patient.name}.jpg`}
              src={`http://localhost:3003/${patient.name}.jpg`}
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
                        className="bg-blue-100 mx-4 lg:mx-3 lg:my-2 my-4 w-24 sm:w-36 h-32 sm:h-36 flex items-center rounded-xl shadow-lg flex-col pt-4"
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

          <div
            ata-aos="fade-left"
            data-aos-duration="1500"
            className="flex flex-wrap items-center justify-center mt-4 ml-8"
          >
            {patient.vitals
              ? patient.vitals.map((vital) => (
                  <div className="flex flex-col justify-center items-center">
                    <Chart
                      socketName={`${patient.name}${vital}`}
                      width={380}
                      height={200}
                      className="m-4"
                      setBoxData={setData}
                      boxData={data}
                      vital={vital}
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
