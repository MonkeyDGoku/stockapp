import React, { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import { curveCardinal } from "d3-shape";

const cardinal = curveCardinal.tension(0.2);

function LineGraph({ data, ymax }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis dataKey="date" />
        <YAxis domain={[0, 300]} />
        <ReferenceLine
          y={ymax}
          label="Max"
          stroke="red"
          strokeDasharray="3 3"
        />
        <Tooltip />
        {/* <Area
          type="monotone"
          dataKey="open"
          stroke="rgb(104 243 168)"
          fill="lightgreen"
          fillOpacity={0.3}
          strokeWidth="3px"
        /> */}
        <pattern
          id="diagonalHatch"
          patternUnits="userSpaceOnUse"
          width="3"
          height="8"
          patternTransform="rotate(-45 2 2)"
        >
          <path d="M -1,2 l 6,0" stroke="rgb(20 83 45)" strokeWidth="5" />
        </pattern>
        <defs>
          <linearGradient id="gradient-vertical" x2="0" y2="1">
            <stop offset="0%" stop-color="var(--bg-white)" />
            <stop offset="10%" stop-color="var(--bg-green-100)" />
            <stop offset="20%" stop-color="var(--bg-green-200)" />
            <stop offset="30%" stop-color="var(--bg-green-300)" />
            <stop offset="40%" stop-color="var(--bg-green-400)" />
            <stop offset="50%" stop-color="var(--bg-green-500)" />
            <stop offset="60%" stop-color="var(--bg-green-600)" />
            <stop offset="70%" stop-color="var(--bg-green-700)" />
            <stop offset="80%" stop-color="var(--bg-green-800)" />
            <stop offset="90%" stop-color="var(--bg-green-900)" />
            <stop offset="100%" stop-color="var(--bg-black)" />
          </linearGradient>
        </defs>
        <Area
          type={cardinal}
          dataKey="close"
          stroke="rgb(104 243 168)"
          fill="url(#diagonalHatch)"
          fillOpacity={0.8}
          strokeWidth="2px"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default LineGraph;
