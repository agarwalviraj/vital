import mongoose from "mongoose";
import { Socket } from "socket.io";

const bloodPressureModel = mongoose.model(
  "BloodPressure",
  new mongoose.Schema({
    time: String,
    value: String,
  })
);

let data: { time: String; value: number };

const updateData = (vital: number) => {
  data = {
    time: new Date().toLocaleString("en-IN"),
    value: vital,
  };
};

const bloodPressure = (socket: Socket, upRange: number, lowRange: number) => {
  setInterval(() => {
    const vital = Math.random() * (upRange - lowRange) + lowRange;
    updateData(vital);
    socket.emit("bloodPressure", data);
  }, 2000);
};

setInterval(() => {
  console.log(data);
  const newData = new bloodPressureModel(data);
  try {
    newData.save((err: any) => {
      if (err) console.error("could not add bloodpressure");
    });
  } catch (err) {
    console.error("could not add bloodpressure");
  }
}, 1000 * 30);

export default bloodPressure;
