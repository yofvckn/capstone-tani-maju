import { createLoginTemplate } from "../templates/template-creator";

const loginPage = {
  async render() {
    return ` 
    <style> 
body {

  background-color: blueviolet;
}

.container {
    width: 300px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

form {
    display: flex;
    flex-direction: column;
}

label {
    margin-bottom: 8px;
}

input {
    padding: 8px;
    margin-bottom: 16px;
}

button {
    padding: 10px;
    background-color: blue;
    color: white;
    border: none;
    border-radius: 3px;
    cursor: pointer;
}

a {
  color: white;
}

button:hover {
    background-color: #07155d;
}

p a {
color: blueviolet;
}
    </style>
        <div class="content">
        <h2 class="content__heading">Now Menu Investasi </h2>
        <div id="movies" class="">
        </div>
      </div>  
        `;
  },

  async afterRender() {
    const moviesContainer = document.querySelector("#movies");
    moviesContainer.innerHTML += createLoginTemplate();
  },
};

export default loginPage;
