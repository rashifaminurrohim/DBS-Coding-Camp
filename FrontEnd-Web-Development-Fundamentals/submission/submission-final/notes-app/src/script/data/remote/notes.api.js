export const notesApi = () => {
  const BASE_URL = "https://notes-api.dicoding.dev/v2";

  const getNotes = async () => {
    try {
      const options = { method: "GET" };
      const response = await fetch(`${BASE_URL}/notes`, options);
      const responseJson = await response.json();

      if (responseJson.error) {
        return { success: false, message: responseJson.message };
      } else {
        return { success: true, data: responseJson.data };
      }
    } catch (error) {
      return {
        success: false,
        message: error.message || "Unknown error occurred",
      };
    }
  };

  const createNote = async (title, body) => {
    try {
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, body }),
      };
      const response = await fetch(`${BASE_URL}/notes`, options);
      const responseJson = await response.json();

      if (responseJson.error) {
        return { success: false, message: responseJson.message };
      } else {
        getNotes();
        return { success: true, data: responseJson.data };
      }
    } catch (error) {
      return {
        success: false,
        message: error.message || "Unknown error occurred",
      };
    }
  };

  const deleteNote = async (noteId) => {
    try {
      const options = {
        method: "DELETE",
      };
      const response = await fetch(`${BASE_URL}/notes/${noteId}`, options);
      const responseJson = await response.json();
      getNotes();
      return { success: true, message: responseJson.message };
    } catch (error) {
      return {
        success: false,
        message: error.message || "Unknown error occurred",
      };
    }
  };

  const archiveNote = async (noteId) => {
    try {
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      };
      const response = await fetch(
        `${BASE_URL}/notes/${noteId}/archive`,
        options,
      );
      const responseJson = await response.json();
      if (responseJson.error) {
        return { success: false, message: responseJson.message };
      } else {
        return { success: true, message: responseJson.message };
      }
    } catch (error) {
      return {
        success: false,
        message: error.message || "Unknown error occurred",
      };
    }
  };

  const getArchivedNotes = async () => {
    try {
      const options = { method: "GET" };
      const response = await fetch(`${BASE_URL}/notes/archived`, options);
      const responseJson = await response.json();

      if (responseJson.error) {
        return { success: false, message: responseJson.message };
      } else {
        return { success: true, data: responseJson.data };
      }
    } catch (error) {
      return {
        success: false,
        message: error.message || "Unknown error occurred",
      };
    }
  };

  const unarchiveNote = async (noteId) => {
    try {
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      };
      const response = await fetch(
        `${BASE_URL}/notes/${noteId}/unarchive`,
        options,
      );
      const responseJson = await response.json();
      if (responseJson.error) {
        return { success: false, message: responseJson.message };
      } else {
        return { success: true, message: responseJson.message };
      }
    } catch (error) {
      return {
        success: false,
        message: error.message || "Unknown error occurred",
      };
    }
  };

  const getAllNotes = async () => {
    try {
      const [unarchived, archived] = await Promise.all([
        getNotes(),
        getArchivedNotes(),
      ]);
      if (!unarchived.success || !archived.success) {
        return {
          success: false,
          message: [unarchived.message, archived.message],
        };
      } else {
        return {
          success: true,
          data: [...unarchived.data, ...archived.data],
        };
      }
    } catch (error) {
      return {
        success: false,
        message: error.message || "Failed to fetch all notes",
      };
    }
  };

  return {
    getNotes,
    createNote,
    deleteNote,
    archiveNote,
    getArchivedNotes,
    unarchiveNote,
    getAllNotes,
  };
};
