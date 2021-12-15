import React from "react";
import "./pastLog.css";
import Calendar from "../calendar/calendar"

function PastLog() {
  return (
    <div>
      <div className="Heading">
        <h1 className="primary-font">Past Log</h1>
        <div className="StatContainer">
          <div>
            <p className="primary-font">Past 3-month total</p>
            <h1 className="primary-font">12 Revisions</h1>
          </div>
          <div>
            <p className="primary-font">This month</p>
            <h1 className="primary-font">1 Flagged</h1>
          </div>
          <div>
            <p className="primary-font">Additional revisions past 3-months</p>
            <h1 className="primary-font">2 orders</h1>
          </div>
        </div>
        <Calendar />
      </div>
    </div>
  );
}

export default PastLog;
