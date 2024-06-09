import {createMulaiInvestasiTemplate } from "../templates/template-dashboard";

const Mulai_InvestasiPage ={
    async render () {
        return`
       <header-section> </header-section>
       
       
        <div class="content">
        <h2 class="content__heading">Now Menu Investasi </h2>
        <div id="movies" class="">
        </div>
      </div>     
        `;
    },

    async afterRender() {
        const moviesContainer = document.querySelector('#movies');
        moviesContainer.innerHTML += createMulaiInvestasiTemplate();
        },
};

export default Mulai_InvestasiPage;