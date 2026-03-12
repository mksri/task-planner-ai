import React, { useState } from "react";

const GroceryList = () => {

  const [items, setItems] = useState([]);

  const generateGroceries = async () => {

    try{

      const res = await fetch("http://localhost:5000/api/ai/groceries");

      const data = await res.json();

      setItems(data.items);

    }catch(err){
      console.log(err);
    }

  };

  return (

    <div>

      <button onClick={generateGroceries}>
        Generate Grocery List
      </button>

      <ul>
        {items.map((item,i)=>(
          <li key={i}>{item}</li>
        ))}
      </ul>

    </div>

  );
};

export default GroceryList;