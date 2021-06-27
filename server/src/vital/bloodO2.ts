import { Socket } from "socket.io";
import generic from "./genericSocket";
import createModel from "../models/createModel";

const bloodO2 = createModel("BloodO2");

const allBloodO2Sockets = (
  socket: Socket,
  upRange: number,
  lowRange: number
) => {
  generic(bloodO2, "BloodO2", socket, upRange, lowRange);
};

export default allBloodO2Sockets;
