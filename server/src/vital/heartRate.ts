import { Socket } from "socket.io";
import createModel from "../models/createModel";
import generic from "./genericSocket";

const heartRateModel = createModel("HeartRate");

const heartRate = (socket: Socket, upRange: number, lowRange: number) => {
  generic(heartRateModel, "HeartRate", socket, upRange, lowRange);
};

export default heartRate;
