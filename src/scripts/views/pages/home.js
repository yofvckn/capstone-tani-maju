const homePage = {
  async render() {
    return `
      <hero-section></hero-section>
      <br>
      <div tabindex="0" class="restaurant-item">
        <video width="100%" height="350" controls>
          <source src="../../../public/videos/tutorial.mp4" type="video/mp4" alt="tutorial-video">
          Your browser does not support the video tag.
        </video>
        <div class="container">
          <div class="card">
            <img src="images/heros/sawah-3.jpeg" alt="Gambar Produk" class="card-image">
            <h3 class="card-title"><a href="#">Petani Bogor</a></h3>
            <p class="card-description">lorem ipsum</p>
          </div>

          <div class="card">
            <img src="images/heros/sawah-2.jpeg" alt="Gambar Produk" class="card-image">
            <h3 class="card-title"><a href="#">Petani Bekasi</a></h3>
            <p class="card-description">lorem ipsum</p>
          </div>

          <div class="card">
            <img src="images/heros/sawah-1.jpeg" alt="Gambar Produk" class="card-image">
            <h3 class="card-title"><a href="#">Petani Semarang</a></h3>
            <p class="card-description">lorem ipsum</p>
          </div>
        </div>
      </div>
      <img src="../../../public/images/heros/investment.jpeg" alt="investment-images">
    `;
  },
};

export default homePage;
