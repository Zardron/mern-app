import express from "express";
import dotenv from "dotenv";
import goalRoutes from "./routes/goal.js";

const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config();

app.use("/api/goal/", goalRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
