import React, { useState } from "react";

const MealPlanner = () => {

  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dayType, setDayType] = useState("normal");

  const generateMeals = async () => {

    setLoading(true);

    try {

      const res = await fetch(
        `http://localhost:5000/api/ai/meals?type=${dayType}`
      );

      const data = await res.json();

      setMeals(data.meals);

    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <div className="meal-container">

      <h2>🍽 AI Meal Planner</h2>

      <div className="controls">

        <label>Day Type</label>

        <select
          value={dayType}
          onChange={(e) => setDayType(e.target.value)}
        >
          <option value="normal">Normal Work Day</option>
          <option value="busy">Heavy Meeting Day</option>
        </select>

        <button onClick={generateMeals}>
          {loading ? "Generating..." : "Generate Meal Plan"}
        </button>

      </div>

     <div className="meal-plan">
  {meals.map((meal,i)=>(
    <div key={i} className="meal-item">
      {meal}
    </div>
  ))}
</div>

    </div>
  );
};

export default MealPlanner;