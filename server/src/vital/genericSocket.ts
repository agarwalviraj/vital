//@ts-ignore
import { PatientSchema } from "../schemas/patient";
import createSocket from "../utils/createSocket";
import mongoose from "mongoose";
import { Socket } from "socket.io";

const patient = mongoose.model("Patient", PatientSchema);

const generic: (
  _Model: mongoose.Model<unknown, {}, {}>,
  socketName: string,
  socket: Socket,
  upRange: number,
  lowRange: number,
  critical: number[]
) => void = async (
  _Model: mongoose.Model<unknown, {}, {}>,
  socketName: string,
  socket: Socket,
  upRange: number,
  lowRange: number,
  critical: number[]
) => {
  const allPatients = await patient.find();
  allPatients.forEach((patient: any) => {
    if (patient.vitals.includes(socketName)) {
      createSocket(
        `${patient.name}${socketName}`,
        socket,
        upRange,
        lowRange,
        critical,
        patient,
        socketName
      );
    }
  });
};
export default generic;
