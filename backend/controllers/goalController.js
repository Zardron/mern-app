import asyncHandler from "express-async-handler";
import Goal from "../models/goalModel.js";
import { errorHandler } from "../middleware/errorMiddleware.js";
import {
  DUPLICATE_ERROR,
  NOT_FOUND_ERROR,
  SUCCESS,
} from "../utils/constant.js";
import { tryCatch } from "../utils/tryCatch.js";

const getGoal = asyncHandler(async (req, res) => {
  const goals = await Goal.find();

  res.status(200).json(goals);
});

const addGoal = asyncHandler(
  tryCatch(async (req, res, next) => {
    const { text } = req.body;

    const checkGoal = await Goal.findOne({ text: text });

    if (checkGoal) {
      next(errorHandler(DUPLICATE_ERROR, "Goal already exist!"));
    } else {
      const newGoal = await Goal.create({
        text: text,
      });

      res.status(SUCCESS).json(newGoal);
    }
  })
);

const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "UPDATE GOAL" });
});

const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "DELETE GOAL" });
});

export { getGoal, addGoal, updateGoal, deleteGoal };
