import React from "react";
import "./styles.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Welcome to Your Dashboard</h1>
      <div className="dashboard-buttons">
        <button onClick={() => (window.location.href = "/noc-form")}>NOC Form</button>
        <button onClick={() => (window.location.href = "/registration-form")}>Registration Form</button>
      </div>
    </div>
  );
};

export default Dashboard;
