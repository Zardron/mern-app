import mongoose from "mongoose";

const goalSchema = new mongoose.Schema({});

const Goal = mongoose.model("Goal", goalSchema);

export default Goal;
