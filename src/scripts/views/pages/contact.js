import { createContacTemplate } from "../templates/template-creator";
const contact = {
  async render() {
    return `
    <style>
    .container {
  width: 100%; /* Lebar maksimum 90% dari lebar layar */
  max-width: 500px;
  height: max-content;
  margin: 0 auto; /* Untuk memusatkan .container di tengah layar */
  margin-top: 20px;
  padding: 20px;
  background-color: #333;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  border-radius: 8px;
}
h1 {
  color: #61dafb;
  margin-bottom: 20px;
}
form {
  display: flex;
  flex-direction: column;
}
label {
  margin-bottom: 10px;
  color: #61dafb;
}
input,
textarea {
  padding: 10px;
  margin-bottom: 20px;
  border: none;
  border-radius: 4px;
}
input[type="submit"] {
  background-color: #61dafb;
  color: #282c34;
  cursor: pointer;
  font-weight: bold;
}
input[type="submit"]:hover {
  background-color: #21a1f1;
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
    moviesContainer.innerHTML += createContacTemplate();
  },
};

export default contact;
