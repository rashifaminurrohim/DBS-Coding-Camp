class NoteForm extends HTMLElement {
  _shadowRoot = null;
  _style = null;
  _colors = null;
  _selectedColor = null;
  
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._style = document.createElement("style");
    this._colors = ['#9b59b6', '#e91e63', '#f1c40f', '#2ecc71', '#3498db'];
    this._selectedColor = this._colors[Math.floor(Math.random() * this._colors.length)];
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
        border-radius: 4px;
        max-height: 50vh;
        max-width: 100%;
        cursor: text;
        background-color: #fff;
        border: 1px solid #d6d6e7;
        color: rgb(35, 38, 59);
        box-shadow: inset 0 1px 4px 0 rgb(119 122 175 / 30%);
        overflow: hidden;
        transition: all 100ms ease-in-out;
  }

      textarea {
        min-height: 100px;
      }

      button#save {
        margin: 10px 20px;
        padding: 1em;
        border-radius: 4px;
        justify-items: center;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      }

      .color-btn {
        display: flex;
        justify-content: center;
        gap: 1em;
        margin-top: 1em;
      }

      .color-btn button {
        width: 2em;
        height: 2em;
        border: none;
        border-radius: 50%;
        cursor: pointer;
      }

      #purple-btn {
        background-color: #b693fd;
      }

      #yellow-btn {
        background-color: #fec971;
      }

      #orange-btn {
        background-color: #fe9b72;
      }

      #green-btn {
        background-color: #e4ef8f;
      }

      #blue-btn {
        background-color: #01d4fe;
      }
      
      .color-btn button.selected {
        transform: scale(0.9);
      }

      .color-btn button.selected#purple-btn {
        box-shadow: 0 0 0 3.5px #d9c8f0;
      }

      .color-btn button.selected#orange-btn {
        box-shadow: 0 0 0 3.5px #f7cbd0;
      }

      .color-btn button.selected#yellow-btn {
        box-shadow: 0 0 0 3.5px #fbe39c;
      }

      .color-btn button.selected#green-btn {
        box-shadow: 0 0 0 3.5px #f0f5ce;
      }

      .color-btn button.selected#blue-btn {
        box-shadow: 0 0 0 3.5px #9decfc;
      }

      button:hover {
        transform: translateY(3px);
        transition: 0.3s ease-in-out;
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
    .catch(err => console.error('Failed to load icon:', err));
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
        <label for="title">Title:</label>
        <input type="text" id="title" placeholder="Note title" required />
        
        <label for="body">Body:</label>
        <textarea id="body" placeholder="Your note.. ." required></textarea>
        <div class="color-btn">
          <button type="button" id="yellow-btn"></button>
          <button type="button" id="orange-btn"></button>
          <button type="button" id="purple-btn"></button>
          <button type="button" id="blue-btn"></button>
          <button type="button" id="green-btn"></button>
        </div>
        <button type="submit" id="save">Save Note</button>
      </form>
    </div>
    `;
    this._insertIcon();
    this._addEventListeners();
  }

  _addEventListeners() {
    const form = this._shadowRoot.querySelector("#note-form");
    const colorButtons = this._shadowRoot.querySelectorAll(".color-btn button");
      colorButtons.forEach((btn) => {

        btn.addEventListener("click", () => {
          // Hapus semua highlight
          colorButtons.forEach(b => b.classList.remove("selected"));
          btn.classList.add("selected");

          // Ambil warna dari tombol yang diklik
          this._selectedColor = getComputedStyle(btn).backgroundColor;

          // Ubah warna background textarea
          const bodyTextarea = this._shadowRoot.querySelector("#body");
          const titleTextarea = this._shadowRoot.querySelector("#title");
          if (bodyTextarea && titleTextarea) {
            bodyTextarea.style.backgroundColor = this._selectedColor;
            titleTextarea.style.backgroundColor = this._selectedColor;
          }
      })
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const title = this._shadowRoot.querySelector("#title").value;
      const body = this._shadowRoot.querySelector("#body").value;

      if (!title || !body) {
        alert("Fill all the input field!");
        return;
      }

      const noteData = { 
        title, 
        body,
        color: this._selectedColor, 
        createdAt: new Date().toDateString() 
      };
      this.dispatchEvent(new CustomEvent("newNoteAdded", { detail: noteData }));

      form.reset();
    });
  }
}

customElements.define("note-form", NoteForm);
