import express from "express";
import {
  addGoal,
  deleteGoal,
  getDeletedGoals,
  getGoal,
  getUserGoals,
  updateGoal,
} from "../controllers/goalController.js";
import { protectedRoute } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").get(protectedRoute, getGoal).post(protectedRoute, addGoal);
router.get("/user", protectedRoute, getUserGoals);
router.get("/deleted-goals", protectedRoute, getDeletedGoals);
router
  .route("/:id")
  .put(protectedRoute, updateGoal)
  .delete(protectedRoute, deleteGoal);

export default router;
