import React from "react";

const EnergySelector = ({ energy,setEnergy }) => {

  return (

    <div>

      <h2>⚡ Energy Level</h2>

      <select
        value={energy}
        onChange={(e)=>setEnergy(e.target.value)}
      >

        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>

      </select>

    </div>

  );

};

export default EnergySelector;