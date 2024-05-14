import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
dotenv.config();

// Assuming that these modules have default exports
import app from './config/serverConfig';
// Import routes
import userRoutes from "./routes/userRoutes";
import orderRoutes from "./routes/orderRoutes";

// Use routes
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);

// Error handling
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(500).send({ message: err.message });
});
