import { createDetailTemplate } from '../templates/detail-templates';
import UrlParser from '../../routes/url-parser';

const detailPage = {
  async render() {
    return `
      <div class="content">       
        <div id="petani" class=""></div>
      </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner(); // Use the correct function name
    const productId = url.id;

    try {
      const response = await fetch(`http://localhost:3000/products/${productId}`);
      const product = await response.json();

      const petaniContainer = document.querySelector('#petani');
      petaniContainer.innerHTML = createDetailTemplate(product);
    } catch (error) {
      console.error('Error fetching product details:', error);
      const petaniContainer = document.querySelector('#petani');
      petaniContainer.innerHTML = '<p>Error fetching product details. Please try again later.</p>';
    }
  },
};

export default detailPage;
