import './components/app-bar.js';
import './components/note-item.js';
import './components/note-list.js';
import './components/note-form.js';

import { notesApi } from './data/remote/notes.api.js';
const { getNotes, createNote, deleteNote, archiveNote, getArchivedNotes, unarchiveNote, getAllNotes } = notesApi();

document.addEventListener("DOMContentLoaded", async () => {
  const mainContent = document.getElementById('main-content');
  const noteSection = document.querySelector('.note-section')

  const appBar = document.querySelector('app-bar');
  
  appBar.addEventListener('toggleForm', () => {
    mainContent.classList.toggle('show');
  });

  appBar.addEventListener('filterNotes', async (event) => {
    const selected = event.detail.filter;

    let result;
    if (selected === 'archive') {
      result = await getArchivedNotes();
    } else if (selected === 'all') {
      result = await getAllNotes();
    } else {
      result = await getNotes();
    }

    if(!result.success) {
      alert(result.message);
      return;
    }

    noteList.innerHTML = '';

    let filteredNotes = result.data;
    if (selected === 'unarchive') {
      filteredNotes = filteredNotes.filter(note => !note.archived);
    }

    filteredNotes.forEach(note => {
      const noteItem = createNoteItem(note);
      noteList.appendChild(noteItem);
    });

  });

  const noteList = document.createElement("note-list");
  noteList.setAttribute("column", "3");
  noteList.setAttribute("gutter", "16");
  
  function createNoteItem(note) {
    const noteItem = document.createElement("note-item");
    noteItem.note = note;

    // delete
    noteItem.onDelete = async (noteId) => {
      const confirmDelete = confirm('Are you sure want to delete this note?');
      if (confirmDelete) {
        const result = await deleteNote(noteId);
        if (result.success) {
          noteItem.remove();
          alert(result.message);
        } else {
          alert(result.message);
        }
      }
    };

    // archive & unarchive
    noteItem.onArchiveToggle = async (noteId) => {
      let result;
      if (note.archived) {
        result = await unarchiveNote(noteId);
      } else {
        result = await archiveNote(noteId);
      }

      if (result.success) {
        alert(result.message);
        note.archived = !note.archived; 
        noteItem.note = { ...note };
        noteItem.remove();
      } else {
        alert(result.message);
      }
    };

    return noteItem;
  };

  // getAll
  const result = await getAllNotes();
  if (result.success) {
    result.data.forEach(note => {
      const noteItem = createNoteItem(note);
      noteList.appendChild(noteItem);
    });
  } else {
    alert(result.message);
  }

  const noteForm = document.querySelector("note-form");
  // create
  noteForm.addEventListener("newNoteAdded", async (event) => {
    const { title, body } = event.detail;
    const result = await createNote(title, body);
    if(result.success) {
      const noteItem = createNoteItem(result.data);
      noteList.appendChild(noteItem);
    } else {
      alert(result.message);
    }
  });
  noteSection.appendChild(noteList);

});
