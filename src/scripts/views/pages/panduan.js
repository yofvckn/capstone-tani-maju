import { creatPanduanTemplate } from '../templates/panduan-tamplate';

const panduanPage = {
  async render() {
    return `
      <div class="content">    
        <div id="petani" class=""></div>
      </div>
      `;
  },

  async afterRender() {
    const petaniContainer = document.querySelector('#petani');
    petaniContainer.innerHTML += creatPanduanTemplate();
  },
};

export default panduanPage;
