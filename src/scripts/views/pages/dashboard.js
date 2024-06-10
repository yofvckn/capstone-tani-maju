import { createDasboardTemplate } from "../templates/template-dashboard";

const DashboardPage = {
  async render() {
    return `
        <header-section></header-section>
         <br><br><br><br><br><br><br><br><br>
        <div class="content">
        <h2 class="content__heading">Now Menu Investasi </h2>
        <div id="movies" class="">
        </div>
      </div>
        `;
  },
  afterRender() {
    const PetaniContainer = document.querySelector("#movies");
    PetaniContainer.innerHTML += createDasboardTemplate();
  },
};
export default DashboardPage;
