import{createContacTemplate} from '../templates/template-creator';
const contact ={
    async render () {
        return`
    
        <div class="content">
        <h2 class="content__heading">Now Menu Investasi </h2>
        <div id="movies" class="">
        </div>
      </div>     
        `;
    },

    async afterRender() {
        const moviesContainer = document.querySelector('#movies');
        moviesContainer.innerHTML += createContacTemplate();
        
    },
};

export default contact;