const notesFile = require("../data/notes.json");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const password = process.argv[2];
//@ts-ignore
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
  noteCount: Number,
});

const Note = mongoose.model("Note", noteSchema);




const fillDBFromJSON = () => {

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

};


const updateNoteCount = () => {
  Note.find({}).then((notes) => {
    for (let i = 0; i < notes.length; i++) {
      notes[i].noteCount = i + 1;
      notes[i].save().then((result) => {
        console.log("Note count updated successfully!", i);
      });
    }
  }
  );
}


const main = () => {

  console.log("enter the function you want to run: ");
  console.log("1. fillDBFromJSON");
  console.log("2. updateNoteCount");

  //get input from user
  process.stdin.on('data', (data) => {
    const num = data.toString().trim();

    switch (num) {
      case "1":
        fillDBFromJSON();
        break;
      case "2":
        updateNoteCount();
        break;
      default:
        console.log("invalid input");
    }

  
  });

}

main();