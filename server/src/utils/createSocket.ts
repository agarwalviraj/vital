import mongoose from "mongoose";
import { Socket } from "socket.io";
import { AlertSchema } from "../schemas/alert";
import { PatientSchema } from "../schemas/patient";
import notify from "./sendSingleNotification";

// const patient = mongoose.model("Patient", PatientSchema);
const alert = mongoose.model("Alert", AlertSchema);
function main(
  socketName: string,
  socket: Socket,
  upRange: number,
  lowRange: number,
  critical: number[],
  patient: any,
  vitalName: string
) {
  let data: { time: String; value: number };

  const updateData = async (vital: number, isCritical: boolean) => {
    data = {
      time: new Date().toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        //@ts-ignore
        timeStyle: "medium",
      }),
      value: vital,
    };
    if (isCritical) {
      // console.log(patient);

      const { Doctor, name, _id, tokens } = patient;
      const message = `${vitalName} of ${name} is out of normal Range`;

      const alertObj = {
        Doctor,
        message,
        patientId: _id,
      };

      const newAlert: any = new alert(alertObj);
      try {
        const result: any = await alert.find({ Doctor });
        if (result.length > 30) await alert.deleteMany({ Doctor });
        newAlert.save((err: any) => {
          if (err) {
            console.log(err);
          } else {
            //
          }
        });
      } catch (error) {
        console.log(error);
      }
      notify(tokens, message, "Alert");
    }
  };

  setInterval(() => {
    const isCritical = Math.random() > 0.99;

    let vital;
    if (isCritical) {
      vital =
        Math.random() > 0.5
          ? Math.floor(Math.random() * (critical[0] - lowRange) + lowRange)
          : Math.floor(Math.random() * (upRange - critical[1]) + critical[1]);
    } else
      vital = Math.floor(
        Math.random() * (critical[1] - critical[0]) + critical[0]
      );
    // console.log(criticalValue);

    updateData(vital, isCritical);
    socket.emit(socketName, data);
  }, 4000);
}

export default main;
