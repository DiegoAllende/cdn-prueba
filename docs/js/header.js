class Header extends HTMLElement {
  constructor() {
    super();
    this.title;
    this.subtitle;
  }

  static get observerAttributes() {
    return ['title', 'subtitle'];
  }

  attributeChangeCallback(nameAtr, oldValue, newValue) {
    switch (nameAtr) {
      case title:
        this.title = newValue;
        break;
      default:
        break;
    }
  }

  connectedCallback() {
    this.innerHTML = `
    <header class="header">
      <p class="title_h1">${this.title}</p>
    </header>
    `;
  }
}

window.customElements.define('header-app', Header)