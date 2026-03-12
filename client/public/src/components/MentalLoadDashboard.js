import React from "react";

const MentalLoadDashboard = ({tasks=[], meals=[]}) => {

  const decisions = tasks.length + meals.length;
  const hoursSaved = (decisions * 5) / 60;

  return (

    <div className="card">

      <h2>🧠 Mental Load Dashboard</h2>

      <p>Decisions automated: {decisions}</p>

      <p>Tasks organized: {tasks.length}</p>

      <p>Meals planned: {meals.length}</p>

      <p>Time saved: {hoursSaved.toFixed(1)} hrs/week</p>

    </div>

  );
};

export default MentalLoadDashboard;