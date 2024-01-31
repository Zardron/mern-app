import asyncHandler from "express-async-handler";
import Goal from "../models/goalModel.js";
import User from "../models/userModel.js";
import { errorHandler } from "../middleware/errorMiddleware.js";
import { DUPLICATE, SUCCESS, UNAUTHORIZED } from "../utils/constant.js";
import { tryCatch } from "../utils/tryCatch.js";
import { validateMongoDbId } from "../middleware/validateId.js";

const getGoal = asyncHandler(
  tryCatch(async (req, res) => {
    const goals = await Goal.find();

    res.status(200).json(goals);
  })
);

const getUserGoals = asyncHandler(
  tryCatch(async (req, res) => {
    const goals = await Goal.find({ user: req.user.id });

    res.status(200).json(goals);
  })
);

const getDeletedGoals = asyncHandler(
  tryCatch(async (req, res) => {
    const goals = await Goal.find({ isDeleted: true });

    res.status(200).json(goals);
  })
);

const addGoal = asyncHandler(
  tryCatch(async (req, res) => {
    const { text } = req.body;

    const checkGoal = await Goal.findOne({ text: text });

    if (checkGoal) {
      throw errorHandler(DUPLICATE_ERROR, "Goal already exist!");
    } else {
      const newGoal = await Goal.create({
        user: req.user.id,
        text: text,
      });

      res.status(SUCCESS).json(newGoal);
    }
  })
);

const updateGoal = asyncHandler(
  tryCatch(async (req, res) => {
    const { id } = req.params;
    const { text } = req.body;

    validateMongoDbId(id);

    const user = await User.findById(req.user.id);
    const goal = await Goal.findById(id);

    if (!user) {
      throw errorHandler(NOT_FOUND, "User not found");
    }

    if (goal.user.toString() !== user.id) {
      throw errorHandler(UNAUTHORIZED, "User not authorized");
    }

    const goalDetails = await Goal.findByIdAndUpdate(
      id,
      {
        text: text,
      },
      {
        new: true,
      }
    );

    res.status(SUCCESS).json(goalDetails);
  })
);

const deleteGoal = asyncHandler(
  tryCatch(async (req, res) => {
    const { id } = req.params;

    validateMongoDbId(id);

    const user = await User.findById(req.user.id);
    const goal = await Goal.findById(id);

    if (!user) {
      throw errorHandler(NOT_FOUND, "User not found");
    }

    if (goal.user.toString() !== user.id) {
      throw errorHandler(UNAUTHORIZED, "User not authorized");
    }

    const deletedGoals = await Goal.findByIdAndUpdate(
      id,
      {
        isDeleted: true,
        deletedAt: new Date(),
      },
      {
        new: true,
      }
    );

    res.status(SUCCESS).json(deletedGoals);
  })
);

export {
  getGoal,
  getUserGoals,
  addGoal,
  updateGoal,
  deleteGoal,
  getDeletedGoals,
};
