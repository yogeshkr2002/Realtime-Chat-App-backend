import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import { connectDB } from "./lib/db.js";
import cors from "cors";
import path from "path";
import { app, server } from "./lib/socket.js";

// const app = express();

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
dotenv.config();

const PORT = process.env.PORT;
const __dirname = path.resolve();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../frontend/dist")));

//   app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
//   });
// }

server.listen(PORT, () => {
  console.log(`Server is running on PORT : ${PORT}`);
  connectDB();
});
