import React, { useState } from "react";

const BusyDetector = () => {

  const [meetings, setMeetings] = useState(0);
  const [result, setResult] = useState(null);

  const checkBusyDay = async () => {

    const res = await fetch(
      `http://localhost:5000/api/ai/busy-check?meetings=${meetings}`
    );

    const data = await res.json();

    setResult(data);

  };

  return (

    <div>

      <h2>📅 Busy Day Detector</h2>

      <input
        type="number"
        placeholder="Number of meetings"
        value={meetings}
        onChange={(e)=>setMeetings(e.target.value)}
      />

      <button onClick={checkBusyDay}>
        Detect My Day
      </button>

      {result && (

        <div style={{marginTop:"15px"}}>

          <h3>
            Mode: {result.mode === "busy" ? "🚨 BUSY MODE" : "😌 NORMAL DAY"}
          </h3>

          <ul>
            {result.recommendations.map((r,i)=>(
              <li key={i}>{r}</li>
            ))}
          </ul>

        </div>

      )}

    </div>

  );

};

export default BusyDetector;