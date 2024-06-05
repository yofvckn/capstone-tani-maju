const tutorial = {
  async render() {
    return `
      <style>
        .container {
          max-width: 800px;
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

      <div class="container">
        <h1>Memulai Investasi</h1>
        <p>
          Investasi adalah cara untuk mengembangkan kekayaan dengan menanamkan modal pada aset yang diharapkan akan meningkat nilainya seiring waktu. Berikut adalah langkah-langkah untuk memulai investasi:
        </p>
        <ol>
          <li>
            <strong>Tentukan Tujuan Investasi:</strong> Sebelum mulai berinvestasi, tentukan tujuan finansial Anda, apakah untuk dana pensiun, pendidikan anak, atau membeli rumah.
          </li>
          <li>
            <strong>Pahami Risiko:</strong> Setiap investasi memiliki risiko. Pahami tingkat risiko yang Anda siap tanggung dan sesuaikan dengan profil risiko Anda.
          </li>
          <li>
            <strong>Pilih Instrumen Investasi:</strong> Ada berbagai instrumen investasi seperti saham, obligasi, reksa dana, dan properti. Pilih yang sesuai dengan tujuan dan profil risiko Anda.
          </li>
          <li>
            <strong>Mulai dengan Nominal Kecil:</strong> Jika Anda baru memulai, disarankan untuk mulai dengan nominal kecil dan tingkatkan investasi Anda seiring dengan bertambahnya pengetahuan dan pengalaman.
          </li>
          <li>
            <strong>Lakukan Diversifikasi:</strong> Diversifikasi portofolio Anda dengan menyebar investasi pada beberapa instrumen untuk mengurangi risiko.
          </li>
          <li>
            <strong>Evaluasi dan Pantau Investasi:</strong> Secara berkala, evaluasi kinerja investasi Anda dan lakukan penyesuaian jika diperlukan.
          </li>
        </ol>
        <p>
          Investasi memerlukan kesabaran dan ketekunan. Jangan terburu-buru dan selalu lakukan riset sebelum mengambil keputusan investasi.
        </p>
      </div>
    `;
  },
};

export default tutorial;
