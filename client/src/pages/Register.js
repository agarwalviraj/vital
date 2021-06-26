import React from "react";
import { Link } from "react-router-dom";
import classes from "./register.module.css";
import register from "../components/register.png";
function Register() {
  return (
    <div className={classes.dig}>
      <img className={classes.img} src={register} />
      <div
        data-aos="fade-left"
        data-aos-duration="1500"
        className={classes.For}
      >
        <form className={classes.form}>
          <div className={classes.log}>
            <p className={classes.login}>Register Into Vital+</p>
          </div>
          <label className={classes.email} for="email">
            Email:
          </label>
          <input type="text" className={classes.ei}></input>
          <label className={classes.password} for="password">
            Password:
          </label>
          <input type="password" className={classes.pw}></input>
          <label className={classes.password} for="password">
            Confirm Password:
          </label>
          <input type="password" className={classes.pw}></input>
          <Link className={classes.link} to="/home">
            <button className={classes.btn}>Submit</button>
          </Link>
          <div className={classes.orl}>
            <p className={classes.or}>already have an account?</p>
          </div>
          <div className={classes.or1}>
            <Link className={classes.link} to="/Login">
              <p className={classes.o2}>Click here to login</p>
            </Link>
          </div>
          {/* <button className={classes.btn1}>G Login using google</button>
          <button className={classes.btn2}>G Signup</button> */}
        </form>
      </div>
    </div>
  );
}

export default Register;
