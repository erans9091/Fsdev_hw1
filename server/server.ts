
const mongoose = require("mongoose");
const express = require("express");

const app = express();
const port = 3001;

const password = process.argv[2];

const url = `mongodb+srv://FsDev:${password}@notes.ve3ednu.mongodb.net/?retryWrites=true&w=majority&appName=notes`;

mongoose.set("strictQuery", false);

mongoose.connect(url);


const noteSchema = new mongoose.Schema({
    id: Number,
    title: String,
    author: {
        name: String,
        email: String,
        } || null,
    content: String,
});

const Note = mongoose.model("Note", noteSchema);

const note = new Note({
    id: 1,
    title: "Note 1",
    author: {
        name: "Author 1",
        email: "author1@gmail.com",
    },
    content: "This is the first note",
});

note.save().then((result:Result) => {
    console.log("result", result);
  console.log("note saved!");
  mongoose.connection.close();
});
