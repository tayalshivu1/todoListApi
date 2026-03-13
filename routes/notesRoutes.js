import express from "express";
import {
  addNote,
  deleteNote,
  getNote,
  getNotesData,
  editNote,
} from "../controllers/notesController.js";

export const route = express.Router();

route.get("/", (req, res) => {
  res.send("This is homepage");
});

route.get("/notes", getNotesData);

route.get("/notes/:id", getNote);

route.post("/notes", addNote);

route.delete("/notes/:id", deleteNote);

route.put("/notes/:id", editNote);
