import express from "express";
import {
  addGoal,
  deleteGoal,
  getDeletedGoals,
  getGoal,
  updateGoal,
} from "../controllers/goalController.js";

const router = express.Router();

router.route("/").get(getGoal).post(addGoal);
router.get("/deleted-goals", getDeletedGoals);
router.route("/:id").put(updateGoal).delete(deleteGoal);

export default router;
