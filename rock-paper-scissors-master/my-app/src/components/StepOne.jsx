import React from "react";
import Paper from "./Paper";
import Scissor from "./Scissor";
import Rock from "./Rock";
const StepOne = ({ handleChoice }) => {
 
  return (
    <div className="triangle">
      <div
        style={{
          marginLeft: "-50px",
          marginTop: "-60px",
          position: "absolute",
        }}
      >
        <Paper handleChoice={handleChoice} />
      </div>
      <div
        style={{
          marginLeft: "200px",
          marginTop: "-60px",
          position: "absolute",
        }}
      >
        <Scissor handleChoice={handleChoice} />
      </div>
      <div
        style={{
          marginLeft: "70px",
          marginTop: "140px",
          position: "absolute",
        }}
      >
        <Rock handleChoice={handleChoice} />
      </div>
    </div>
  );
};

export default StepOne;
