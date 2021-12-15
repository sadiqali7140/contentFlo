import Reach from "react";
import "./contentPlan.css";
import "../../index.css";
import Calendar from "../../components/calendar/calendar";
import CalendarCard from "../../components/calendarCard/calendarCard";
import QuickView from "../../components/quickView/quickView";

function ContentPlan() {
  return (
    <div>
      <div className="CalendarContainer">
        <h1 className="primary-font">September</h1>
        <Calendar />
      </div>
      <div>
        <h1 className="primary-font">Past Calendars</h1>
        <CalendarCard />
      </div>
    </div>
  );
}

export default ContentPlan;
