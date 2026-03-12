import React, { useState } from "react";

const WeeklyPlanner = () => {

  const [plan, setPlan] = useState(null);

  const generatePlan = async () => {

    const res = await fetch("http://localhost:5000/api/ai/weekly-plan");

    const data = await res.json();

    setPlan(data);

  };

  return (

    <div>

      <h2>🧠 AI Weekly Life Planner</h2>

      <button onClick={generatePlan}>
        Plan My Week
      </button>

      {plan && (

        <div>

          <h3>🍽 Meals</h3>
          <ul>
            {plan.meals.map((meal,i)=>(
              <li key={i}>{meal}</li>
            ))}
          </ul>

          <h3>🛒 Groceries</h3>
          <ul>
            {plan.groceries.map((g,i)=>(
              <li key={i}>{g}</li>
            ))}
          </ul>

          <h3>📋 Tasks</h3>
          <ul>
            {plan.tasks.map((t,i)=>(
              <li key={i}>{t}</li>
            ))}
          </ul>

          <h3>📅 Daily Schedule</h3>
          <pre>{plan.schedule}</pre>

        </div>

      )}

    </div>

  );

};

export default WeeklyPlanner;