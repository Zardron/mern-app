import express from "express";
import {
  addUsers,
  deleteUsers,
  getUsers,
  updateUsers,
} from "../controllers/userController.js";

const router = express.Router();

router.route("/").get(getUsers).post(addUsers);
router.route("/:id").put(updateUsers).delete(deleteUsers);

export default router;
