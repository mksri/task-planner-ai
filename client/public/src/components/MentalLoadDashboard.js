import React from "react";

const MentalLoadDashboard = ({ meals, tasks }) => {

  const mealCount = meals.length;
  const taskCount = tasks.length;

  const decisionsSaved = mealCount + taskCount;

  const timeSaved = (decisionsSaved * 5) / 60;

  return (
    <div className="dashboard">

      <h2>🧠 Mental Load Dashboard</h2>

      <div className="stats">

        <div className="card">
          <h3>{mealCount}</h3>
          <p>Meals Planned</p>
        </div>

        <div className="card">
          <h3>{taskCount}</h3>
          <p>Tasks Managed</p>
        </div>

        <div className="card">
          <h3>{decisionsSaved}</h3>
          <p>Decisions Automated</p>
        </div>

        <div className="card">
          <h3>{timeSaved.toFixed(1)} hrs</h3>
          <p>Time Saved</p>
        </div>

      </div>

    </div>
  );
};

export default MentalLoadDashboard;