import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
// import articlesRoute from "./routes/articles.js";

dotenv.config();

const app = express();

/* Middleware */
app.use(express.json());

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://getkit-nu.vercel.app"
  ],
  credentials: true
}));

/* MongoDB Connection */
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

/* Test Route */
app.get("/", (req, res) => {
  res.send("Backend Running");
});

/* Routes */
app.use("/api/auth", authRoutes);
// app.use("/api/articles", articlesRoute);

/* Port */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});