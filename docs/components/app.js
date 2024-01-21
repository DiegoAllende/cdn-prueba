class Header extends HTMLElement {
  constructor() {
    super();
    this.suptitle = "";
    this.titles = "";
    this.subtitle = "";
  }

  static get observedAttributes() {
    return ['suptitle', 'titles', 'subtitle'];
  }

  attributeChangedCallback(nameAtr, oldValue, newValue) {
    switch (nameAtr) {
      case "suptitle":
        this.suptitle = newValue;
        break;
      case "titles":
        this.titles = newValue;
        break;
      case "subtitle":
        this.subtitle = newValue;
        break;
      default:
        break;
    }
  }

  connectedCallback() {
    this.innerHTML = `
      <header class="header">
        <p class="title_h1">${this.suptitle}</p>
        <p class="title_h1">${this.titles}</p>
        <p class="title_h1">${this.subtitle}</p>
      </header>
      `;
  }
}

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <footer class="footer">
        <section class="footer_header"></section>
        <section class="footer_links">
          <section class="footer_links_logo">
            <div class="footer-bar"></div>
            <a class="footer_links_logo_sura" href="https://www.sura.pe/" target="_blank"
              rel="noopener noreferrer">www.sura-am.com</a>
          </section>
          <section class="footer_links_socials">
            <a class="icon icon-sm icon_linkedin" href="https://pe.linkedin.com" target="_blank"
              rel="noopener noreferrer"></a>
            <a class="icon icon-sm icon_instagram" href="https://www.instagram.com" target="_blank"
              rel="noopener noreferrer"></a>
            <a class="icon icon-sm icon_facebook" href="https://www.facebook.com" target="_blank"
              rel="noopener noreferrer"></a>
            <a class="icon icon-sm icon_twitter" href="https://twitter.com" target="_blank" rel="noopener noreferrer"></a>
            <a class="icon icon-sm icon_youtube" href="https://www.youtube.com/" target="_blank"
              rel="noopener noreferrer"></a>
          </section>
        </section>
      </footer>
      `;
  }
}

class Help extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <section class="help_list">
        <section class="help_item">
          <i class="icon icon_call"></i>
          <b>Contact Center</b>
          <p class="title_h7">572-7777 <br> Opción 2 (Lima) <br> o 0800-17800 (provincia)</p>
        </section>
        <section class="help_item">
          <i class="icon icon_mail"></i>
          <b>Correo electrónicio</b>
          <p class="title_h7">servicioalcliente.sab@sura.pe</p>
        </section>
        <section class="help_item">
          <i class="icon icon_home"></i>
          <b>Sitio web</b>
          <p class="title_h7">www.sura.pe </p>
        </section>
      </section>
      `;
  }
}

window.customElements.define('header-app', Header);
window.customElements.define('footer-app', Footer);
window.customElements.define('help-app', Help);