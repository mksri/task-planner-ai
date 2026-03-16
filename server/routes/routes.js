import express from "express"
import { meetings } from "./dummyData.js"
import { calculateEnergy } from "./energyService.js"
import { getMealPlan } from "./mealService.js"

const router = express.Router()

router.get("/day-summary", (req, res) => {

  const meetingCount = meetings.length

  const energy = calculateEnergy(meetingCount)

  const meals = getMealPlan(energy)

  res.json({
    meetings,
    meetingCount,
    energy,
    meals
  })

})

export default router