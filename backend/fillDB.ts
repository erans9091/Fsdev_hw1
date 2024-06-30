const notesFile = require("../data/notes.json");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const password = process.argv[2];
//@ts-ignore
const url = process.env.MONGODB_CONNECTION_URL.replace("<password>", password);

mongoose.set("strictQuery", false);

mongoose
  .connect(url)
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((error: any) => {
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




const fillDBFromJSON = () => {

  for (let note of notesFile.notes) {

    const newNote = new Note({
      id: note.id,
      title: note.title,
      author: note.author,
      content: note.content,
    });

    newNote.save().then((result: any) => {
      console.log("Note saved successfully!");
    });

  }

};


const updateNoteCount = () => {
  Note.find({}).then((notes: any) => {
    for (let i = 0; i < notes.length; i++) {
      console.log("update note", i);
      notes[i].id = i
      console.log(notes[i]);
      notes[i].save().then((result: any) => {
        console.log("Note count updated successfully!", i);
        console.log(result);
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