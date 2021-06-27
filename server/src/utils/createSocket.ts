import mongoose from "mongoose";
import { Socket } from "socket.io";

function main(
  model: mongoose.Model<unknown, {}, {}>,
  socketName: string,
  socket: Socket,
  upRange: number,
  lowRange: number
) {
  let data: { time: String; value: number };

  const updateData = (vital: number) => {
    data = {
      time: new Date().toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        //@ts-ignore
        timeStyle: "medium",
      }),
      value: vital,
    };
  };

  setInterval(() => {
    const vital = Math.round(Math.random() * (upRange - lowRange) + lowRange);
    updateData(vital);
    socket.emit(socketName, data);
  }, 2000);
  1;

  setInterval(() => {
    const newData = new model(data);
    try {
      newData.save((err: any) => {
        if (err) console.error(`could not add ${socketName}`);
      });
    } catch (err) {
      console.error(`could not add ${socketName}`);
    }
  }, 1000 * 60 * 2);
}

export default main;
