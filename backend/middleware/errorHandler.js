export const errorHandler = (err, req, res, next) => {
  console.error("ERROR:", err);

  // Mongoose validation error
  if (err.name === "ValidationError") {
    const messages = Object.values(err.errors).map(
      (error) => error.message
    );

    return res.status(400).json({
      message: messages.join(", ")
    });
  }

  // Mongoose duplicate key error
  if (err.code === 11000) {
    const field = Object.keys(err.keyPattern)[0];

    return res.status(400).json({
      message: `${field} already exists`
    });
  }

  // Invalid MongoDB ObjectId
  if (err.name === "CastError") {
    return res.status(400).json({
      message: "Invalid resource ID"
    });
  }

  // JWT errors
  if (err.name === "JsonWebTokenError") {
    return res.status(401).json({
      message: "Invalid authentication token"
    });
  }

  if (err.name === "TokenExpiredError") {
    return res.status(401).json({
      message: "Authentication token has expired"
    });
  }

  // Default error
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    message:
      statusCode === 500
        ? "Something went wrong on the server"
        : err.message
  });
};