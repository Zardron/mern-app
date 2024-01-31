import express from "express";
import {
  deleteUsers,
  getUserDetails,
  getUsers,
  loginUser,
  registerUser,
  updateUsers,
} from "../controllers/userController.js";

const router = express.Router();

router.route("/").get(getUsers).post(registerUser);
router.post("/login", loginUser);
router.get("/details", getUserDetails);
router.route("/:id").put(updateUsers).delete(deleteUsers);

export default router;
