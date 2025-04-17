import "../styles/style.css";
import "./components/app-bar.js";
import "./components/note-item.js";
import "./components/note-list.js";
import "./components/note-form.js";
import "./components/loading-indicator.js";
import Swal from "sweetalert2";
import { gsap } from "gsap";
import { notesApi } from "./data/remote/notes.api.js";
const {
  getNotes,
  createNote,
  deleteNote,
  archiveNote,
  getArchivedNotes,
  unarchiveNote,
  getAllNotes,
} = notesApi();

document.addEventListener("DOMContentLoaded", async () => {
  const mainContent = document.getElementById("main-content");
  const noteSection = document.querySelector(".note-section");
  const formSection = document.querySelector(".form-section");
  const noteList = document.createElement("note-list");
  let currentFilter = "all";

  const loadingIndicator = document.createElement("loading-indicator");
  loadingIndicator.style.display = "none";
  document.body.appendChild(loadingIndicator);

  function showLoading() {
    loadingIndicator.style.display = "flex";
  }

  function hideLoading() {
    loadingIndicator.style.display = "none";
  }

  async function withLoading(callback) {
    showLoading();
    try {
      return await callback();
    } finally {
      hideLoading();
    }
  }

  function renderNotes(notes, emptyMessage = "No notes found") {
    noteList.innerHTML = "";

    if (!notes || notes.length === 0) {
      noteList.innerHTML = `<p style="grid-column: 1 / -1; text-align: center;">${emptyMessage}</p>`;
      return;
    }

    notes.forEach((note) => {
      const noteItem = createNoteItem(note);
      noteList.appendChild(noteItem);
    });
  }

  const appBar = document.querySelector("app-bar");
  appBar.addEventListener("toggleForm", () => {
    // Jalankan toggle DULU, sesuai permintaan
    mainContent.classList.toggle("show");

    // Lalu cek: apakah sekarang form sedang ditampilkan?
    const isVisible = mainContent.classList.contains("show");

    if (isVisible) {
      // Kalau form baru dimunculkan
      formSection.style.display = "grid";
      gsap.fromTo(
        formSection,
        { opacity: 0.6, x: -150 },
        { opacity: 1, x: 0, duration: 0.6, ease: "power2.out" },
      );
    } else {
      formSection.style.display = "none";
    }
  });

  appBar.addEventListener("filterNotes", async (event) => {
    currentFilter = event.detail.filter;

    const result = await withLoading(async () => {
      if (currentFilter === "archive") {
        return await getArchivedNotes();
      } else if (currentFilter === "all") {
        return await getAllNotes();
      } else {
        return await getNotes();
      }
    });

    if (!result.success) {
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: `${result.message}`,
      });
      return;
    }

    let filteredNotes = result.data;
    if (currentFilter === "unarchive") {
      filteredNotes = filteredNotes.filter((note) => !note.archived);
    }

    renderNotes(filteredNotes);
  });

  function createNoteItem(note) {
    const noteItem = document.createElement("note-item");
    noteItem.note = note;

    // delete
    noteItem.onDelete = async (noteId) => {
      Swal.fire({
        title: "Are you sure?",
        text: "This note will be deleted permanently.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "Cancel",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const result = await withLoading(() => deleteNote(noteId));
          if (result.success) {
            noteItem.remove();
            Swal.fire({
              icon: "success",
              title: "Success!",
              text: `${result.message}`,
            });
          } else {
            Swal.fire({
              icon: "error",
              title: "Oops!",
              text: `${result.message}`,
            });
          }
        }
      });
    };

    // archive & unarchive
    noteItem.onArchiveToggle = async (noteId) => {
      let result = await withLoading(async () => {
        if (note.archived) {
          return await unarchiveNote(noteId);
        } else {
          return await archiveNote(noteId);
        }
      });

      if (result.success) {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: `${result.message}`,
        });
        note.archived = !note.archived;
        noteItem.note = { ...note };
        if (currentFilter !== "all") {
          noteItem.remove();
        }
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops!",
          text: `${result.message}`,
        });
      }
    };

    return noteItem;
  }

  // getAll
  const result = await withLoading(() => getAllNotes());
  if (result.success) {
    renderNotes(result.data);
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops!",
      text: `${result.message}`,
    });
  }

  const noteForm = document.querySelector("note-form");
  // create
  noteForm.addEventListener("newNoteAdded", async (event) => {
    const { title, body } = event.detail;
    const result = await withLoading(() => createNote(title, body));
    if (result.success) {
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Note created",
      });
      const noteItem = createNoteItem(result.data);
      if (currentFilter === "all" || currentFilter === "unarchive") {
        noteList.appendChild(noteItem);
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "An error occurred while adding a note.",
      });
    }
  });
  noteSection.appendChild(noteList);
});
