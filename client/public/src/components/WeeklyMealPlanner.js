import { useEffect,useState } from "react"
import { generateWeeklyMeals } from "../utils/weeklyMealGenerator"
import { generateGroceries } from "../utils/groceryGenerator"

export default function WeeklyMealPlanner(){

const [meals,setMeals] = useState([])
const [groceries,setGroceries] = useState([])

useEffect(()=>{

const prefs = JSON.parse(localStorage.getItem("userPrefs"))

const weekly = generateWeeklyMeals(prefs)

setMeals(weekly)

},[])

const createGroceries = ()=>{

const list = generateGroceries(meals)

setGroceries(list)

}

return(

<div className="card">

<h2 className="card-title">
Weekly Meal Planner
</h2>

{meals.map((day,i)=>(
<div className="day-plan" key={i}>

<h3>{day.day}</h3>

<p>🍳 {day.breakfast}</p>

<p>🥗 {day.lunch}</p>

<p>🍲 {day.dinner}</p>

</div>
))}

<button onClick={createGroceries}>
Generate Grocery List
</button>

{groceries.length > 0 && (

<ul className="grocery-output">

{groceries.map((item,i)=>(
<li key={i}>{item}</li>
))}

</ul>

)}

</div>

)

}