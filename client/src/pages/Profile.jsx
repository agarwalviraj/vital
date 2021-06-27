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
      console.log(result);
      setData((oldData) => ({ ...oldData, ...result }));
      console.log(data);
    };
    func();
  }, []);
  return (
    <Layout>
      {data ? (
        <div className="flex md:flex-row w-full items-center justify-center mt-40">
          <div  data-aos="fade-right" data-aos-duration="1500" className="flex items-center flex-col">
            <img data-aos="fade-right" data-aos-duration="1500"
              src={imgs}
              alt="doctorProfile"
              className="w-80 h-80 object-cover m-2 rounded-full "
            />
            <span data-aos="fade-right" data-aos-duration="1500" className="font-semibold text-2xl"> {data.name}</span>
          </div>
          <div  data-aos="fade-left" data-aos-duration="1500" className="flex flex-col shadow-xl bg-blue-200 p-10 w-1/5 py-20 rounded-lg text-lg m-8 leading-6">
            <p className="my-2">
              <span className="font-semibold my-2">Qualifications:</span>
              {data.qualifications}
            </p>
            <p className="my-2">
              <span className="font-semibold my-2">Description: </span>
              {data.description}
            </p>
            <p className="my-2">
              <span className="font-semibold my-2">Hospital Name: </span>
              {data.hospitalName}
            </p>
            <p className="my-2">
              <span className="font-semibold my-2">Specialization: </span>
              {data.specialization}
            </p>
          </div>
        </div>
      ) : null}
    </Layout>
  );
};

export default Profile;
