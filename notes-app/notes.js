const fs = require("fs");

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log("New note added!");
  } else {
    console.log("Note title taken!");
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => note.title !== title);

  if (notes.length > notesToKeep.length) {
    saveNotes(notesToKeep);
    console.log("Note removed!");
  } else {
    console.log("No note found!");
  }
};

const listNotes = () => {
  const notes = loadNotes();

  console.log("Your notes");

  notes.forEach((note) => {
    console.log(note.title);
  });
};

const readNote = (title) => {
  try {
    const notes = loadNotes();
    const note = notes.find((note) => note.title === title);
    console.log(note, typeof note);
    console.log(note.title);
    console.log(note.body);
  } catch (error) {
    // console.log(error);
    console.log("Suces");
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
};
