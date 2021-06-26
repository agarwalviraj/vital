// import { classes } from 'istanbul-lib-coverage'
// import React, {useEffect, useRef} from 'react'
// import lottie from 'lottie-web'
// import classes from './Home.module.css'
import classes from "./Home.module.css";
import imga from "../components/home.png";
import text from "../components/textfile.png";
import "aos/dist/aos.css"; // You can also use <link> for styles
import AOS from "aos";
AOS.init();
function Home() {
  // const container=useRef(null)

  // useEffect(()=> {
  //     lottie.loadAnimation({
  //         container:container.current,
  //         renderer:'svg',
  //         loop:true,
  //         autoplay:true,
  //         animationData: require('./homelottie.json')
  //     })
  // },[])

  return (
    <div>
      <img
        data-aos="fade-dowm"
        data-aos-duration="1500"
        className={classes.screen}
        src={imga}
        className={classes.img}
        alt=""
      />
      {/* <div className="container" className={classes.container} ref={container}></div> */}
    </div>
  );
}

export default Home;
