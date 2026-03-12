import express from "express";
import {
  generateMeals,
  generateGroceries,
  prioritizeTasks,
  planDay,
  generateDayPlan
} from "../controllers/aiController.js";

import { detectBusyDay } from "../controllers/busyController.js";
import { generateWeeklyPlan } from "../controllers/weeklyController.js";

const router = express.Router();

router.get("/meals", generateMeals);
router.get("/busy-check", detectBusyDay);
router.post("/prioritize", prioritizeTasks);
router.post("/plan-day", planDay);
router.get("/groceries", generateGroceries);
router.get("/day-plan", generateDayPlan);
router.get("/weekly-plan", generateWeeklyPlan);

export default router;