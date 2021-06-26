import axios from "axios";
import { toast } from "react-toastify";
export const instance = axios.create({
  baseURL: `https://hackvital.herokuapp.com/`,
});

export const handleRegister = async (payload) => {
  try {
    const res = await instance.post("/user/register", payload);
    if (!res.data.success) {
      handleError(res.data.message);
      return res.data;
    } else {
      payload.emailOrUsername = payload.email;
      const loginRes = await instance.post("/user/login", payload);
      if (!loginRes.data.success) {
        handleError(loginRes.data.message);
      }
      return loginRes.data;
    }
  } catch (err) {
    handleError("Oops! Something went wrong.");
    return false;
  }
};

export const handleLogin = async (payload) => {
  try {
    const res = await instance.post("/user/login", payload);
    if (!res.data.success) {
      handleError(res.data.message);
    }
    return res.data;
  } catch (err) {
    handleError("Oops! Something went wrong.");
    return false;
  }
};

export const fetchPatients = async (payload) => {
  try {
    const res = await instance.get("/patient/?DrMail=jhondoe@gmail.com");
    if (!res.data.success) {
      handleError(res.data.message);
    }
    if (payload) return res.data.find((x) => x._id === payload);
    return res.data;
  } catch (err) {
    handleError("Oops! Something went wrong.");
    return false;
  }
};

export const fetchDoctorInfo = async () => {
  try {
    const res = await instance.get("/user/?DrMail=a@a.com");
    if (!res.data.success) {
      handleError(res.data.message);
    }
    return res.data;
  } catch (err) {
    handleError("Oops! Something went wrong.");
    return false;
  }
};

const handleError = (msg) => {
  toast.error(msg);
};
