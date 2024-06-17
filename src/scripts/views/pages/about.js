import { createaboutTemplate } from '../templates/about-template';

const aboutPage = {
  async render() {
    return `
    <section class="hero-about">
      <div class="hero-about-img">
        <img src="img/hero-about.jpg" />
      </div>
    </section>

      <div>       
        <div id="petani" class=""></div>
      </div>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const petaniContainer = document.querySelector('#petani');
    petaniContainer.innerHTML += createaboutTemplate();
  },
};

export default aboutPage;
