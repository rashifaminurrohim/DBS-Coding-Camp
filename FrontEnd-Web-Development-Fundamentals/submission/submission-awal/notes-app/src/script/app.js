import './components/app-bar.js';
import './components/note-item.js';
import './components/note-list.js';
import './components/note-form.js';


import { notesData } from './data/dummy.js';

document.addEventListener("DOMContentLoaded", () => {
  const mainContent = document.querySelector("main");

  const noteList = document.createElement("note-list");
  noteList.setAttribute("column", "3");
  noteList.setAttribute("gutter", "16");

  notesData.forEach(note => {
    const noteItem = document.createElement("note-item");
    noteItem.note = note;
    noteList.appendChild(noteItem);
  });

  const noteForm = document.createElement("note-form");

  noteForm.addEventListener("newNoteAdded", (event) => {
    const newNote = event.detail;
    const noteItem = document.createElement("note-item");
    noteItem.note = newNote;
    noteList.appendChild(noteItem);
  });

  mainContent.appendChild(noteForm);
  mainContent.appendChild(noteList);
});
