export function generateMeals(preferences) {

const diet = preferences?.diet?.toLowerCase() || "veg"

const meals = {

veg:{
breakfast:[
"Oatmeal with fruits",
"Greek yogurt bowl",
"Peanut butter toast",
"Smoothie bowl",
"Avocado toast"
],

lunch:[
"Paneer rice bowl",
"Quinoa veggie salad",
"Veg wrap",
"Dal + brown rice",
"Chickpea salad"
],

dinner:[
"Vegetable stir fry",
"Paneer salad",
"Veg sandwich",
"Tomato soup + toast",
"Grilled tofu bowl"
]
},

vegan:{
breakfast:[
"Almond smoothie",
"Oats with berries",
"Chia pudding",
"Banana peanut toast"
],

lunch:[
"Vegan burrito bowl",
"Lentil salad",
"Tofu stir fry",
"Chickpea quinoa bowl"
],

dinner:[
"Veg curry + rice",
"Tofu wrap",
"Avocado quinoa bowl"
]
},

keto:{
breakfast:[
"Egg omelette",
"Avocado eggs",
"Cheese scramble"
],

lunch:[
"Grilled chicken salad",
"Zucchini noodles",
"Chicken lettuce wrap"
],

dinner:[
"Salmon salad",
"Steak bowl",
"Keto veggie stir fry"
]
}

}

const selected = meals[diet] || meals.veg

const plans = []

for(let i=0;i<5;i++){

plans.push({

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

})

}

return plans

}