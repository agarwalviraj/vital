import { Socket } from "socket.io";
const heartRate = (socket: Socket, upRange: number, lowRange: number) => {
  setInterval(() => {
    const vital = Math.random() * (upRange - lowRange) + lowRange;
    socket.emit("heartRate", {
      name: new Date().toLocaleTimeString("en-IN"),
      value: vital,
    });
  }, 3000);
};

export default heartRate;
