class AppBar extends HTMLElement {
  _shadowRoot = null;
  _style = null;

  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._style = document.createElement('style');
  }

  _updateStyle() {
    this._style.textContent = `
      :host {
        display: block;
        width: 100%;
        background-color: white;
        color: black;
        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);
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
    `;
  }

  _emptyContent() {
    this._shadowRoot.innerHTML = '';
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
        <h1 class="app-name">Notes</h1>
        <nav>
          <ul>
            <li>
              <select id="archive-selection">
                <option id="all" value="all">All</option>
                <option id="archieve" value="archive">Archieve</option>
                <option id="unarchieve" value="unarchive">Unarchieve</option>
              </select>
            </li>
            <li><button id="add-notes-btn">+</button></li>
          </ul>
        </nav>
      </div>
    `;
  }

  toggleForm() {
    // Tambahkan di sini: emit event ke luar
    this._shadowRoot.querySelector('#add-notes-btn')
    .addEventListener('click', () => {
      // dispatch event ke DOM global
      this.dispatchEvent(new CustomEvent('toggleForm', {
        bubbles: true,
        composed: true
      }));
    });
  }

  filterNotes() {
    const select = this._shadowRoot.querySelector('#archive-selection');
    select.addEventListener('change', (event) => {
      this.dispatchEvent(new CustomEvent('filterNotes', {
        bubbles: true,
        composed: true,
        detail: {
          filter: event.target.value
        }
      }));
    });
  }


}

customElements.define('app-bar', AppBar);