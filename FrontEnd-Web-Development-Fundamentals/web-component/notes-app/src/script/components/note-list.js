class NoteList extends HTMLElement {
  _shadowRoot = null;
  _style = null;
  _column = 2;
  _gutter = 16;

  static get observedAttributes() {
    return ['column', 'gutter'];
  }

  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._style = document.createElement('style');
    this.render();
  }

  _updateStyle() {
    this._style.textContent = `
      :host {
        display: block;
      }
      .list {
        display: grid;
        grid-template-columns: ${'1fr '.repeat(this._column)};
        gap: ${this._gutter}px;
      }
    `;
  }

  set column(value) {
    const newValue = Number(value);
    if (!isNaN(newValue) && newValue > 0) {
      this._column = newValue;
      this.render();
    }
  }

  get column() {
    return this._column;
  }

  set gutter(value) {
    const newValue = Number(value);
    if (!isNaN(newValue) && newValue >= 0) {
      this._gutter = newValue;
      this.render();
    }
  }

  get gutter() {
    return this._gutter;
  }

  _emptyContent() {
    this._shadowRoot.innerHTML = '';
  }

  render() {
    this._emptyContent();
    this._updateStyle();
    this._shadowRoot.appendChild(this._style);
    this._shadowRoot.innerHTML += `
      <div class="list">
        <slot></slot>
      </div>
    `;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case 'column':
        this.column = newValue;
        break;
      case 'gutter':
        this.gutter = newValue;
        break;
    }
  }
}

customElements.define('note-list', NoteList);
