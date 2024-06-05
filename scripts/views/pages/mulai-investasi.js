const mulaiInvestasi = {
  async render() {
    return `
      <style>
        .container {
          max-width: 900px;
          background-color: #fff;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          border-radius: 8px;
          overflow: hidden;
          margin-bottom: 20px;
        }
        .header, .section {
          padding: 20px;
        }
        .header {
          background-color: #333;
          color: #fff;
          text-align: center;
        }
        h1 {
          margin: 0;
          font-size: 24px;
        }
        .section img {
          width: 100%;
          height: auto;
          border-radius: 8px;
          margin-bottom: 20px;
        }
        h2 {
          font-size: 20px;
          margin-top: 0;
        }
        p {
          line-height: 1.6;
          color: #666;
        }
        .info-table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 20px;
        }
        .info-table th, .info-table td {
          border: 1px solid #ddd;
          padding: 8px;
          text-align: left;
        }
        .info-table th {
          background-color: #333;
          color: #fff;
        }
        .contact-info, .business-report {
          background-color: #f4f4f4;
          padding: 20px;
          border-radius: 8px;
        }
        .business-report a {
          color: #61dafb;
          text-decoration: none;
        }
        .business-report a:hover {
          text-decoration: underline;
        }
      </style>

      <div class="container">
        <div class="header">
          <h1>PT Investasi</h1>
        </div>
        <div class="section">
          <img src="path/to/your/image.jpg" alt="PT Investasi">
          <h2>Deskripsi Bisnis</h2>
          <p>
            PT Investasi adalah perusahaan yang bergerak di bidang investasi dan manajemen aset. Kami menawarkan berbagai produk investasi untuk memenuhi kebutuhan finansial individu dan institusi.
          </p>
        </div>
        <div class="section">
          <h2>Informasi Saham</h2>
          <table class="info-table">
            <tr>
              <th>Nama Saham</th>
              <td>PTI</td>
            </tr>
            <tr>
              <th>Harga Saham</th>
              <td>Rp 1.000,-</td>
            </tr>
            <tr>
              <th>Perubahan</th>
              <td>+2%</td>
            </tr>
            <tr>
              <th>Volume Perdagangan</th>
              <td>100.000 lembar</td>
            </tr>
          </table>
        </div>
        <div class="section">
          <h2>Detail Saham</h2>
          <p>
            Saham PTI adalah salah satu pilihan investasi terbaik dengan potensi pertumbuhan yang stabil. Dengan investasi di PTI, Anda dapat memperoleh keuntungan dari dividen dan apresiasi harga saham.
          </p>
        </div>
        <div class="section contact-info">
          <h2>Kontak</h2>
          <p>
            <strong>Alamat:</strong> Jl. Investasi No. 123, Jakarta<br>
            <strong>Email:</strong> info@ptinvestasi.com<br>
            <strong>Telepon:</strong> (021) 123-4567
          </p>
        </div>
        <div class="section business-report">
          <h2>Laporan Bisnis</h2>
          <p>
            Untuk informasi lebih lanjut tentang kinerja bisnis dan laporan keuangan PT Investasi, silakan kunjungi <a href="http://www.ptinvestasi.com/reports" target="_blank">halaman laporan bisnis kami</a>.
          </p>
        </div>
      </div>
    `;
  },
};

export default mulaiInvestasi;
