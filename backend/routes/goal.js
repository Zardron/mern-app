import express from "express";
import {
  addGoal,
  deleteGoal,
  getGoal,
  updateGoal,
} from "../controllers/goalController.js";

const router = express.Router();

router.get("/", getGoal);
router.post("/", addGoal);
router.put("/:id", updateGoal);
router.delete("/:id", deleteGoal);

export default router;
