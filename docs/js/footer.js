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

window.customElements.define('footer-app', Footer)