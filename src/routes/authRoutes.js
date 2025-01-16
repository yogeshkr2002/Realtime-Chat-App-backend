import express from "express";
import {
  checkAuth,
  login,
  logout,
  signup,
  updateProfile,
} from "../controllers/authController.js";
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

// Check for Authentication
router.get("/check", protectRoute, checkAuth);

export default router;
