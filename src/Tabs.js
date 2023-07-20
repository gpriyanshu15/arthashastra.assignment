import React, { useState } from "react";
import LineChartComponent from "./LineChart";
import DataTable from "./DataTable";
import "./styles/Table.css";

const Tabs = () => {
  const [selectedTab, setSelectedTab] = useState("table");

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div>
      <div className="tabs">
        <div>
          Name: Priyanshu Gupta || Email:gpriyanshuietl@gmail.com || Contact
          No.- 8272004470
        </div>
        <div className="buttons">
          For Table View Clicks-- 
          <button
            className={selectedTab === "table" ? "active" : ""}
            onClick={() => handleTabChange("table")}
          >
           Table
          </button>
          <hr></hr>
          For Chart View Clicks--
          <button
            className={selectedTab === "chart" ? "active" : ""}
            onClick={() => handleTabChange("chart")}
          >
            Chart
          </button>
        </div>
      </div>
      <div className="tab-content">
        {selectedTab === "table" && <DataTable />}
        {selectedTab === "chart" && <LineChartComponent />}
      </div>
    </div>
  );
};

export default Tabs;
