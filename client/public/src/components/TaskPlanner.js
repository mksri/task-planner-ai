import React, { useState } from "react";

const TaskPlanner = () => {

  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {

    if(!input) return;

    setTasks([...tasks, input]);

    setInput("");

  };

  return (
    <div className="feature-card">

      <h2>📋 Task Planner</h2>

      <input
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        placeholder="Add a task"
      />

      <button onClick={addTask}>
        Add Task
      </button>

      <ul>
        {tasks.map((task,i)=>(
          <li key={i}>{task}</li>
        ))}
      </ul>

    </div>
  );

};

export default TaskPlanner;