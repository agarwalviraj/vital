import React, { useState } from "react";
import classes from "./Login.module.css";
import frontline from "../components/Group 58.png";
import MainNavigation from "../components/MainNavigation";
import imgg from "../components/Get Alerts on the go..png";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
AOS.init();
function Login() {
  return (
    <div className={classes.dig}>
      {/* <img className={classes.imgg} src={imgg} /> */}
      <img className={classes.img} src={frontline} />
      <div
        data-aos="fade-left"
        data-aos-duration="1500"
        className={classes.For}
      >
        <form className={classes.form}>
          <div className={classes.log}>
            <p className={classes.login}>Log Into Vital+</p>
          </div>
          <label className={classes.email} for="email">
            Email:
          </label>
          <input type="text" className={classes.ei}></input>
          <label className={classes.password} for="password">
            Password:
          </label>
          <input type="password" className={classes.pw}></input>
          <Link className={classes.link} to="/home">
            <button className={classes.btn}>Submit</button>
          </Link>
          <div className={classes.orl}>
            <p className={classes.or}>Don't have an account?</p>
          </div>
          <div className={classes.or1}>
            <Link className={classes.link} to="/register">
              <p className={classes.o2}>Click here to register</p>
            </Link>
          </div>
          {/* <button className={classes.btn1}>G Login using google</button>
          <button className={classes.btn2}>G Signup</button> */}
        </form>
      </div>
    </div>
  );
}

export default Login;
