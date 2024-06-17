/* eslint-disable class-methods-use-this */
/* eslint-disable no-useless-constructor */
class Hero extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
    this.afterRender();
  }

  render() {
    this.innerHTML = `
      <!-- Hero Section-start -->
      <section class="hero" id="home">
        <div>
          <img src="img/hero-image.jpg" alt="hero-img" class="hero-img"/>
        </div>
        <div class="hero-container">
          <main class="hero-content">
            <h1><span>Urun Dana Investasi Bisnis Saham Tani</span></h1>
            <br />
            <p>
              Platform Equity Crowdfunding pertama yang berizin dan diawasi
              Otoritas Jasa Keuangan berdasarkan Surat Keputusan Nomor:
              KEP-59/D.04/2019.
            </p>
          </main>
        </div>
      </section>
      <div class="action">
        <ul>
          <li class="li-action-left">
            <a type="button" href="#/mulaiinvestasi"><span>Mulai Investasi</span></a>
          </li>
          <li class="li-action-right">
            <a type="button" href="#/daftarkanbisnis"><span>Daftarkan Bisnis</span></a>
          </li>
        </ul>
      </div>
      <!-- Hero Section-end -->   
    `;
  }

  afterRender() {
    // Operasi DOM atau event listener tambahan bisa ditambahkan di sini
  }
}

customElements.define('hero-section', Hero);
