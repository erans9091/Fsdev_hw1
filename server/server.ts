import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const port = process.env.PORT;
// const mongoose = require("mongoose");
// const express = require("express");
// const dotenv = require("dotenv");
const app = express();
const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

const password = process.argv[2];

const url = process.env.URL!.replace("<password>", password);

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



noteSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

app.get("/notes", async (req, res) => {
  console.log("recieved a request from: ", req.url);
  const { _page, _limit } = req.query;
  const page = parseInt(_page as string) || 1;
  const limit = parseInt(_limit as string) || 10;
  const skip = (page - 1) * limit;

  const notes = await Note.find({}).skip(skip).limit(limit);

  // Get total note count
  const totalNotes = await Note.countDocuments({});

  res.header("Access-Control-Expose-Headers", "x-total-count");
  res.setHeader("x-total-count", totalNotes.toString());

  res.json(notes);
});

app.get("/", (req, res) => {
  res.send("server is running!");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
