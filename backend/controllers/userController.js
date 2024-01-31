import asyncHandler from "express-async-handler";
import { tryCatch } from "../utils/tryCatch.js";

const getUsers = asyncHandler(
  tryCatch(async (req, res) => {
    res.status(200).json({ message: "GET USER" });
  })
);

const getUserDetails = asyncHandler(
  tryCatch(async (req, res) => {
    res.status(200).json({ message: "GET USER DETAILS" });
  })
);

const registerUser = asyncHandler(
  tryCatch(async (req, res) => {
    res.status(200).json({ message: "REGISTER USER" });
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
