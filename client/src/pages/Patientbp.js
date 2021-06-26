import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import patientsList from "../data/patients.json";

const Patientbp = () => {
  const { id } = useParams();
  const patientData = patientsList.filter((arr) => arr.id === Number(id))[0];
  console.log(id);

  useEffect(() => {
    console.log(id);
  }, [id]);
  return (
    <div>
      <div>
        <p>{patientData.name}</p>
      </div>
    </div>
  );
};

export default Patientbp;
