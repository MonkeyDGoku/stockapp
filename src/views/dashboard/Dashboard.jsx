import React, { useEffect, useState } from "react";
import LineGraph from "../../components/linegraph/LineGraph";
import "./Dashboard.css";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

function Dashboard() {
  const intialGraph = [
    {
      date: "2022-05-27",
      open: "129.5000",
      high: "139.7394",
      low: "129.4200",
      close: "139.2700",
    },
  ];

  const [graph, setGraph] = useState({});
  const [ymax, setYmax] = useState(0);
  useEffect(() => {
    fetch(
      "https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=IBM&apikey=demo"
    )
      .then((res) => res.json())
      .then((body) => {
        const weeks = body["Weekly Time Series"];
        const weeksTrim = Object.keys(weeks).slice(0, 1000);
        let graphArr = [];
        let ymax = 0;
        for (let week of weeksTrim) {
          const weekvalue = weeks[week];
          const weekdata = {
            date: week,
            open: weekvalue["1. open"],
            high: weekvalue["2. high"],
            low: weekvalue["3. low"],
            close: weekvalue["4. close"],
          };
          graphArr = [...graphArr, weekdata];

          ymax = ymax > weekdata.close ? ymax : weekdata.close;
        }

        setGraph(graphArr);
        setYmax(ymax);
      });
  });

  return (
    <div>
      Dashboard
      <div className="dashboard__linegraph">
        {graph.length > 0 ? <LineGraph data={graph} ymax={ymax} /> : null}
      </div>
    </div>
  );
}

export default Dashboard;
