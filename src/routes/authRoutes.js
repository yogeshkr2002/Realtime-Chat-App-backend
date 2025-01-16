import express from "express";
import { login, logout, signup } from "../controllers/authController.js";
import { protectRoute } from "../middleware/authMiddleware.js";

const router = express.Router();

// Register/Sign Up
router.post("/signup", signup);

// Login
router.post("/login", login);

// Logout
router.post("/logout", logout);

// Update profile
router.put("update-profile", protectRoute, updateProfile);

export default router;
