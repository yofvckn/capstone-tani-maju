const HomePage = {
  async render() {
    return `
      <hero-section></hero-section>

      <!-- Card Section-Start -->
      <section id="section-card" class="section-card">
        <div class="title-card">
          <h2>
            <span>Mulailah Berbisnis Dengan Mitra Kami</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita,
            repellendus numquam quam tempora voluptatum.
          </p>
        </div>
        <div class="container">
          <!-- Konten kartu akan dimuat di sini -->
        </div>
        <div class="navigation">
          <button id="prevBtn">Prev</button>
          <button id="nextBtn">Next</button>
        </div>
      </section>
    `;
  },

  async afterRender() {
    // Memanggil data JSON setelah render
    import('../../data/data.json').then(({ default: jsonData }) => {
      console.log(jsonData);
      const dataPetani = jsonData.cards;
      let listPetani = '';
      dataPetani.forEach((card) => {
        listPetani += `
          <div class="card">
            <img class="img" src="img/card/${card.img}" alt="${card.title}" title="${card.title}">
            <div class="city">${card.city}</div>
            <h3>${card.title}</h3>
            <p class="amount">Perkiraan Dana yang Dibutuhkan ${card.estimation}</p>
            <p class="distribution">Pembagian Dividen: ${card.distribution}</p>
            <a type="button" class="button-card" href="#/detail">
              <span>Selengkapnya</span>
            </a>
          </div>
        `;
      });
      document.querySelector('#section-card .container').innerHTML = listPetani;

      // Tambahkan event listener untuk tombol prev dan next
      const container = document.querySelector('.container');
      const prevBtn = document.getElementById('prevBtn');
      const nextBtn = document.getElementById('nextBtn');

      prevBtn.addEventListener('click', () => {
        container.scrollBy({ left: -300, behavior: 'smooth' });
      });

      nextBtn.addEventListener('click', () => {
        container.scrollBy({ left: 300, behavior: 'smooth' });
      });

      // Implementasi drag-to-scroll
      let isDown = false;
      let startX;
      let scrollLeft;

      container.addEventListener('mousedown', (e) => {
        isDown = true;
        container.classList.add('active');
        startX = e.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
      });

      container.addEventListener('mouseleave', () => {
        isDown = false;
        container.classList.remove('active');
      });

      container.addEventListener('mouseup', () => {
        isDown = false;
        container.classList.remove('active');
      });

      container.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX) * 1;
        container.scrollLeft = scrollLeft - walk;
      });
    });
  },
};

export default HomePage;
