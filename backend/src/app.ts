import express, { Request, Response } from "express";
import cors from "cors";
import AppError from "./appError";

const app = express();
app.use(cors());
app.use(express.json()); // Middleware to parse JSON requests

app.get("/data", (req: Request, res: Response) => {
    res.json({ receivedData: req.body });
});
app.get("/error", (req, res, next) => {
    next(new AppError("This is a custom error!", 400));
});
// Sample POST route
app.post("/data", (req: Request, res: Response) => {
    res.json({ receivedData: req.body });
});

export default app;
