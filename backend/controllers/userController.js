import asyncHandler from "express-async-handler";
import { tryCatch } from "../utils/tryCatch.js";
import { errorHandler } from "../middleware/errorMiddleware.js";
import { DUPLICATE, INVALID, REQUIRED, SUCCESS } from "../utils/constant.js";
import bcrypt from "bcryptjs";
import User from "../models/userModel.js";
import { generateToken } from "../middleware/generateToken.js";

const getUsers = asyncHandler(
  tryCatch(async (req, res) => {
    const users = await User.find();

    res.status(SUCCESS).json(users);
  })
);

const getUserDetails = asyncHandler(
  tryCatch(async (req, res) => {
    const { _id, name, email } = await User.findById(req.user.id);

    res.status(SUCCESS).json({
      id: _id,
      name,
      email,
    });
  })
);

const registerUser = asyncHandler(
  tryCatch(async (req, res) => {
    const { name, email, password } = req.body;

    const checkEmail = await User.findOne({ email });

    if (!name || !email || !password)
      throw errorHandler(REQUIRED, "All fields are required");

    if (checkEmail) throw errorHandler(DUPLICATE, "Email already exist");

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
      token: generateToken(newUser._id),
    });
  })
);

const loginUser = asyncHandler(
  tryCatch(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    const comparePassword = await bcrypt.compare(password, user.password);

    if (user && comparePassword) {
      res.status(SUCCESS).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      throw errorHandler(INVALID, "Invalid Credentials");
    }
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
