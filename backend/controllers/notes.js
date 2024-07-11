const notesRouter = require("express").Router();
const Note = require("../models/note");
const logger = require("../utils/logger").initLogger();

notesRouter.use((req, res, next) => {
  logger.log(req.method, req.url, req.body);
  next();
});

const deleteNote = async (id) => {
  await Note.findByIdAndDelete(id);
};

const updateNote = async (id, newNote) => {
  await Note.findByIdAndUpdate(id, newNote);
};

notesRouter.get("/", async (req, res) => {
  const { _page, _limit } = req.query;
  const page = parseInt(_page) || 1;
  const limit = parseInt(_limit) || 10;
  const skip = (page - 1) * limit;

  const notes = await Note.find({}).skip(skip).limit(limit);

  if (!notes || notes.length === 0) {
    res.status(404).send("no notes found");
    return;
  }

  // Get total note count
  const totalNotes = await Note.countDocuments({});

  res.header("Access-Control-Expose-Headers", "x-total-count");
  res.setHeader("x-total-count", totalNotes.toString());

  res.status(200).json(notes);
});

notesRouter.get("/:ith", async (req, res) => {
  const ith = parseInt(req.params.ith);
  const note = await Note.findOne().skip(ith - 1);
  note ? res.status(200).json(note) : res.status(404).send("note not found");
});
notesRouter.get("/", async (req, res, next) => {
  res.status(200).send("server is running!");
});
notesRouter.post("/", async (req, res) => {
  const newNote = req.body.post;

  const count = await Note.collection.countDocuments();

  const last = await Note.findOne().skip(count - 1);
  const lastId = last.id || 0;

  await Note.create({ ...newNote, id: lastId + 1 })
    .then((obj) => res.status(201).send(obj._id))
    .catch(() => res.status(400).send("can't add"));
});
notesRouter.put("/:ith", async (req, res) => {
  const ith = parseInt(req.params.ith);
  const newNote = req.body.put;

  const note = await Note.findOne().skip(ith - 1);
  note
    ? updateNote(note._id, newNote)
        .then(res.status(201).send("note updated"))
        .catch(() => res.status(400).send("can't update"))
    : res.status(404).send("note not found");
});
notesRouter.delete("/:ith", async (req, res) => {
  const ith = parseInt(req.params.ith);
  const note = await Note.findOne().skip(ith - 1);
  note
    ? deleteNote(note._id).then(res.status(204).send("note deleted"))
    : res.status(404).send("note not found");
});

module.exports = notesRouter;
