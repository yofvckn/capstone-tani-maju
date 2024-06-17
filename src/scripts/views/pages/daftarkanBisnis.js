import { creatDaftarkanBisnisTemplate } from '../templates/daftarkanbisnis-templates';

const daftarBisnis = {
  async render() {
    return `
        <div class="content">       
          <div id="petani" class="">
          </div>
        </div>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const petaniContainer = document.querySelector('#petani');
    petaniContainer.innerHTML += creatDaftarkanBisnisTemplate();
  },
};

export default daftarBisnis;
