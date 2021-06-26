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

const Chart = ({ socketName, className, width, height }) => {
  const socket = io("http://hackvital.herokuapp.com/", {
    transports: ["websocket"],
    upgrade: false,
  });
  const [data, setData] = useState([
    {
      time: "12:39:24 pm",
      value: 118,
    },
    {
      time: "12:39:26 pm",
      value: 100,
    },
    {
      time: "12:39:28 pm",
      value: 101,
    },
    {
      time: "12:39:30 pm",
      value: 103,
    },
    {
      time: "12:39:32 pm",
      value: 106,
    },
    {
      time: "12:39:34 pm",
      value: 82,
    },
  ]);
  useEffect(() => {
    // socket.on(socketName, (newData) => {
    //   setData((currentData) => [...currentData, newData]);
    // });
  }, []);

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
