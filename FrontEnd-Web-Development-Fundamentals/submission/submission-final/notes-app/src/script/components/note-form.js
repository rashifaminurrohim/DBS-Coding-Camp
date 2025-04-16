class NoteForm extends HTMLElement {
  _shadowRoot = null;
  _style = null;

  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._style = document.createElement('style');
    this.render();
  }

  _updateStyle() {
    this._style.textContent = `
      :host {
        display: grid;
        width: 100%;
        grid-template-columns: 1fr;
        background: #F5F5F5;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        border-radius: 4px;
        gap: 8px;
      }

      h2 {
        color: black;
        text-align: center;
        margin-bottom: 16px;
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
    this._shadowRoot.innerHTML = '';
  }

  render() {
    this._emptyContent();
    this._updateStyle();
    this._shadowRoot.appendChild(this._style);

    this._shadowRoot.innerHTML += `
    <div class="container">
      <h2>Form Catatan Baru</h2>
      <form id="note-form">
        <label for="title">Judul:</label>
        <input type="text" id="title" placeholder="Judul Catatan" required />
        
        <label for="body">Isi:</label>
        <textarea id="body" placeholder="Isi Catatan" required></textarea>

        <button type="submit">Simpan Catatan</button>
      </form>
    </div>
    `;

    this._addEventListeners();
  }

  _addEventListeners() {
    const form = this._shadowRoot.querySelector('#note-form');

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const title = this._shadowRoot.querySelector('#title').value;
      const body = this._shadowRoot.querySelector('#body').value;

      if (!title || !body) {
        alert('Harap isi semua kolom!');
        return;
      }

      const noteData = { title, body, createdAt: new Date().toDateString()};
      this.dispatchEvent(new CustomEvent('newNoteAdded', { detail: noteData }));

      form.reset();
    });
  }
}

customElements.define('note-form', NoteForm);
