import React, { useState } from "react";

import Preferences from "../components/Preferences";
import CalendarSync from "../components/CalendarSync";
import EnergySelector from "../components/EnergySelector";

import MealPlanner from "../components/MealPlanner";
import GroceryList from "../components/GroceryList";
import TaskPlanner from "../components/TaskPlanner";
import DailyPlanner from "../components/DailyPlanner";
import WeeklyPlanner from "../components/WeeklyPlanner";
import BusyDetector from "../components/BusyDetector";

const Home = () => {

  const [preferences, setPreferences] = useState({});
  const [meetings, setMeetings] = useState(0);
  const [energy, setEnergy] = useState("medium");

  return (

    <div className="container">

      <h1 className="title">🤖 AI Life Assistant</h1>

      <div className="grid">

        <div className="card">
          <Preferences setPreferences={setPreferences}/>
        </div>

        <div className="card">
          <CalendarSync setMeetings={setMeetings}/>
        </div>

        <div className="card">
          <EnergySelector energy={energy} setEnergy={setEnergy}/>
        </div>

        <div className="card">
          <BusyDetector meetings={meetings}/>
        </div>

        <div className="card">
          <MealPlanner preferences={preferences} energy={energy}/>
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
          <WeeklyPlanner/>
        </div>

      </div>

    </div>

  );

};

export default Home;