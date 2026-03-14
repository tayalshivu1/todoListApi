import express from "express";
import {
  registerUser,
  loginUser,
  getUserProfile,
} from "../controllers/authController.js";
import { protect } from "../middleware/authMiddleware.js";

export const authRoutes = express.Router();

authRoutes.post("/register", registerUser);

authRoutes.post("/login", loginUser);

authRoutes.get("/me", protect, getUserProfile);
