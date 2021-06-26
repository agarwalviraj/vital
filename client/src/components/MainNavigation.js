import React, { useState } from "react";
import classes from "./MainNavigation.module.css";
import vital from "./Logovital.png";
import { Link } from "react-router-dom";
import alert from "./Vector.png";
import Alertcard from "./Alertcard.js";
function MainNavigation() {
  const [display, setDisplay] = useState(false);
  return (
    <div>
      <header className={classes.header}>
        <img className={classes.logo} src={vital} alt="" />
        <ul className={classes.ul}>
          <li className={classes.li}>
            <Link className={classes.link} to="/home">
              Home
            </Link>{" "}
          </li>
          <li className={classes.li}>
            <Link className={classes.link} to="/patient">
              Patient
            </Link>{" "}
          </li>
          <li className={classes.li}>
            <Link className={classes.link} to="/profile">
              Profile
            </Link>{" "}
          </li>
        </ul>
      </header>
      <button
        className={classes.alert}
        onClick={() => {
          setDisplay(true);
        }}
      >
        <img className={classes.al} src={alert} />
      </button>

      {display && <Alertcard closealert={setDisplay} />}
    </div>
  );
}

export default MainNavigation;
