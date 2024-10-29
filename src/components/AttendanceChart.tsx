"use client";

import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Mon",
    present: 4000,
    absent: 2400,
    amt: 2400,
  },
  {
    name: "Tue",
    present: 3000,
    absent: 1398,
    amt: 2210,
  },
  {
    name: "Wed",
    present: 2000,
    absent: 9800,
    amt: 2290,
  },
  {
    name: "Thur",
    present: 2780,
    absent: 3908,
    amt: 2000,
  },
  {
    name: "Fri",
    present: 1890,
    absent: 4800,
    amt: 2181,
  },
  {
    name: "Sat",
    present: 2390,
    absent: 3800,
    amt: 2500,
  },
  {
    name: "Sun",
    present: 3490,
    absent: 4300,
    amt: 2100,
  },
];

const AttendanceChart = () => {
  return <div>AttendanceChart</div>;
};

export default AttendanceChart;
