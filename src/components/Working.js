import React from "react";
import "../styles/Working.css";
import SineWaveGraph from "./SinWaveGraph";
const Working = () => {
  return (
    <div className='workingContainer'>
      <div className='processTitile'>
        <span className='underStanding'>Understanding the</span>
        <span className='process'>Process</span>
      </div>
      <SineWaveGraph />
    </div>
  );
};

export default Working;
