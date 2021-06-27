import axios from "axios";
import { toast } from "react-toastify";
export const instance = axios.create({
  baseURL: `http://localhost:3003/`,
});

export const validateToken = async () => {
  const token = { jwt: localStorage.getItem("id") };
  try {
    const res = await instance.post(`/authorize`, token);
    if (!res.data.success) {
      handleError(res.data.message);
      return res.data;
    } else {
      return res.data;
    }
  } catch (err) {
    handleError("Oops! Something went wrong.");
    return false;
  }
};

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
    const tokenVerify = await validateToken();
    const auth = tokenVerify.success;
    let email;
    if (auth) {
      email = tokenVerify.values.email;
    }
    const res = await instance.get(`/patient/?DrMail=${email}`);
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
    const tokenVerify = await validateToken();
    const auth = tokenVerify.success;
    let email;
    if (auth) {
      email = tokenVerify.values.email;
    }
    const res = await instance.get(`/user/?DrMail=${email}`);
    if (!res.data.success) {
      handleError(res.data.message);
    }
    return res.data;
  } catch (err) {
    handleError("Oops! Something went wrong.");
    return false;
  }
};

export const fetchAlerts = async () => {
  const tokenVerify = await validateToken();
  const auth = tokenVerify.success;
  let email;
  if (auth) {
    email = tokenVerify.values.email;
  }
  const res = await instance.get(`/user/alerts?DrMail=${email}`);
  return res.data;
};

export const postAlert = async (payload) => {
  const tokenVerify = await validateToken();
  const auth = tokenVerify.success;
  let email;
  if (auth) {
    email = tokenVerify.values.email;
  }
  payload.Doctor = email;
  try {
    const res = await instance.post("/user/alerts", payload);
    if (res) return res;
  } catch (err) {
    handleError(err);
  }
};

export const deleteAlert = async (payload) => {
  const tokenVerify = await validateToken();
  const auth = tokenVerify.success;
  let email;
  if (auth) {
    email = tokenVerify.values.email;
  }
  payload.Doctor = email;
  try {
    const res = await instance.delete(`/user/alerts?DrMail=${email}`);
    if (res) return res;
  } catch (err) {
    handleError(err);
  }
};

const handleError = (msg) => {
  toast.error(msg);
};
