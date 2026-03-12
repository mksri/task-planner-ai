import {
  getMealPlan,
  getGroceries,
  getTaskPriority,
  getDayPlan
} from "../services/openaiService.js";

export const generateMeals = async (req, res) => {

  const { type } = req.query;

  if(type === "busy"){

    return res.json({
      meals: [
        "Monday: Smoothie Bowl (10 min)",
        "Tuesday: Avocado Toast (5 min)",
        "Wednesday: Greek Yogurt + Fruits (5 min)",
        "Thursday: Veg Wrap (10 min)",
        "Friday: Peanut Butter Sandwich (5 min)"
      ]
    });

  }

  return res.json({
    meals: [
      "Monday: Oats Breakfast, Veg Sandwich Lunch, Dal Rice Dinner",
      "Tuesday: Smoothie Breakfast, Pasta Lunch, Vegetable Curry Dinner",
      "Wednesday: Poha Breakfast, Salad Lunch, Paneer Roti Dinner",
      "Thursday: Idli Breakfast, Rice Bowl Lunch, Dal Khichdi Dinner",
      "Friday: Paratha Breakfast, Wrap Lunch, Veg Biryani Dinner"
    ]
  });

    

};

export const generateGroceries = (req,res)=>{

  res.json({
    items:[
      "Milk",
      "Eggs",
      "Bread",
      "Spinach",
      "Tomatoes",
      "Rice",
      "Paneer"
    ]
  })

};

export const generateDayPlan = (req,res)=>{

  res.json({

    plan: `
Morning
• Wake up 7 AM
• Healthy breakfast
• Check emails

Afternoon
• Lunch
• Project work

Evening
• Walk or exercise
• Light dinner
• Read or relax
`

  })

}

export const prioritizeTasks = async (req, res) => {

  const { tasks } = req.body;

  const result = await getTaskPriority(tasks);

  res.json({ result });

};

export const planDay = async (req, res) => {

  const { tasks, meals } = req.body;

  const result = await getDayPlan(tasks, meals);

  res.json({ result });

};