import { createTutorialTemplate } from "../templates/template-creator";

const TutorialPage ={
    async render () {
        return`
        <style>
        .container {
          max-width: 100%;
          padding: 20px;
          background-color: #333;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        }
        h1 {
          color: #ffcc00;
        }
        p {
          color: #ccc;
          line-height: 1.6;
        }
        ol {
          color: #fff;
        }
        li strong {
          color: #ffcc00;
        }
      </style>
        <div class="content">
        <h2 class="content__heading">Tutorial Page </h2>
       <div id="movies" class="movie">
        </div>
        `;
    },

    afterRender (){
               
           
        const moviesContainer = document.querySelector('#movies');
        moviesContainer.innerHTML += createTutorialTemplate();
        
    },

};



export default TutorialPage;