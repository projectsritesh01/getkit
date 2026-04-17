import express from "express";
import Article from "../models/Article.js";

const router = express.Router();

// Get all articles
router.get("/", async (req, res) => {
  const articles = await Article.find().sort({ createdAt: -1 });
  res.json(articles);
});

// Get single article by slug
router.get("/:slug", async (req, res) => {
  const article = await Article.findOne({ slug: req.params.slug });
  res.json(article);
});

// Create article (admin)
router.post("/", async (req, res) => {
  const article = new Article(req.body);
  await article.save();
  res.json(article);
});

export default router;