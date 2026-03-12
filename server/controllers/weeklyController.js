export const generateWeeklyPlan = (req, res) => {

  res.json({

    meals: [
      "Monday: Oats Breakfast, Veg Sandwich Lunch, Dal Rice Dinner",
      "Tuesday: Smoothie Breakfast, Pasta Lunch, Vegetable Curry Dinner",
      "Wednesday: Poha Breakfast, Salad Lunch, Paneer Roti Dinner",
      "Thursday: Idli Breakfast, Rice Bowl Lunch, Dal Khichdi Dinner",
      "Friday: Paratha Breakfast, Wrap Lunch, Veg Biryani Dinner"
    ],

    groceries: [
      "Milk",
      "Eggs",
      "Bread",
      "Tomatoes",
      "Spinach",
      "Rice",
      "Paneer"
    ],

    tasks: [
      "Finish report",
      "Prepare presentation",
      "Workout",
      "Buy groceries"
    ],

    schedule: `
Morning
• Breakfast
• Emails

Afternoon
• Work tasks
• Lunch

Evening
• Exercise
• Dinner
`

  });

};