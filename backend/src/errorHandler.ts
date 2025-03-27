import { Request, Response, NextFunction } from "express";
import logger from "./logger";
import AppError from "./appError";

// Global error handling middleware
const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    const statusCode = err instanceof AppError ? err.statusCode : err.statusCode || 500;

    // Log the error globally
    logger.error({
        message: err.message,
        stack: err.stack,
        statusCode,
        route: req.originalUrl,
        method: req.method,
        ip: req.ip
    });

    res.status(statusCode).json({
        success: false,
        message: err.message || "Internal Server Error",
    });
};

export default errorHandler;
