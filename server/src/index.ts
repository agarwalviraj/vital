import * as dotenv from "dotenv";
import express from "express";
import * as http from "http";
import mongoose from "mongoose";
import { Server } from "socket.io";
import { bloodO2, bloodPressure, heartRate, temperature } from "./vital";
import api from "./routes";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());
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
  heartRate(socket, 120, 50);
  bloodPressure(socket, 120, 80);
  bloodO2(socket, 92, 100);
  temperature(socket, 98, 104);
});

// app.use("/authorize", authorize);
app.use("/", api);

server.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
