import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Chart, Layout } from "../components";
import { fetchPatients } from "../utils/api";

const Patient = () => {
  const { id } = useParams();
  const [patient, setPatient] = useState([]);

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
        <div className="flex w-full flex-col md:flex-row">
          <ul className="border-2 border-primary m-4 w-1/2">
            <li>Name: {patient.name}</li>
            <li>Age:{patient.age}</li>
            <li>Sex:{patient.sex}</li>
            <li>Description:{patient.description}</li>
            <li>Hospital Name:{patient.hospitalName}</li>
          </ul>
          {/* <Chart
            socketName={`TimBloodPressure`}
            width={200}
            height={200}
            className="flex"
          /> */}

          <div className="flex flex-wrap w-full">
            {patient.vitals
              ? patient.vitals.map((vital) => (
                  <Chart
                    socketName={`${patient.name}${vital}`}
                    width={500}
                    height={200}
                    className="m-4"
                  />
                ))
              : null}
          </div>
        </div>
      ) : null}
    </Layout>
  );
};

export default Patient;
