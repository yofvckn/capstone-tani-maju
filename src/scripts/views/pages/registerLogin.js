import { createRegisterLoginTemplate, addFormToggleEventListeners, addFormSubmitEventListeners } from '../templates/registerlogin-templates';

const registerPage = {
  async render() {
    return `
      <div class="content">
        <div id="petani" class=""></div>
      </div>
    `;
  },

  async afterRender() {
    const petaniContainer = document.querySelector('#petani');
    if (petaniContainer) {
      petaniContainer.innerHTML = createRegisterLoginTemplate();
      // Add event listeners after the template is rendered
      addFormToggleEventListeners();
      addFormSubmitEventListeners();
    } else {
      console.error("Element with id 'petani' not found.");
    }
  },
};

export default registerPage;
