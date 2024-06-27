const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const bodyParser = require("body-parser");
const logger = require("./logger").initLogger();

dotenv.config();
const port = process.env.PORT;

const app = express();
const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

app.use(bodyParser.json());
app.use(cors(corsOptions));

const password = process.argv[2];
const url = process.env.MONGODB_CONNECTION_URL.replace("<password>", password);

const deleteNote = async (id) => {
  await Note.findByIdAndDelete(id);
};

const updateNote = async (id, newNote) => {
  await Note.findByIdAndUpdate(id, newNote);
};

mongoose.set("strictQuery", false);

mongoose
  .connect(url)
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.log("failed to connect to MongoDB!\n", error);
  });

const noteSchema = new mongoose.Schema({
  title: String,
  author:
    {
      name: String,
      email: String,
    } || null,
  content: String,
  id: Number,
});

const Note = mongoose.model("Note", noteSchema);

noteSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    // returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

app.get("/notes", async (req, res) => {
  logger.log("GET", req.url);
  const { _page, _limit } = req.query;
  const page = parseInt(_page) || 1;
  const limit = parseInt(_limit) || 10;
  const skip = (page - 1) * limit;

  const notes = await Note.find({}).skip(skip).limit(limit);

  // Get total note count
  const totalNotes = await Note.countDocuments({});

  res.header("Access-Control-Expose-Headers", "x-total-count");
  res.setHeader("x-total-count", totalNotes.toString());

  res.status(200).json(notes);
});

app.get("/notes/:ith", async (req, res) => {
  logger.log("GET", req.url);
  const ith = parseInt(req.params.ith);
  const note = await Note.findOne().skip(ith - 1);
  res.json(note);
});
app.get("/", async (req, res) => {
  res.status(200).send("server is running!");
});
app.post("/notes", async (req, res) => {
  const newNote = req.body.post;

  const count = await Note.collection.countDocuments();

  const last = await Note.findOne().skip(count - 1);
  const lastId = last.id || 0;

  await Note.create({ ...newNote, id: lastId + 1 })
    .then((obj) => res.status(201).send(obj._id))
    .catch(() => res.status(400).send("can't add"));
});
app.put("/notes/:ith", async (req, res) => {
  const ith = parseInt(req.params.ith);
  const newNote = req.body.put;

  logger.log("PUT", req.url, newNote);

  const note = await Note.findOne().skip(ith - 1);
  note
    ? updateNote(note._id, newNote).then(res.status(201).send("note updated"))
    : res.status(404).send("note not found"); // TODO: fix response
});
app.delete("/notes/:ith", async (req, res) => {
  logger.log("DELETE", req.url);
  const ith = parseInt(req.params.ith);
  const note = await Note.findOne().skip(ith - 1);
  note
    ? deleteNote(note._id).then(res.status(204).send("note deleted"))
    : res.status(404).send("note not found"); // TODO: fix response
});
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
