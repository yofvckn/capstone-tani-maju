class Header extends HTMLElement {
  constructor() {
      super();

      this._style = document.createElement('style');
  }

  _updateStyle() {
      this._style.textContent = `
          /* Tambahkan CSS di sini */
      `;
  }

  _handleHamburgerClick() {
      const navigationDrawer = this.querySelector('#navigationDrawer');
      navigationDrawer.classList.toggle('open');
  }

  connectedCallback() {
      this.render();
      this.querySelector('#hamburgerButton').addEventListener('click', this._handleHamburgerClick.bind(this));
  }

  render() {
      this._updateStyle();

      this.innerHTML = `
          ${this._style.outerHTML}

          <header class="app-bar">
              <div class="app-bar__menu">
                  <button id="hamburgerButton">☰</button>
              </div>
              <div class="app-bar__brand">
                  <h1 class=".title">Dashbord</h1>
              </div>
              <nav id="navigationDrawer" class="app-bar__navigation">
                  <ul>
                      <li><a href="#/dashboard">Dashboard</a></li>
                      <li><a href="#/mulai_investasi2">Mulai Investasi</a></li>
                      <li><a href="#/portofolio">Portofolio</a></li>
                      <li><a href="#/deviden">Deviden</a></li>
                     
                  </ul>
              </nav>
          </header>
      `;
  }
}

customElements.define('header-section', Header);
