import { createLoginTemplate } from "../templates/template-creator";

const RegisterPage = {
  async render() {
    return ` 
    <style> 
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
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 3px;
    cursor: pointer;
}

button:hover {
    background-color: #45a049;
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

export default RegisterPage;
