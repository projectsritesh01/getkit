import express from "express";
import CustomRequest from "../models/CustomRequest.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const {
      name,
      email,
      type,
      description
    } = req.body;

    if (!name || !email || !type || !description) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    const customRequest = new CustomRequest({
      name,
      email,
      type,
      description
    });

    await customRequest.save();

    res.status(201).json({
      message: "Custom request submitted successfully"
    });

  } catch (error) {
    console.error("Custom request error:", error);

    res.status(500).json({
      message: "Failed to submit custom request"
    });
  }
});

export default router;