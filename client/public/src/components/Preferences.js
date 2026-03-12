import React, { useState } from "react";

const Preferences = ({ setPreferences }) => {

  const [diet, setDiet] = useState("veg");
  const [cuisine, setCuisine] = useState("indian");

  const savePreferences = () => {

    const prefs = { diet, cuisine };

    setPreferences(prefs);

    alert("Preferences saved!");

  };

  return (

    <div>

      <h2>⚙ Personal Preferences</h2>

      <label>Diet</label>
      <select onChange={(e)=>setDiet(e.target.value)}>
        <option value="veg">Vegetarian</option>
        <option value="nonveg">Non-Vegetarian</option>
      </select>

      <br/><br/>

      <label>Cuisine</label>
      <select onChange={(e)=>setCuisine(e.target.value)}>
        <option value="indian">Indian</option>
        <option value="continental">Continental</option>
      </select>

      <br/><br/>

      <button onClick={savePreferences}>
        Save Preferences
      </button>

    </div>

  );

};

export default Preferences;