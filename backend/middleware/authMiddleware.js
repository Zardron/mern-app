import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import { errorHandler } from "./errorMiddleware.js";
import { UNAUTHORIZED } from "../utils/constant.js";

const protectedRoute = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      throw errorHandler(UNAUTHORIZED, "Not authorized");
    }
  }

  if (!token) {
    throw errorHandler(UNAUTHORIZED, "Not authorized, no token found");
  }
});

export { protectedRoute };
