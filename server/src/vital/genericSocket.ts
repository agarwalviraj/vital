import { PatientSchema } from "../schemas/patient";
import main from "../utils/createSocket";
import mongoose from "mongoose";
import { Socket } from "socket.io";

const patient = mongoose.model("Patient", PatientSchema);

const generic: (
  Model: mongoose.Model<unknown, {}, {}>,
  socketName: string,
  socket: Socket,
  upRange: number,
  lowRange: number
) => void = async (Model, socketName, socket, upRange, lowRange) => {
  const allPatients = await patient.find();
  allPatients.forEach((patient: any) => {
    if (patient.vitals.includes(socketName)) {
      main(Model, `${patient.name}${socketName}`, socket, upRange, lowRange);
    }
  });
};
export default generic;
