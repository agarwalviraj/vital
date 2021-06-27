import { Socket } from "socket.io";
import generic from "./genericSocket";
import createModel from "../models/createModel";

const bloodPressureModel = createModel("BloodPressure");

const allBloodPressureSockets = (
  socket: Socket,
  upRange: number,
  lowRange: number
) => {
  generic(bloodPressureModel, "BloodPressure", socket, upRange, lowRange);
};

export default allBloodPressureSockets;
