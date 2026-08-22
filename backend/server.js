import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.js";
import customRequestRoutes from "./routes/customRequests.js";
import { errorHandler } from "./middleware/errorHandler.js";

dotenv.config();

const app = express();

/* Middleware */

app.use(express.json());

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://getkit-nu.vercel.app"
    ],
    credentials: true
  })
);

app.use(cookieParser());

/* MongoDB Connection */

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

/* Test Route */

app.get("/", (req, res) => {
  res.send("Backend Running");
});

/* Routes */

app.use("/api/auth", authRoutes);

app.use("/api/custom-requests", customRequestRoutes);

/* 404 Handler */

app.use((req, res) => {
  res.status(404).json({
    message: "Route not found"
  });
});

/* Centralized Error Handler */

app.use(errorHandler);

/* Port */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});