import React, { useState } from "react";
import classes from "./Patient.module.css";
import AOS from "aos";
import { Link } from "react-router-dom";
import "aos/dist/aos.css"; // You can also use <link> for styles
import currentPatients from "../data/patients.json";
// ..
AOS.init();

export default function Patient() {
  const [searchTerm, setSearchTerm] = useState("");

  const divlist = currentPatients
    .filter((patient) => {
      if (searchTerm == "") {
        return patient;
      } else if (
        patient.name.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return patient;
      }
    })
    .map((patient) => (
      <div data-aos="fade-up" key={patient.id} className={classes.container}>
        <div className={classes.imgbox}></div>
        <div className="table">
          <div className={classes.namebox}>
            <span className={classes.name}>Patient Name:{patient.name}</span>
          </div>
          <div className={classes.hospitalbox}>
            <span className={classes.hospital}>{patient.hospitalName}</span>
            <span className={classes.age}>age:{patient.age}</span>
            <span className={classes.sex}>sex:{patient.sex}</span>

            <button className={classes.view}>
              <Link
                className={classes.link}
                to={`/patient/${patient.id}/${patient.name}`}
              >
                View
              </Link>
            </button>
          </div>
          <div className={classes.detailbox}>
            <span className={classes.bp}>
              Blood pressure:{patient.bloodPress}
            </span>
            <span className={classes.o2}>Blood O2:{patient.bloodO2}</span>
            <span className={classes.temp}>Temperature:{patient.temp}</span>
            <span className={classes.heart}>Heart :{patient.heartRate}</span>
          </div>
        </div>
      </div>
    ));
  return (
    <div>
      <div className={classes.scroll}>
        <input
          className={classes.search}
          type="text"
          placeholder="Search your patient..."
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </div>
      <div className={classes.inbox}></div>
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        className={classes.screen}
      >
        {divlist}
      </div>
    </div>
  );
}
