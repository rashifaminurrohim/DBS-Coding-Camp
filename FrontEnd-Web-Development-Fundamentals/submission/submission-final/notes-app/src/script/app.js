import './components/app-bar.js';
import './components/note-item.js';
import './components/note-list.js';
import './components/note-form.js';
import './components/loading-indicator.js';

import { notesApi } from './data/remote/notes.api.js';
const { getNotes, createNote, deleteNote, archiveNote, getArchivedNotes, unarchiveNote, getAllNotes } = notesApi();

document.addEventListener("DOMContentLoaded", async () => {
  const mainContent = document.getElementById('main-content');
  const noteSection = document.querySelector('.note-section');
  const noteList = document.createElement("note-list");
  let currentFilter = 'all';


  const loadingIndicator = document.createElement('loading-indicator');
  loadingIndicator.style.display = 'none';
  document.body.appendChild(loadingIndicator);

  function showLoading() {
    loadingIndicator.style.display = 'flex';
  };

  function hideLoading() {
    loadingIndicator.style.display = 'none';
  };

  async function withLoading(callback) {
    showLoading();
    try {
      return await callback();
    } finally {
      hideLoading();
    }
  };

  function renderNotes(notes, emptyMessage = 'No notes found') {
    noteList.innerHTML = '';

    if (!notes || notes.length === 0) {
      noteList.innerHTML = `<p style="grid-column: 1 / -1; text-align: center;">${emptyMessage}</p>`;
      return;
    }

    notes.forEach(note => {
      const noteItem = createNoteItem(note);
      noteList.appendChild(noteItem);
    });
  };
  

  const appBar = document.querySelector('app-bar');
  appBar.addEventListener('toggleForm', () => {
    mainContent.classList.toggle('show');
  });

  appBar.addEventListener('filterNotes', async (event) => {
    currentFilter = event.detail.filter;

    const result = await withLoading(async () => {
      if (currentFilter === 'archive') {
        return await getArchivedNotes();
      } else if (currentFilter === 'all') {
        return await getAllNotes();
      } else {
        return await getNotes();
      }
    });

    if(!result.success) {
      alert(result.message);
      return; 
    }

    let filteredNotes = result.data;
    if (currentFilter === 'unarchive') {
      filteredNotes = filteredNotes.filter(note => !note.archived);
    }

    renderNotes(filteredNotes);
  });

  function createNoteItem(note) {
    const noteItem = document.createElement("note-item");
    noteItem.note = note;

    // delete
    noteItem.onDelete = async (noteId) => {
      const confirmDelete = confirm('Are you sure want to delete this note?');
      if (confirmDelete) {
        const result = await withLoading(() => deleteNote(noteId));
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
      let result = await withLoading( async () => {
        if (note.archived) {
          return await unarchiveNote(noteId);
        } else {
          return await archiveNote(noteId);
        }
      });

      if (result.success) {
        alert(result.message);
        note.archived = !note.archived; 
        noteItem.note = { ...note };
        if (currentFilter !== 'all') {
          noteItem.remove();
        }
      } else {
        alert(result.message);
      }
    };

    return noteItem;
  };

  // getAll
  const result = await withLoading(()=> getAllNotes());
  if (result.success) {
    renderNotes(result.data);
  } else {
    alert(result.message);
  }

  const noteForm = document.querySelector("note-form");
  // create
  noteForm.addEventListener("newNoteAdded", async (event) => {
    const { title, body } = event.detail;
    const result = await withLoading(() => createNote(title, body));
    if(result.success) {
      const noteItem = createNoteItem(result.data);
      if (currentFilter === 'all' || currentFilter === 'unarchive') {
        noteList.appendChild(noteItem);
      }
    } else {
      alert(result.message);
    }
  });
  noteSection.appendChild(noteList);

});
