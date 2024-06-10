import { createMovieItemTemplate } from "../templates/template-creator";

const HomePage = {
  async render() {
    return `

    <hero-section></hero-section>
  
      <div class="content">
        <h2 class="content__heading">Now Menu Investasi </h2>
        <div id="movies" class="movies">
        </div>
      </div>
    `;
  },

  afterRender() {
    const movies = [
      {
        id: "1",
        title: "Investasi 1",
        director: "Director 1",
        year: 2022,
        poster: "petani-1.jpg",
        rating: 8.5,
        text: "kabyegfygefygfeuigefugefiefuefuefefigfeugefuguiegufegefedvyigefiygefiegegfgefiugefuigeiueguiegueigefuiegfiuef",
      },
      {
        id: "2",
        title: "Investasi Petani 2",
        director: "Director 2",
        year: 2023,
        poster: "petani2.jpg",
        rating: 7.9,
        text: "kabyegfygefygfeuigefugefiefuefuefefigfeugefuguiegufegefedvyigefiygefiegegfgefiugefuigeiueguiegueigefuiegfiuef",
      },
      {
        id: "3",
        title: "Investasi Petani 3",
        director: "director 3",
        year: 2024,
        poster: "petani-1.jpg",
        rating: 7.9,
        text: "kabyegfygefygfeuigefugefiefuefuefefigfeugefuguiegufegefedvyigefiygefiegegfgefiugefuigeiueguiegueigefuiegfiuef",
      },
      {
        id: "4",
        title: "Investasi Petani 3",
        director: "director 3",
        year: 2024,
        poster: "petani-1.jpg",
        rating: 7.9,
        text: "kabyegfygefygfeuigefugefiefuefuefefigfeugefuguiegufegefedvyigefiygefiegegfgefiugefuigeiueguiegueigefuiegfiuef",
      },
      {
        id: "5",
        title: "Investasi Petani 3",
        director: "director 3",
        year: 2024,
        poster: "petani-1.jpg",
        rating: 7.9,
        text: "kabyegfygefygfeuigefugefiefuefuefefigfeugefuguiegufegefedvyigefiygefiegegfgefiugefuigeiueguiegueigefuiegfiuef",
      },
    ];
    const moviesContainer = document.querySelector("#movies");

    // Iterasi melalui array movies dan tambahkan setiap item ke moviesContainer
    movies.forEach((movie) => {
      // Buat template untuk setiap item film dan tambahkan ke moviesContainer
      moviesContainer.innerHTML += createMovieItemTemplate(movie);
    });
  },
};

export default HomePage;
