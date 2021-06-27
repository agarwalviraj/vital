import admin from "firebase-admin";
import Axios from "axios";

const func = async (tokens: any, body: any, title: any) => {
  const regId = tokens && tokens.length >= 1 ? tokens : process.env.TOKEN;
  const res = await Axios({
    method: "POST",
    url: "https://fcm.googleapis.com/fcm/send",
    headers: {
      "Content-Type": "application/json",
      "Authorization": process.env.BEARER,
    },
    withCredentials: true,
    data: {
      registration_ids: regId,
      collapse_key: "type_a",
      notification: {
        title: title,
        body: body,
        sound: "default",
      },
      android: {
        priority: "high",
        sound: "default",
      },
    },
  });
  console.log(res.data);
  return res.data;
};
export default func;
