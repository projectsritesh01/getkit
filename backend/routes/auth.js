import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { protect } from "../middleware/auth.js";
import AppError from "../utils/AppError.js";

const router = express.Router();

/*
  Create JWT and store it in an HTTP-only cookie
*/
const createToken = (userId, res) => {
  const token = jwt.sign(
    { id: userId },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d"
    }
  );

  res.cookie("token", token, {
    httpOnly: true,

    secure: process.env.NODE_ENV === "production",

    sameSite:
      process.env.NODE_ENV === "production"
        ? "none"
        : "lax",

    maxAge: 7 * 24 * 60 * 60 * 1000
  });
};


/* =========================
   SIGNUP
========================= */

router.post("/signup", async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    /* Required fields */

    if (!name || !email || !password) {
      throw new AppError(
        "Name, email and password are required",
        400
      );
    }

    /* Name validation */

    const trimmedName = name.trim();

    if (trimmedName.length < 2) {
      throw new AppError(
        "Name must be at least 2 characters long",
        400
      );
    }

    if (trimmedName.length > 50) {
      throw new AppError(
        "Name cannot exceed 50 characters",
        400
      );
    }

    /* Email validation */

    const normalizedEmail = email.trim().toLowerCase();

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(normalizedEmail)) {
      throw new AppError(
        "Please provide a valid email address",
        400
      );
    }

    /* Password validation */

    if (password.length < 8) {
      throw new AppError(
        "Password must be at least 8 characters long",
        400
      );
    }

    /* Check if user already exists */

    const userExists = await User.findOne({
      email: normalizedEmail
    });

    if (userExists) {
      throw new AppError(
        "User already exists",
        400
      );
    }

    /* Hash password */

    const hashedPassword = await bcrypt.hash(
      password,
      10
    );

    /* Create user */

    const user = await User.create({
      name: trimmedName,
      email: normalizedEmail,
      password: hashedPassword
    });

    /* Create authentication cookie */

    createToken(user._id, res);

    /* Response */

    res.status(201).json({
      message: "Account created successfully",

      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });

  } catch (error) {
    next(error);
  }
});


/* =========================
   LOGIN
========================= */

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    /* Required fields */

    if (!email || !password) {
      throw new AppError(
        "Email and password are required",
        400
      );
    }

    /* Normalize email */

    const normalizedEmail = email
      .trim()
      .toLowerCase();

    /* Find user */

    const user = await User.findOne({
      email: normalizedEmail
    });

    if (!user) {
      throw new AppError(
        "Invalid credentials",
        401
      );
    }

    /* Compare password */

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      throw new AppError(
        "Invalid credentials",
        401
      );
    }

    /* Create authentication cookie */

    createToken(user._id, res);

    /* Response */

    res.status(200).json({
      message: "Login successful",

      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });

  } catch (error) {
    next(error);
  }
});


/* =========================
   LOGOUT
========================= */

router.post("/logout", (req, res, next) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,

      secure: process.env.NODE_ENV === "production",

      sameSite:
        process.env.NODE_ENV === "production"
          ? "none"
          : "lax"
    });

    res.status(200).json({
      message: "Logged out successfully"
    });

  } catch (error) {
    next(error);
  }
});


/* =========================
   GET CURRENT USER
========================= */

router.get(
  "/me",
  protect,
  async (req, res, next) => {
    try {
      const user = await User
        .findById(req.user)
        .select("-password");

      if (!user) {
        throw new AppError(
          "User not found",
          404
        );
      }

      res.status(200).json({
        user
      });

    } catch (error) {
      next(error);
    }
  }
);


export default router;