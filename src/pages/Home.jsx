import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { PatientCard, Layout } from "../components";
import { useEffect } from "react";
import { fetchPatients } from "../utils/api";
AOS.init();

const Home = () => {
  const [patients, setPatients] = useState([]);
  // const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    const func = async () => {
      const result = await fetchPatients();
      setPatients(result);
    };
    func();
  }, []);
  return (
    <Layout>
      <div>
        {/* {patients[0] ? <PatientCard patient={patients[0]} /> : ""} */}
        {patients
          ? patients.map((patient) => {
              return <PatientCard key={patient._id} patient={patient} />;
            })
          : null}
      </div>
    </Layout>
  );
};

export default Home;
