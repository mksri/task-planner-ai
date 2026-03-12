import React from "react";

import MealPlanner from "../components/MealPlanner";
import GroceryList from "../components/GroceryList";
import TaskPlanner from "../components/TaskPlanner";
import DailyPlanner from "../components/DailyPlanner";
import BusyDetector from "../components/BusyDetector";

const Home = () => {

  return (

    <div className="container">

      <h1 className="title">🤖 AI Life Assistant</h1>

      <div className="grid">

        <div className="card">
          <MealPlanner/>
        </div>

        <div className="card">
          <GroceryList/>
        </div>

        <div className="card">
          <TaskPlanner/>
        </div>

        <div className="card">
          <DailyPlanner/>
        </div>

        <div className="card">
          <BusyDetector/>
        </div>

      </div>

    </div>

  );
};

export default Home;