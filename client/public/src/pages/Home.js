import React from "react";

import MealPlanner from "../components/MealPlanner";
import GroceryList from "../components/GroceryList";
import TaskPlanner from "../components/TaskPlanner";
import DailyPlanner from "../components/DailyPlanner";

const Home = () => {

  return (
    <div>

      <MealPlanner/>

      <GroceryList/>

      <TaskPlanner/>

      <DailyPlanner/>

    </div>
  );

};

export default Home;