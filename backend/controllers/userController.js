import asyncHandler from "express-async-handler";
import { tryCatch } from "../utils/tryCatch.js";

const getUsers = asyncHandler(
  tryCatch(async (req, res) => {
    res.status(200).json({ message: "GET USER" });
  })
);
const addUsers = asyncHandler(
  tryCatch(async (req, res) => {
    res.status(200).json({ message: "ADD USER" });
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

export { getUsers, addUsers, updateUsers, deleteUsers };
