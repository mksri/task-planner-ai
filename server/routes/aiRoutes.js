import express from "express";
import {
  generateMeals,
  generateGroceries,
  prioritizeTasks,
  planDay
} from "../controllers/aiController.js";

import { detectBusyDay } from "../controllers/busyController.js";

const router = express.Router();

router.get("/meals", generateMeals);

router.post("/groceries", generateGroceries);
router.get("/busy-check", detectBusyDay);

router.post("/prioritize", prioritizeTasks);

router.post("/plan-day", planDay);
router.get("/groceries", generateGroceries);

router.get("/day-plan", generateDayPlan);

export default router;