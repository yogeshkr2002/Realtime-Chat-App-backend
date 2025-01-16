import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import { connectDB } from "./lib/db.js";

const app = express();

// Middlewares
app.use(express.json());
app.use(cookieParser());
dotenv.config();

const PORT = process.env.PORT;

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on PORT : ${PORT}`);
  connectDB();
});
