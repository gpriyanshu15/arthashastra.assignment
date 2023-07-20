import React from "react";
import dummyData from "./dummy.json";
import "./styles/Table.css";

const DataTable = () => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Year</th>
          <th>Medals</th>
        </tr>
      </thead>
      <tbody >
        {dummyData.map((data) => (
          <tr key={data.Id}>
            <td >{data.Id}</td>
            <td>{data.Year}</td>
            <td>{data.Medals}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
