import React from "react";
import { useEffect, useState, useCallback } from "react";
import io from "socket.io-client";
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
} from "recharts";
import { useSocket } from "../store/socketContext";

const Chart = ({ socketName, className, width, height }) => {
  const socket = useSocket();
  const [data, setData] = useState([]);

  const updateData = useCallback(
    (newData, vitalName) => {
      const newObj = newData;
      setData((oldData) => [...oldData, newObj]);
    },
    [setData]
  );
  useEffect(() => {
    if (socket) {
      socket.on(socketName, (newData) => updateData(newData, "HeartRate"));
    }
    return () => socket.off("TimBloodPressure");
  }, [socket, updateData]);

  return (
    <div className={className ? className : null}>
      {data.length === 6 ? setData(data.slice(1)) : null}
      <AreaChart
        width={width ? width : 200}
        height={height ? height : 100}
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
