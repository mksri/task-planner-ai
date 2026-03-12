import React, { useState } from "react";

const DailyPlanner = () => {

  const [plan, setPlan] = useState("");

  const generatePlan = async () => {

    try {

      const res = await fetch("http://localhost:5000/api/ai/day-plan");

      const data = await res.json();

      console.log(data);

      setPlan(data.plan);

    } catch (error) {
      console.error("Error generating day plan:", error);
    }

  };

  return (
    <div>

      <button onClick={generatePlan}>
        Generate My Day
      </button>

      {plan && (
        <div style={{marginTop:"10px"}}>
          <pre>{plan}</pre>
        </div>
      )}

    </div>
  );
};

export default DailyPlanner;