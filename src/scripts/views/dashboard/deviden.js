import {createDevidenTemplate} from '../templates/template-dashboard';

const Deviden={
    async render () {
        return`
       <header-section> </header-section>
      <<br> <br>
       
        <div class="content">
        <h2 class="content__heading">Now Menu Investasi </h2>
        <div id="movies" class="">
        </div>
        </div>     
        `;
    },

    async afterRender() {
        const moviesContainer = document.querySelector('#movies');
        moviesContainer.innerHTML += createDevidenTemplate();
        },
};

export default Deviden;