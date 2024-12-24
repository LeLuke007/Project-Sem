import React from "react";
import "./styles.css";

const Welcome = () => {
  return (
    <div className="welcome-container">
      <h1>Welcome to 8th Semester Registration Portal</h1>
      <div className="welcome-buttons">
        <button onClick={() => (window.location.href = "/login")}>Login</button>
        <button onClick={() => (window.location.href = "/signup")}>Sign Up</button>
      </div>
    </div>
  );
};

export default Welcome;
