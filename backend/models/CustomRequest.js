import mongoose from "mongoose";

const customRequestSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 50
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true
    },

    type: {
      type: String,
      required: true,
      enum: ["Template", "Product"]
    },

    description: {
      type: String,
      required: true,
      trim: true,
      minlength: 10,
      maxlength: 1000
    },

    status: {
      type: String,
      enum: ["pending", "reviewing", "completed", "rejected"],
      default: "pending"
    }
  },
  {
    timestamps: true
  }
);

const CustomRequest = mongoose.model(
  "CustomRequest",
  customRequestSchema
);

export default CustomRequest;