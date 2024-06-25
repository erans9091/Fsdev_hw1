// import express from "express";
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import cors from "cors";

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
  await Note.findByIdAndDelete(id).then(
  );
};

const updateNote = async (id, newNote) => {
  await Note.findByIdAndUpdate(id, newNote)
    .then((obj) => res.status(201).send(obj._id))
    .catch(() => res.status(500).send());
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
});

const Note = mongoose.model("Note", noteSchema);

// Note.countDocuments({}).then((result) => {
// console.log("totalNotes", result);
// });

// const note = new Note({
//   id: 1,
//   title: "Note 1",
//   author: {
//     name: "Author 1",
//     email: "author1@gmail.com",
//   },
//   content: "This is the first note",
// });

// note.save().then((result:Result) => {
//     console.log("result", result);
//   console.log("note saved!");
//   mongoose.connection.close();
// });

noteSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

app.get("/notes", async (req, res) => {
  logger.log("GET", "/notes");
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
  logger.log("GET", `/notes/${req.params.ith}`);
  const ith = parseInt(req.params.ith);
  const note = await Note.findOne().skip(ith - 1);
  res.json(note);
});
app.get("/", (req, res) => {
  res.status(200).send("server is running!");
});
app.post("/notes", async (req, res) => {
  const newNote = req.body.post;

  await Note.create(newNote)
    .then((obj) => res.status(201).send(obj._id))
    .catch(() => res.status(400).send("can't add"));
});
app.put("/notes/:ith", async (req, res) => {
  const ith = parseInt(req.params.ith);
  const newNote = req.body.put;
  const note = await Note.findOne().skip(ith - 1);
  note ? updateNote(note._id, newNote) : res.status(404).send("note not found");// TODO: fix response
});
app.delete("/notes/:ith", async (req, res) => {
  const ith = parseInt(req.params.ith);
  const note = await Note.findOne().skip(ith - 1);
  note ? deleteNote(note._id) : res.status(404).send("note not found");// TODO: fix response
});
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
