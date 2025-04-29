class NoteItem extends HTMLElement {
  _shadowRoot = null;
  _style = null;
  _note = {
    title: "",
    body: "",
    color: "",
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

  _getRandomColor() {
    const colors = ["#b693fd", "#fe9b72", "#01d4fe", "#e4ef8f", "#fec971"];
    // agak tebal
    // const colors = ["#d9c8f0", "#f7cbd0", "#fbe39c", "#b5ded6", "#b4d6f0"];
    // tipis
    // const colors = ["#e8dff5", "#fce1e4", "#fcf4dd", "#ddedea", "#daeaf6"];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  _updateStyle() {
    this._style.textContent = `
      :host {
        display: block;
      }
      .note {
        background:  ${this._note.color || this._getRandomColor()};
        padding: 16px;
        border-radius: 16px;
        margin: 8px;
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
        padding: 6px 6px;
        border: none;
        border-radius: 24px;
        cursor: pointer;
        width: 100%;
        height: 100%;
      }

      .note-footer button:hover {
        opacity: 85%;
      }

      .note-footer button.delete {
        background-color:rgb(39, 36, 36);
        color: white;
      }
      .note-footer button.archive {
        background-color:rgb(39, 36, 36);
        color: white;
      }
    `;
  }

  render() {
    this._emptyContent();
    this._updateStyle();
    this._shadowRoot.appendChild(this._style);

    const formattedDate = this._formatDate(this._note.createdAt);
    const archiveIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
	<path fill="#ffac33" fill-rule="evenodd" d="m8 1.91l2.035 3.943l3.938.845l-2.71 2.868l.3 4.33L8 11.867l-3.563 2.029l.299-4.33l-2.71-2.868l3.938-.845z" clip-rule="evenodd" />
</svg>`;
    const unarchiveIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 1024 1024">
	<path fill="#ffac33" fill-opacity="0.15" d="m512.5 190.4l-94.4 191.3l-211.2 30.7l152.8 149l-36.1 210.3l188.9-99.3l188.9 99.2l-36.1-210.3l152.8-148.9l-211.2-30.7z" />
	<path fill="#ffac33" d="m908.6 352.8l-253.9-36.9L541.2 85.8c-3.1-6.3-8.2-11.4-14.5-14.5c-15.8-7.8-35-1.3-42.9 14.5L370.3 315.9l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1L239 839.4a31.95 31.95 0 0 0 46.4 33.7l227.1-119.4l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2c17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9l183.7-179.1c5-4.9 8.3-11.3 9.3-18.3c2.7-17.5-9.5-33.7-27-36.3M665.3 561.3l36.1 210.3l-188.9-99.2l-188.9 99.3l36.1-210.3l-152.8-149l211.2-30.7l94.4-191.3l94.4 191.3l211.2 30.7z" />
</svg>`;

    const deleteIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
	<path fill="#FCFBF9" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z" />
</svg>`;

    this._shadowRoot.innerHTML += `
      <div class="note">
        <h3>${this._note.title}</h3>
        <p>${this._note.body}</p>
        <div class="note-footer">
          <small>${formattedDate}</small>
          <div class="actions">
            <button class="archive">${this._note.archived ? `${archiveIcon}` : `${unarchiveIcon}`}</button>
            <button class="delete">${deleteIcon}</button>
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
