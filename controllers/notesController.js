import { Note } from "../models/notesModel.js";

export const getNotesData = async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
};

export const getNote = async (req, res) => {
  const id = req.params.id;
  const note = await Note.findById(id);

  if (!note) {
    return res.status(404).send("<h1>Note not found for this id</h1>");
  }

  res.json(note);
};

export const addNote = async (req, res) => {
  const { title, content } = req.body;

  await Note.create({ title, content });

  res.status(201).json({ messgae: "Note added" });
};

export const deleteNote = async (req, res, next) => {
  const note = await Note.findById(req.params.id);
  if (!note) {
    return next(new Error("Note not found"));
  }

  await note.deleteOne();
  res.status(200).json({ message: "Note deleted" });
};

export const editNote = async (req, res) => {
  const updateNotes = await Note.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true },
  );

  if (!updateNotes) {
    return next(new Error("id not found"));
  }

  res.status(200).json(updateNotes);
};
