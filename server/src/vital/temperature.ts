import { Socket } from "socket.io";
import generic from "./genericSocket";
import createModel from "../models/createModel";

const temperatureModel = createModel("Temperature");

const allTemperauteSockets = (
  socket: Socket,
  upRange: number,
  lowRange: number
) => {
  generic(temperatureModel, "Temperature", socket, upRange, lowRange);
};

export default allTemperauteSockets;
