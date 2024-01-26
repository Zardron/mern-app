import express from "express";
import {
  addGoal,
  deleteGoal,
  getGoal,
  updateGoal,
} from "../controllers/goalController.js";

const router = express.Router();

router.route("/").get(getGoal).post(addGoal);
router.route("/:id").put(updateGoal).delete(deleteGoal);

export default router;
