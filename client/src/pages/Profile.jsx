import imgs from "../assets/doctorimg.png";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { Layout } from "../components";
import { useEffect, useState } from "react";
import { fetchDoctorInfo } from "../utils/api";

AOS.init();
const Profile = () => {
  const [data, setData] = useState({
    password: "",
    email: "",
    username: "",
    name: "",
    qualifications: "",
    description: "",
    hospitalName: "",
    specialization: "",
  });
  useEffect(() => {
    const func = async () => {
      const result = await fetchDoctorInfo();
      if (result) {
        setData(result);
      }
    };
    func();
  }, []);
  return (
    <Layout>
      <div className="flex flex-col md:flex-row w-full justify-around items-center">
        <img src={imgs} alt="doctorProfile" />
        <div className="border-4 border-secondary m-8 md:m-2 pl-8 pr-40 py-20 w-max">
          <p>Name: {data.name}</p>
          <p>Qualifications: {data.qualifications}</p>
          <p>Description: {data.description}</p>
          <p>Hospital Name: {data.hospitalName}</p>
          <p>Specialization: {data.specialization}</p>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
