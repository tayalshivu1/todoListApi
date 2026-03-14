import express from "express";
import { registerUser, loginUser } from "../controllers/authController.js";
export const authRoutes = express.Router();

authRoutes.post("/register", registerUser);

authRoutes.post("/login", loginUser);
