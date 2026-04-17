import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
// import articlesRoute from "./routes/articles.js";


dotenv.config();

const app = express();

/* Middleware */
app.use(cors());
app.use(express.json());

/* MongoDB Connection */
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

/* Routes */
app.use("/api/auth", authRoutes);
// app.use("/api/articles", articlesRoute);

app.listen(5000, () => console.log("Server running on port 5000"));