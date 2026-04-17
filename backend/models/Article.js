import mongoose from "mongoose";

const articleSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    subtitle: String,
    content: { type: String, required: true },
    metaTitle: String,
    metaDescription: String,
    tags: [String],
    slug: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

export default mongoose.model("Article", articleSchema);