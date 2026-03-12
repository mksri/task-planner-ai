import React, { useState } from "react";

const CalendarSync = ({ setMeetings }) => {

  const [count,setCount] = useState(0);

  const syncCalendar = () => {

    const meetingCount = Math.floor(Math.random()*8);

    setMeetings(meetingCount);

    alert(`Calendar synced! ${meetingCount} meetings today`);

  };

  return (

    <div>

      <h2>📅 Calendar Sync</h2>

      <button onClick={syncCalendar}>
        Sync Calendar
      </button>

      <p>Meetings Today: {count}</p>

    </div>

  );

};

export default CalendarSync;