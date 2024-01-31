import mongoose from "mongoose";
import { errorHandler } from "./errorMiddleware.js";
import { NOT_FOUND } from "../utils/constant.js";

export const validateMongoDbId = (id) => {
  const isValid = mongoose.Types.ObjectId.isValid(id);

  if (!isValid)
    throw errorHandler(NOT_FOUND, "The ID is not valid or Not Found");
};
