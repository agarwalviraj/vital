import { useEffect } from "react";
import { useParams } from "react-router-dom";
import patientsList from "../data/patients.json";
import classes from "./Patient1.module.css";
import Chart from "../components/Chart.js";
import bp from "../components/BP.png";
import graph from "../components/graph.png";
import heart from "../components/heart.png";
import temperature from "../components/temperature.png";
import { Link } from "react-router-dom";
import "aos/dist/aos.css"; // You can also use <link> for styles
import AOS from "aos";
AOS.init();
const Patient = () => {
  const { id } = useParams();
  const patientData = patientsList.filter((arr) => arr.id === Number(id))[0];
  console.log(id);

  useEffect(() => {
    console.log(id);
  }, [id]);
  return (
    <div>
      <div
        data-aos="fade-right"
        data-aos-duration="1500"
        className={classes.patientbox}
      >
        <div className={classes.imgholder}></div>
        <p className={classes.name}>{patientData.name}</p>
        <p className={classes.sex}>
          <span className={classes.ques}>AGE:</span>
          {patientData.age}
        </p>
        <p className={classes.Sex}>
          <span className={classes.ques}>SEX:</span>
          {patientData.sex}
        </p>
        <p className={classes.hospital}>
          <span className={classes.ques}>Hospital:</span>
          {patientData.hospitalName}
        </p>
        <p className={classes.description}>
          <span className={classes.ques}>Description:</span>
          {patientData.description}
        </p>
        <button className={classes.icon1}>
          <p className={classes.innertext}>BP:120/80</p>
          <img className={classes.icon} src={bp} />
        </button>

        <button className={classes.icon2}>
          <p className={classes.innertext}>Blood O2:98%</p>
          <img className={classes.icon5} src={heart} />
        </button>

        <button className={classes.icon3}>
          <p className={classes.innertext}>Temp:96°F</p>
          <img className={classes.icon5} src={temperature} />
        </button>

        <button className={classes.icon4}>
          <p className={classes.innertext}>Heart:60bps</p>
          <img className={classes.icon5} src={graph} />
        </button>
      </div>
      <div className={classes.graph}>
        <p
          data-aos="fade-top"
          data-aos-duration="1500"
          className={classes.gtext}
        >
          Blood Oxygen
        </p>
        <Chart
          data-aos="fade-top"
          data-aos-duration="1500"
          socketName={"TimBloodPressure"}
        />
        <p
          data-aos="fade-top"
          data-aos-duration="1500"
          className={classes.gtext}
        >
          Blood Pressure
        </p>
        <Chart
          data-aos="fade-top"
          data-aos-duration="1500"
          socketName={"TimBloodPressure"}
        />
        <p
          data-aos="fade-top"
          data-aos-duration="1500"
          className={classes.gtext}
        >
          Temperature
        </p>
        <Chart socketName={"TimBloodPressure"} />
        <p
          data-aos="fade-top"
          data-aos-duration="1500"
          className={classes.gtext}
        >
          Heart rate
        </p>
        <Chart
          data-aos="fade-top"
          data-aos-duration="1500"
          socketName={"TimBloodPressure"}
        />
      </div>
    </div>
  );
};

export default Patient;
