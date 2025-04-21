class AppBar extends HTMLElement {
  _shadowRoot = null;
  _style = null;

  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._style = document.createElement("style");
  }

  _updateStyle() {
    this._style.textContent = `
      :host {
        display: block;
        width: 100%;
        background-color: #FCFBF9;
        color: black;
        border-bottom: 2px solid rgba(41, 41, 41, 0.2);
      }

      div {
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: center;
        justify-items: end;
        padding: 1rem;
      }

      .app-name {
        margin: 0;
        font-size: 1.7em;
      }

      nav ul{
        display: flex;
        padding: 0;
        margin: 0;
        list-style: none;
        gap: 1rem;
        align-items: center;
      }

      button {
        font-size: 1.5rem;
        cursor: pointer;
      }

      button .icon {
        display: inline-block;
        transition: transform 0.3s ease;
        transform: rotate(0deg); /* <- tambahkan ini */
      }

      button.rotate .icon{
        transform: rotate(45deg);
      }

      select {
        padding: 8px 12px;
        color: #333;
        background-color: #eee;
        border: 1px solid #ddd;
        border-radius: 5px;
        cursor: pointer;

        appearence: none;
        -webkit-appearance: none;
        -moz-appearance: none;
      }

      select:hover,
      select:focus {
        outline: none,
        border: 1px solid #bbb;
      }

      select option {
        background: #fff;
      }
    `;
  }

  _emptyContent() {
    this._shadowRoot.innerHTML = "";
  }

  connectedCallback() {
    this.render();
    this.toggleForm();
    this.filterNotes();
  }

  render() {
    this._emptyContent();
    this._updateStyle();

    this._shadowRoot.appendChild(this._style);
    this._shadowRoot.innerHTML += `
      <div>
        <h1 class="app-name">Noted.</h1>
        <nav>
          <ul>
            <li>
              <select id="archive-selection">
                <option id="all" value="all">All</option>
                <option id="archieve" value="archive">Archieve</option>
                <option id="unarchieve" value="unarchive">Unarchieve</option>
              </select>
            </li>
            <li><button id="add-notes-btn"><span class="icon">+</span></button></li>
          </ul>
        </nav>
      </div>
    `;
  }

  toggleForm() {
    // Tambahkan di sini: emit event ke luar
    const btn = this._shadowRoot.querySelector("#add-notes-btn");
    this._shadowRoot
      .querySelector("#add-notes-btn")
      .addEventListener("click", () => {
        btn.classList.toggle("rotate");
        // dispatch event ke DOM global
        this.dispatchEvent(
          new CustomEvent("toggleForm", {
            bubbles: true,
            composed: true,
          }),
        );
      });
  }

  filterNotes() {
    const select = this._shadowRoot.querySelector("#archive-selection");
    select.addEventListener("change", (event) => {
      this.dispatchEvent(
        new CustomEvent("filterNotes", {
          bubbles: true,
          composed: true,
          detail: {
            filter: event.target.value,
          },
        }),
      );
    });
  }
}

customElements.define("app-bar", AppBar);
