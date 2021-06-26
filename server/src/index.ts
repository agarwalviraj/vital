import * as dotenv from "dotenv";
import express from "express";
import * as http from "http";
import mongoose from "mongoose";
import { Server } from "socket.io";
import { bloodPressure, heartRate } from "./vital/index";
import api from "./routes";

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3003"],
    credentials: true,
  },
});

mongoose.connect(process.env.MONGODB_URI!, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

io.on("connection", (socket) => {
  bloodPressure(socket, 120, 80);
  heartRate(socket, 120, 50);
});

app.use("/", api);

server.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
