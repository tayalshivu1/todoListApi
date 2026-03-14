import { Note } from "../models/notesModel.js";

export const getNotesData = async (req, res) => {
  const notes = await Note.find({ user: req.user });
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
  console.log(req.body, req.user);
  const { title, content } = req.body;

  await Note.create({ title, content, user: req.user });

  res.status(201).json({ messgae: "Note added" });
};

export const deleteNote = async (req, res, next) => {
  // const note = await Note.findById(req.params.id);
  const note = await Note.findOne({ _id: req.params.id, user: req.user });
  if (!note) {
    return next(new Error("Note not found"));
  }

  await note.deleteOne();
  res.status(200).json({ message: "Note deleted" });
};

export const editNote = async (req, res) => {
  const note = await Note.findOne({ _id: req.params.id, user: req.user });

  if (!note) {
    return next(new Error("id not found"));
  }

  note.title = req.body.title;
  note.content = req.body.content;

  const updateNotes = await note.save();

  res.status(200).json(updateNotes);
};
