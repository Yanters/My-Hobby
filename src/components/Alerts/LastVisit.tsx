import React from "react";
import "./LastVisit.css";

const LastVisit: React.FC<{ time: number }> = (props) => {
  var d = new Date(props.time);
  var datestring =
    ("0" + d.getDate()).slice(-2) +
    "-" +
    ("0" + (d.getMonth() + 1)).slice(-2) +
    "-" +
    d.getFullYear() +
    " " +
    ("0" + d.getHours()).slice(-2) +
    ":" +
    ("0" + d.getMinutes()).slice(-2);

  // 16-05-2015 09:50

  return (
    <div id="alertBox2">
      <div className="alert2">
        <span className="fa fa-bullhorn"></span>
        <span className="msg">Last Visit: {datestring}</span>
        <div className="close-btn2">
          <span className="fa fa-close"></span>
        </div>
      </div>
    </div>
  );
};

export default LastVisit;
