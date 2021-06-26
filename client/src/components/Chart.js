import React from "react";
import { useEffect, useState } from "react";
import io from "socket.io-client";
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
} from "recharts";

const Chart = ({ socketName }) => {
  const socket = io("ws://hackvital.herokuapp.com", {
    transports: ["websocket"],
  });
  const [data, setData] = useState([]);
  // const [heartRate, setHeartRate] = useState([]) as any;
  useEffect(() => {
    socket.on(socketName, (newData) => {
      setData((currentData) => [...currentData, newData]);
    });
  }, []);

  return (
    <div>
      {data.length === 6 ? setData(data.slice(1)) : null}
      <AreaChart
        width={500}
        height={200}
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#5AA9D6" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#5AA9D6" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="time" />
        <YAxis />
        <CartesianGrid strokeDasharray="6 3" />
        <Tooltip wrapperStyle={{ width: 100, backgroundColor: "#F87677" }} />

        <Area
          type="natural"
          dataKey="value"
          stroke="#28527A"
          fillOpacity={1}
          fill="url(#colorPv)"
        />
      </AreaChart>
    </div>
  );
};

export default Chart;
