import express from "express";
import { login, logout, signup } from "../controllers/authController.js";

const router = express.Router();

// Register/Sign Up
router.post("/signup", signup);

// Login
router.post("/login", login);

// Logout
router.post("/logout", logout);

export default router;
