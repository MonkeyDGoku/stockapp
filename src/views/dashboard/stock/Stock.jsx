import React, { useEffect, useState } from "react";
import LineGraph from "../../../components/linegraph/LineGraph";
import "./Stock.scss";

function Stock() {
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
      <div className="stock__linegraph">
        {graph.length > 0 ? <LineGraph data={graph} ymax={ymax} /> : null}
      </div>
    </div>
  );
}

export default Stock;
