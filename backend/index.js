const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const bcrypt = require('bcrypt');

const bodyParser = require("body-parser");
const logger = require("./logger").initLogger();

dotenv.config();

const app = express();
const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

app.use(bodyParser.json());
app.use(cors(corsOptions));

const port = process.env.PORT || 3001;

let password;
let url;
if (process.argv.length > 2) {
  password = process.argv[2];
  url = process.env.MONGODB_CONNECTION_URL.replace("<password>", password);
} else {
  url = process.env.MONGODB_CONNECTION_URL;
}
// const url = process.env.MONGODB_CONNECTION_URL.replace("<password>", password);
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
export const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  username: String,
  passwordHash: String
});

const Note = mongoose.model("Note", noteSchema);
export const User = mongoose.model("User", userSchema);

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

noteSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    // returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});
userSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.passwordHash
  },
});

app.get("/notes", async (req, res) => {
  logger.log("GET", req.url);
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

app.get("/notes/:ith", async (req, res) => {
  logger.log("GET", req.url);
  const ith = parseInt(req.params.ith);
  const note = await Note.findOne().skip(ith - 1);
  note ? res.status(200).json(note) : res.status(404).send("note not found");
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
    ? updateNote(note._id, newNote)
      .then(res.status(201).send("note updated"))
      .catch(() => res.status(400).send("can't update"))
    : res.status(404).send("note not found");
});
app.delete("/notes/:ith", async (req, res) => {
  logger.log("DELETE", req.url);
  const ith = parseInt(req.params.ith);
  const note = await Note.findOne().skip(ith - 1);
  note
    ? deleteNote(note._id).then(res.status(204).send("note deleted"))
    : res.status(404).send("note not found");
});
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.post("/user", async (req, res) => {
  const userData = req.body.post;
  const saltRounds = 10
  const ph = await bcrypt.hash(userData["password"], saltRounds)
  await User.create({
    name: userData["name"],
    email: userData["email"],
    username: userData["username"],
    passwordHash: ph
  })
    .then((obj) => res.status(201).send(obj._id))
    .catch(() => res.status(400).send("can't add user"));
})

app.post("/login", async (req, res) => {
  const { un, pw } = req.body.post;
  const saltRounds = 10;
  const ph = await bcrypt.hash(pw, saltRounds);
  const user = await User.findOne({ username: un, passwordHash: ph });
  user ? res.status(201).send({ token: "token", name: user["name"], email: user["email"] }:
    res.status(500).send(`can't login to user: ${un}`)
  )//Todo: return uniqe token
})