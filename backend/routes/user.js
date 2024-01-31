import express from "express";
import {
  deleteUsers,
  getUserDetails,
  getUsers,
  loginUser,
  registerUser,
  updateUsers,
} from "../controllers/userController.js";
import { protectedRoute } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").get(getUsers).post(registerUser);
router.post("/login", loginUser);
router.get("/details", protectedRoute, getUserDetails);
router.route("/:id").put(updateUsers).delete(deleteUsers);

export default router;
