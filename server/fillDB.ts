const notesFile = require("../data/notes.json");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const password = process.argv[2];
const url = process.env.URL.replace("<password>", password);

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


for (let note of notesFile.notes) {

    const newNote = new Note({
        id: note.id,
        title: note.title,
        author: note.author,
        content: note.content,
    });

    newNote.save().then((result) => {
        console.log("Note saved successfully!");
    });

}
