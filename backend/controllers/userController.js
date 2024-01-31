import asyncHandler from "express-async-handler";
import { tryCatch } from "../utils/tryCatch.js";

const getUsers = asyncHandler(tryCatch(async (req, res) => {}));
const addUsers = asyncHandler(tryCatch(async (req, res) => {}));
const updateUsers = asyncHandler(tryCatch(async (req, res) => {}));
const deleteUsers = asyncHandler(tryCatch(async (req, res) => {}));

export { getUsers, addUsers, updateUsers, deleteUsers };
