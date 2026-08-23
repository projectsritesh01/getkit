import express from "express";
import CustomRequest from "../models/CustomRequest.js";
import AppError from "../utils/AppError.js";

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    const {
      name,
      email,
      type,
      description
    } = req.body;

    // Required fields
    if (!name || !email || !type || !description) {
      throw new AppError(
        "All fields are required",
        400
      );
    }

    // Name validation
    const trimmedName = name.trim();

    if (trimmedName.length < 2) {
      throw new AppError(
        "Name must be at least 2 characters long",
        400
      );
    }

    // Email validation
    const normalizedEmail = email
      .trim()
      .toLowerCase();

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(normalizedEmail)) {
      throw new AppError(
        "Please provide a valid email address",
        400
      );
    }

    // Type validation
    if (!["Template", "Product"].includes(type)) {
      throw new AppError(
        "Invalid request type",
        400
      );
    }

    // Description validation
    const trimmedDescription = description.trim();

    if (trimmedDescription.length < 10) {
      throw new AppError(
        "Description must be at least 10 characters long",
        400
      );
    }

    // Create request
    const customRequest = await CustomRequest.create({
      name: trimmedName,
      email: normalizedEmail,
      type,
      description: trimmedDescription
    });

    res.status(201).json({
      message: "Custom request submitted successfully",
      request: customRequest
    });

  } catch (error) {
    next(error);
  }
});

export default router;