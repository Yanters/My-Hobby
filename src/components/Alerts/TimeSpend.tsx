import React from "react";
import "./TimeSpend.css";

const TimeSpend: React.FC<{ time: number }> = (props) => {
  return (
    <div id="alertBox">
      <div className="alert">
        <span className="fa fa-bullhorn"></span>
        <span className="msg">
          Time spent on the website: {Math.round(props.time / 60)} minutes.
        </span>
        <div className="close-btn">
          <span className="fa fa-close"></span>
        </div>
      </div>
    </div>
  );
};

export default TimeSpend;
