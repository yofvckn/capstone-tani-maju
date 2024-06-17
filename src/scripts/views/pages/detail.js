import { creatDetailTemplate } from '../templates/detail-templates';

const detailPage = {
  async render() {
    return `
      <div class="content">       
        <div id="petani" class=""></div>
      </div>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const petaniContainer = document.querySelector('#petani');
    petaniContainer.innerHTML += creatDetailTemplate();
  },
};

export default detailPage;
