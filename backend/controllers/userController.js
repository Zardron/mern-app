import asyncHandler from "express-async-handler";
import { tryCatch } from "../utils/tryCatch.js";
import { errorHandler } from "../middleware/errorMiddleware.js";
import { DUPLICATE_ERROR, REQUIRED, SUCCESS } from "../utils/constant.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/userModel.js";

const getUsers = asyncHandler(
  tryCatch(async (req, res) => {
    const users = await User.find();

    res.status(SUCCESS).json(users);
  })
);

const getUserDetails = asyncHandler(
  tryCatch(async (req, res) => {
    res.status(200).json({ message: "GET USER DETAILS" });
  })
);

const registerUser = asyncHandler(
  tryCatch(async (req, res) => {
    const { name, email, password } = req.body;

    const checkEmail = await User.findOne({ email });

    if (!name || !email || !password)
      throw errorHandler(REQUIRED, "All fields are required");

    if (checkEmail) throw errorHandler(DUPLICATE_ERROR, "Email already exist");

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      name: name,
      email: email,
      password: hashPassword,
    });

    res.status(SUCCESS).json({
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
    });
  })
);

const loginUser = asyncHandler(
  tryCatch(async (req, res) => {
    res.status(200).json({ message: "LOGIN USER" });
  })
);

const updateUsers = asyncHandler(
  tryCatch(async (req, res) => {
    res.status(200).json({ message: "UPDATE USER" });
  })
);
const deleteUsers = asyncHandler(
  tryCatch(async (req, res) => {
    res.status(200).json({ message: "DELETE USER" });
  })
);

export {
  getUsers,
  getUserDetails,
  registerUser,
  loginUser,
  updateUsers,
  deleteUsers,
};
