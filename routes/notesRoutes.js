import express from "express";
import {
  addNote,
  deleteNote,
  getNote,
  getNotesData,
  editNote,
} from "../controllers/notesController.js";
import { protect } from "../middleware/authMiddleware.js";

export const route = express.Router();

route.get("/", (req, res) => {
  res.send("This is homepage");
});

route.get("/notes", protect, getNotesData);

route.get("/notes/:id", protect, getNote);

route.post("/notes", protect, addNote);

route.delete("/notes/:id", protect, deleteNote);

route.put("/notes/:id", protect, editNote);
