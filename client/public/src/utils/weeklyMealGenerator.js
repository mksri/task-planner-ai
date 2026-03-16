export function generateWeeklyMeals(preferences){

const diet = preferences?.diet?.toLowerCase() || "veg"

const meals = {

veg:{
breakfast:[
"Oatmeal",
"Avocado toast",
"Smoothie bowl",
"Greek yogurt",
"Peanut butter toast"
],

lunch:[
"Paneer rice bowl",
"Veg wrap",
"Quinoa salad",
"Dal + brown rice",
"Chickpea salad"
],

dinner:[
"Veg stir fry",
"Paneer salad",
"Tomato soup",
"Veg sandwich",
"Grilled tofu bowl"
]
}

}

const selected = meals[diet] || meals.veg

const days = [
"Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"
]

return days.map(day=>({

day,

breakfast:
selected.breakfast[
Math.floor(Math.random()*selected.breakfast.length)
],

lunch:
selected.lunch[
Math.floor(Math.random()*selected.lunch.length)
],

dinner:
selected.dinner[
Math.floor(Math.random()*selected.dinner.length)
]

}))

}