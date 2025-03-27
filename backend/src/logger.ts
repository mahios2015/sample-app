import winston from "winston";
import path from "path";
import fs from "fs";

// Ensure logs directory exists
const logDir = path.join(__dirname, "../logs");
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}

// Create a centralized logger
const logger = winston.createLogger({
    level: "error",
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(({ timestamp, level, message, stack }) => {
            return `${timestamp} [${level.toUpperCase()}]: ${message} ${stack ? `\nStack: ${stack}` : ""}`;
        })
    ),
    transports: [
        new winston.transports.Console(), // Log errors to console
        new winston.transports.File({ filename: path.join(logDir, "errors.log") }) // Log errors to file
    ],
});

export default logger;
