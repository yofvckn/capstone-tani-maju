import TheMovieDbSource from '../../data/themoviedb-source';
import { createInvestasiTemplate } from '../templates/template-creator';


const InvestasiPage = {
  async render() {
    return `

      <div class="content">
        <h2 class="content__heading">Upcoming in Cinema</h2>
        <div id="movies" class="movie">
        </div>
        </div>
        
    `;
  },

  afterRender(){
    const movies = [
      {
        id: "1",
        nama: "PT Investasi",
        judul: "Deskripsi Bisnis",
        deskripsi: "PT Investasi adalah perusahaan yang bergerak di bidang investasi dan manajemen aset. Kami menawarkan berbagai produk investasi untuk memenuhi kebutuhan finansial individu dan institusi.",
        'informasi-saham': "Informasi Saham",
        nama_saham: "Nama Saham",
        name_price: "Harga Saham",
        perubahan: "Perubahan",
        volume_perdagangan: "Volume Perdagangan",
        deskripsi_saham: "Saham PTI adalah salah satu pilihan investasi terbaik dengan potensi pertumbuhan yang stabil. Dengan investasi di PTI, Anda dapat memperoleh keuntungan dari dividen dan apresiasi harga saham.",
        kontak: "Kontak",
        'judul-alamat': "Alamat: ",
        deskripsi_alamat: "Jl. Investasi No.123, Jakarta",
        email: "info@ptinvestasi.com",
        'nomer-telepon': "(021) 123-4567",
        'detail-saham': "Detail Saham",
        'deskripsi-laporan': "Untuk informasi lebih lanjut tentang kinerja bisnis dan laporan keuangan PT Investasi, silakan kunjungi",
        foto: "petani3.jpg",
        harga: "Rp 1.000,-",
        'harga-perlembar': "100.000 lembar"
    },
    ];
    
    const moviesContainer = document.querySelector('#movies');
    
    // Iterasi melalui array movies dan tambahkan setiap item ke moviesContainer
    movies.forEach(movie => {
      // Buat template untuk setiap item film dan tambahkan ke moviesContainer
      moviesContainer.innerHTML += createInvestasiTemplate(movie);
    });
  },
};
export default InvestasiPage;
