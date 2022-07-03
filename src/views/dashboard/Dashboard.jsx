import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import Stock from "./stock/Stock";
import CompanyDetails from "./company/CompanyDetails";

const COMPANY_NAME = "IBM";

function Dashboard() {
  return (
    <div className="dashboard">
      <CompanyDetails />
      <h2 className="dashboard__title">{"STOCK MARKET - Weekly"}</h2>
      <Stock />
    </div>
  );
}

export default Dashboard;
