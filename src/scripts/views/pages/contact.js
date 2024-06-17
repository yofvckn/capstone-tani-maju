/* eslint-disable import/extensions */
import { creatContactTemplate } from '../templates/contact-template';

const contacPage = {
  async render() {
    return `
    <div class="content">    
      <div id="petani" class=""></div>
    </div>
      `;
  },

  async afterRender() {
    const petaniContainer = document.querySelector('#petani');
    petaniContainer.innerHTML += creatContactTemplate();
  },
};

export default contacPage;
