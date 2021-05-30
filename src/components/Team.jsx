import React from "react";
import "./Team.css";
const Team = ({ source, teamName, count, func }) => {
  return (
    <div className="wrapper">
      <img src={source} alt="team logo" />
      <h3>{teamName}</h3>
      <button onClick={() => func(teamName)}>Vote</button>
      <p>Vote count: {count}</p>
    </div>
  );
};

export default Team;
