import React, { useState, useContext } from "react";
import { FiSearch } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { PatientCard, Layout } from "../components";
import { useEffect } from "react";
import { fetchPatients } from "../utils/api";
import { toast } from "react-toastify";
import { AlertContext } from "../store/alertContext";
AOS.init();

const Home = () => {
  const [patients, setPatients] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { getAlerts, alerts } = useContext(AlertContext);
  useEffect(() => {
    getAlerts();
    if (alerts) {
      toast.warn("There are urgent alerts", {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }
    const func = async () => {
      const result = await fetchPatients();
      setPatients(result);
    };
    func();
  }, []);
  return (
    <Layout>
      <div data-aos="fade-down" data-aos-duration="1500" className="h-full">
        {/* {patients[0] ? <PatientCard patient={patients[0]} /> : ""} */}
        <div className="flex bg-blue-200 h-14 px-2 md:px-10 w-3/4 mx-auto rounded-lg shadow-sm mt-10">
          <FiSearch className="px-2 w-1/6 lg:w-1/12 h-full py-4" />
          <input
            className="w-full bg-blue-200 focus:outline-none h-full text-xl"
            type="text"
            value={searchTerm}
            placeholder="Search patients here..."
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className="flex items-center justify-center flex-col"
        >
          {patients
            ? patients.map((patient) => {
                if (
                  !searchTerm ||
                  patient.name
                    .toLowerCase()
                    .includes(searchTerm.toLocaleLowerCase())
                )
                  return <PatientCard key={patient._id} patient={patient} />;
                else return null;
              })
            : null}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
