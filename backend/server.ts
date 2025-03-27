import app from "./src/app";
import dotenv from "dotenv";
import express from "express";
import logger from "./src/logger";
import path from "path";
import errorHandler from "./src/errorHandler";
import AppError from "./src/appError";
import fs from "fs";

dotenv.config();

const PORT = process.env.PORT || 3000;

// Serve React build
const reactBuildPath = path.join(__dirname, "build");
app.use(express.static(reactBuildPath));

// Middleware to capture all request errors (including missing files)
app.get("*", (req, res, next) => {
    const indexPath = path.join(reactBuildPath, "index.html");
    if (!fs.existsSync(indexPath)) {
        return next(new AppError("React build not found. Please run 'npm run build' in frontend.", 500));
    }
    res.sendFile(indexPath);
});

// Attach the global error handler middleware
app.use(errorHandler);

// Handle Uncaught Exceptions Globally
process.on("uncaughtException", (err) => {
    logger.error({ message: "Uncaught Exception", error: err });
    process.exit(1);
});

// Handle Unhandled Promise Rejections Globally
process.on("unhandledRejection", (reason) => {
    logger.error({ message: "Unhandled Rejection", reason });
    process.exit(1);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
