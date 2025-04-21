class NoteItem extends HTMLElement {
  _shadowRoot = null;
  _style = null;
  _note = {
    title: "",
    body: "",
    createdAt: "",
    archived: false,
  };

  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._style = document.createElement("style");
  }

  _emptyContent() {
    this._shadowRoot.innerHTML = "";
  }

  set note(value) {
    this._note = value;
    this.render();
  }

  get note() {
    return this._note;
  }

  set onDelete(callback) {
    this._onDelete = callback;
  }

  set onArchiveToggle(callback) {
    this._onArchiveToggle = callback;
  }

  _formatDate(dateString) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  }

  _updateStyle() {
    this._style.textContent = `
      :host {
        display: block;
      }
      .note {
        background: #E0DEDE;
        padding: 16px;
        border-radius: 24px;
        margin: 8px;
        box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
      }
      .note h3 {
        margin: 0 0 8px;
      }
      .note p {
        margin: 0;
      }

      .note-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .note-footer small {
        color: #555;
        align-self: end; 
      }
      .note-footer .actions {
        display: flex;
        gap: 8px;
      }
      .note-footer button {
        padding: 6px 12px;
        border: none;
        border-radius: 24px;
        cursor: pointer;
      }
      .note-footer button.delete {
        background-color: #e74c3c;
        color: white;
      }
      .note-footer button.archive {
        background-color: #3498db;
        color: white;
      }
    `;
  }

  render() {
    this._emptyContent();
    this._updateStyle();
    this._shadowRoot.appendChild(this._style);

    const formattedDate = this._formatDate(this._note.createdAt);

    this._shadowRoot.innerHTML += `
      <div class="note">
        <h3>${this._note.title}</h3>
        <p>${this._note.body}</p>
        <div class="note-footer">
          <small>${formattedDate}</small>
          <div class="actions">
            <button class="archive">${this._note.archived ? "Unarchive" : "Archive"}</button>
            <button class="delete">Delete</button>
          </div>
        </div>
      </div>
    `;

    this._shadowRoot.querySelector(".delete").addEventListener("click", () => {
      if (this._onDelete) this._onDelete(this._note.id);
    });

    this._shadowRoot.querySelector(".archive").addEventListener("click", () => {
      if (this._onArchiveToggle) this._onArchiveToggle(this._note.id);
    });
  }
}

customElements.define("note-item", NoteItem);
