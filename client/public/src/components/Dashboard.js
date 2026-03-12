import React from "react";
import MealPlanner from "./MealPlanner";
import GroceryList from "./GroceryList";
import TaskManager from "./TaskManager";

const Dashboard = () => {
  return (
     <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:"20px"}}>
      <MealPlanner />
    </div>
  );
};

export default Dashboard;