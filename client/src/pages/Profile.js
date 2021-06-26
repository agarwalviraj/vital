import imgs from "./doctorimg.png";
import classes from "./Profile.module.css";
import gear from '../components/settings.png'
// mport Settings from '../components/Settings.js'
// import Chance from 'chance'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function Profile() {
  var chances = require("chance").Chance();
  var doc_name = chances.name();
  var doc_age = chances.age({ type: "adult" });

  return (
    <div className={classes.layer1}>
      <div data-aos="fade-left" data-aos-duration="1500" className={classes.box}>
          <button className={classes.bin}><img className={classes.gear} src={gear} /></button>
        <p className={classes.age}>AGE:{doc_age}</p>
        <p className={classes.special}>Specialisation:kidney transplant</p>
        <p className={classes.qualif}>Qualification:MS,MD</p>
        <p className={classes.experience}>
          Experience:5 years- ABC Hospital, Mumbai
        </p>
      </div>
      <div data-aos="fade-down" data-aos-duration="1500" className={classes.img}>
        <img  className={classes.imgp} src={imgs} />
      </div>
      <p data-aos="fade-up" data-aos-duration="1500" className={classes.docN} >Dr.{doc_name}</p>
    </div>
  );
}

export default Profile;
