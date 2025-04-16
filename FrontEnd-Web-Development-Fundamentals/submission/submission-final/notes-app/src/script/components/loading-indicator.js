class LoadingIndicator extends HTMLElement {
  _shadowRoot = null;
  _style = null;

  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open'});
    this._style = document.createElement('style');
    this._updateStyle();
    this.render();
  }

  _updateStyle() {
    this._style.textContent = `
    :host {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 1000;
        backdrop-filter: blur(5px);
      }

      .loader {
        border: 6px solid #f3f3f3;
        border-top: 6px solid #3498db;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        animation: spin 1s linear infinite;
      }

      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `;
  }

  _emptyContent() {
    this._shadowRoot.innerHTML = '';
  }

  render() {
    this._emptyContent();
    this._shadowRoot.appendChild(this._style);

    const loader = document.createElement('div');
    loader.classList.add('loader');
    this._shadowRoot.appendChild(loader);
  }
  
}

customElements.define('loading-indicator', LoadingIndicator);