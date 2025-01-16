import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

// -------------Protect Route Middleware------------------

export const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      // console.log("No token provided");
      return res
        .status(401)
        .json({ message: "Unauthorized - No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // console.log("Decoded token:", decoded);

    if (!decoded)
      return res.status(401).json({ message: "Unauthorized - Invalid Token" });

    const user = await User.findById(decoded.userid).select("-password");
    // console.log("user:", user);

    if (!user) {
      // console.log("User not found with ID:", decoded.userId);
      return res.status(404).json({ message: "User not found" });
    }

    // Add the user to request
    req.user = user;

    next();
  } catch (error) {
    console.log("Error in protectRoute middleware:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// -----------------------------------------------------------
