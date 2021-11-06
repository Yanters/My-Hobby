import React from "react";
import "./TimeSpend.css";

const TimeSpend: React.FC<{ time: number }> = (props) => {
  return (
    <div>
      <div className="alert show">
        <span className="fa fa-bullhorn"></span>
        <span className="msg">Time spent on the website: {props.time}s</span>
        <div className="close-btn">
          <span className="fa fa-close"></span>
        </div>
      </div>
    </div>
  );
};

export default TimeSpend;
