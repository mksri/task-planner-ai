import React, { useState } from "react";

const DailyPlanner = () => {

  const [plan, setPlan] = useState("");

  const generatePlan = async () => {

    const res = await fetch("http://localhost:5000/api/ai/day-plan");

    const data = await res.json();

    setPlan(data.plan);

  };

  return (
    <div className="feature-card">

      <h2>📅 AI Daily Planner</h2>

      <button onClick={generatePlan}>
        Generate My Day
      </button>

      <pre>{plan}</pre>

    </div>
  );

};

export default DailyPlanner;