
export const getMealPlan = async () => {

  return [
    "Monday: Oats Breakfast, Veg Sandwich Lunch, Dal Rice Dinner",
    "Tuesday: Smoothie Breakfast, Pasta Lunch, Vegetable Curry Dinner",
    "Wednesday: Poha Breakfast, Salad Lunch, Paneer Roti Dinner",
    "Thursday: Idli Breakfast, Rice Bowl Lunch, Dal Khichdi Dinner",
    "Friday: Paratha Breakfast, Wrap Lunch, Veg Biryani Dinner"
  ];

};

export const getGroceries = async () => {

  return [
    "Oats",
    "Tomatoes",
    "Onion",
    "Paneer",
    "Rice",
    "Spinach",
    "Milk"
  ];

};
  



 export const getTaskPriority = async (tasks) => {

  return {
    high: [tasks[0]],
    medium: [tasks[1]],
    low: [tasks[2]]
  };

};

export const getDayPlan = async () => {

  return `
Morning
• Breakfast: Oats
• Team Meeting

Afternoon
• Work on report
• Lunch: Veg Sandwich

Evening
• Buy groceries
• Dinner: Dal Rice
`;

};