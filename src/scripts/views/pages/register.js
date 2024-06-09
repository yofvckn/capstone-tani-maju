import {createRegisterTemplate} from '../templates/template-creator';

const RegisterPage ={
    async render () {
        return`
       
        <hero-section></hero-section>
       
        <div class="content">
        <h2 class="content__heading">Now Menu Investasi </h2>
        <div id="movies" class="section">
        </div>
      </div>     
        `;
    },

    async afterRender() {
        const moviesContainer = document.querySelector('#movies');
        moviesContainer.innerHTML += createRegisterTemplate();
        },
};

export default RegisterPage;