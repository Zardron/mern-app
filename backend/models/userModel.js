import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Please add name"],
    },
    email: {
      type: String,
      require: [true, "Please add email"],
      unique: true,
    },
    password: {
      type: String,
      require: [true, "Please add password"],
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
