import React from "react";
import classes from "./Alertcard.module.css";
import currentPatients from "../data/patients.json";
import { Link } from "react-router-dom";
function Alertcard({ closealert }) {
  //   const alertpatient = currentPatients.filter((critical) => {
  //     if (critical.id > 1) {
  //       return critical;
  //     }
  //   });
  return (
    <div>
      <div className={classes.Alert}>
        <header className={classes.header}>
          <h1 className={classes.textalert}>Alerts</h1>
          <button
            className={classes.btn}
            onClick={() => {
              closealert(false);
            }}
          >
            X
          </button>
        </header>
        <div>
          {currentPatients
            .filter(
              (patients) =>
                patients.name === "Jenny Doe" || patients.sex == "Male"
            )
            .map((filteredperson) => (
              <div
                data-aos="fade-up"
                key={filteredperson.id}
                className={classes.container}
              >
                <div className={classes.imgbox}></div>
                <div className="table">
                  <div className={classes.namebox}>
                    <span className={classes.name}>
                      Patient Name:{filteredperson.name}
                    </span>
                  </div>
                  <div className={classes.hospitalbox}>
                    <span className={classes.hospital}>
                      {filteredperson.hospitalName}
                    </span>
                    <span className={classes.age}>
                      age:{filteredperson.age}
                    </span>
                    <span className={classes.sex}>
                      sex:{filteredperson.sex}
                    </span>
                  </div>
                  <div className={classes.detailbox}>
                    <span
                      className={
                        filteredperson.bloodPress === "180/80mmHg"
                          ? classes.bp1
                          : classes.bp
                      }
                    >
                      Blood pressure:{filteredperson.bloodPress}
                    </span>
                    <span className={classes.o2}>
                      Blood O2:{filteredperson.bloodO2}
                    </span>
                    <span className={classes.temp}>
                      Temp:{filteredperson.temp}
                    </span>
                    <span className={classes.heart}>
                      Heart :{filteredperson.heartRate}
                    </span>
                  </div>
                  <button
                    className={classes.view}
                    onClick={() => {
                      closealert(false);
                    }}
                  >
                    <Link
                      className={classes.link}
                      to={`/patient/${filteredperson.id}/${filteredperson.name}`}
                    >
                      View
                    </Link>
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Alertcard;
