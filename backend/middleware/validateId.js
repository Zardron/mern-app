import mongoose from "mongoose";
import { errorHandler } from "./errorMiddleware.js";
import { NOT_FOUND_ERROR } from "../utils/constant.js";

export const validateMongoDbId = (id) => {
  const isValid = mongoose.Types.ObjectId.isValid(id);

  if (!isValid)
    throw errorHandler(NOT_FOUND_ERROR, "The ID is not valid or Not Found");
};
