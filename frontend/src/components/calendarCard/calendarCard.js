import React from "react";
import "./calendarCard.css";
import "../../index.css";

function Card() {
  return (
    <div>
      <div className="Heading">
        <div className="ContentCard">
          <div className="ContentContainer">
            <div className="ImageContainer">
              <img
                src="https://images.unsplash.com/photo-1506784365847-bbad939e9335?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2068&q=80"
                alt="new"
              ></img>
            </div>
            <div className="MetaData">
              <h1 className="primary-font">August</h1>
              <p className="primary-font">All Content Published!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalendarCard;
