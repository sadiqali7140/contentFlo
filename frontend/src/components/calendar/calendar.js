import React from "react";
// import "./calendar.css"
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction"

export default class DemoApp extends React.Component {
  render() {
    return (
      <div className="CalendarContainer">
      <FullCalendar
    //   headerToolbar={true} 
      plugins={[dayGridPlugin, interactionPlugin]}
        // eventContent={renderEventContent}
        initialView="dayGridMonth"
        weekends={true}
        dateClick={this.handleDateClick}
        events={[
            { title: "event 1", date: "2021-12-01" },
            { title: "event 2", date: "2021-12-16" },
        ]}
      />
    </div>
    )
  }

//   function renderEventContent(eventInfo) {
//     return (
//       <>
//         <b>{eventInfo.timeText}</b>
//         <i>{eventInfo.event.title}</i>
//       </>
//     )
//   }

  //function for click
  handleDateClick = (arg) => {
    alert(arg.dateStr)
  }
}
