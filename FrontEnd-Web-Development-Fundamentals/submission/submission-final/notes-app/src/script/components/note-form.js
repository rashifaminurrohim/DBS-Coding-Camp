class NoteForm extends HTMLElement {
  _shadowRoot = null;
  _style = null;

  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._style = document.createElement("style");
    this.render();
  }

  _updateStyle() {
    this._style.textContent = `
      :host {
        display: grid;
        width: 100%;
        grid-template-columns: 1fr;
        background: #FCFBF9;
        gap: 8px;
        border-right: 1.8px solid rgba(41, 41, 41, 0.2);
      }

      h2 {
        display: flex;
        color: black;
        text-align: center;
        margin-bottom: 16px;
        align-items: center;
        gap: 4px; 
        justify-content: center;
      }

      form {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      label {
        margin-inline: 1em;
      }

      input, textarea {
        grid-column: controls;
        grid-row: auto;
        margin-inline: 1em;
        padding: 1em;
        resize: vertical;
        max-height: 50vh;
        max-width: 100%;
      }

      textarea {
        min-height: 100px;
      }

      button {
        margin: 10px 20px;
        padding: 1em;
        border-radius: 4px;
        justify-items: center;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      }

      button:hover {
        transform: translateY(-5px);
        transition: 0.3s ease-in-out;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
      }
    `;
  }

  _emptyContent() {
    this._shadowRoot.innerHTML = "";
  }

  _insertIcon() {
    fetch(new URL('../../assets/icons/add_form.svg', import.meta.url))
    .then(response => response.text())
    .then(svg => {
      const span = this._shadowRoot.querySelector('#icon-add');
      span.innerHTML = svg;
      console.log(span);
    })
    .catch(err => console.error('Gagal memuat ikon:', err));
  }

  render() {
    this._emptyContent();
    this._updateStyle();
    this._shadowRoot.appendChild(this._style);

    this._shadowRoot.innerHTML += `
    <div class="container">
      <h2>
      <span>Add Note</span>
      <span id="icon-add"></span>
      </h2>
      <form id="note-form">
        <label for="title">Judul:</label>
        <input type="text" id="title" placeholder="Judul Catatan" required />
        
        <label for="body">Isi:</label>
        <textarea id="body" placeholder="Isi Catatan" required></textarea>

        <button type="submit">Simpan Catatan</button>
      </form>
    </div>
    `;
    this._insertIcon();
    this._addEventListeners();
  }

  _addEventListeners() {
    const form = this._shadowRoot.querySelector("#note-form");

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const title = this._shadowRoot.querySelector("#title").value;
      const body = this._shadowRoot.querySelector("#body").value;

      if (!title || !body) {
        alert("Harap isi semua kolom!");
        return;
      }

      const noteData = { title, body, createdAt: new Date().toDateString() };
      this.dispatchEvent(new CustomEvent("newNoteAdded", { detail: noteData }));

      form.reset();
    });
  }
}

customElements.define("note-form", NoteForm);
