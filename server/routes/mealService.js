export const getMealPlan = (energy) => {

if(energy === "LOW"){

return [
"Avocado Toast",
"Protein Smoothie",
"Quick Veggie Wrap"
]

}

if(energy === "MEDIUM"){

return [
"Greek Yogurt Bowl",
"Quinoa Salad",
"Grilled Paneer Wrap"
]

}

return [
"Oatmeal + Fruits",
"Chicken / Paneer Rice Bowl",
"Salmon / Tofu Salad"
]

}