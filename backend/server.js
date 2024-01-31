import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import dbConn from "./config/dbConn.js";
import { serverError } from "./middleware/errorMiddleware.js";
import goalRoutes from "./routes/goal.js";
import userRoutes from "./routes/user.js";

// Config
dotenv.config();
dbConn();
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: false }));

// Routers
app.use("/api/goal/", goalRoutes);
app.use("/api/user/", userRoutes);

// Middleware
app.use(serverError);

// Port and Database Config
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
