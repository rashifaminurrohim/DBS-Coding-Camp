class NoteItem extends HTMLElement {
  _shadowRoot = null;
  _style = null;
  _note = {
    title: '',
    body: '',
    createdAt: '',
  };

  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._style = document.createElement('style');
  }

  _emptyContent() {
    this._shadowRoot.innerHTML = '';
  }

  set note(value) {
    this._note = value;
    this.render();
  }

  get note() {
    return this._note;
  }

  _updateStyle() {
    this._style.textContent = `
      :host {
        display: block;
      }
      .note {
        background: #ffcc80;
        padding: 16px;
        border-radius: 8px;
        margin: 8px;
        box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
      }
      .note h3 {
        margin: 0 0 8px;
      }
      .note p {
        margin: 0;
      }
    `;
  }

  render() {
    this._emptyContent();
    this._updateStyle();
    this._shadowRoot.appendChild(this._style);

    this._shadowRoot.innerHTML += `
      <div class="note">
        <h3>${this._note.title}</h3>
        <p>${this._note.body}</p>
        <small>${new Date(this._note.createdAt).toLocaleDateString()}</small>
      </div>
    `;
  }
}

customElements.define('note-item', NoteItem);