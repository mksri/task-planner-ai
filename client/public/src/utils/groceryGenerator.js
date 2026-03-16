export function generateGroceries(weeklyMeals){

const groceries = new Set()

weeklyMeals.forEach(day=>{

groceries.add(day.breakfast)
groceries.add(day.lunch)
groceries.add(day.dinner)

})

return Array.from(groceries)

}