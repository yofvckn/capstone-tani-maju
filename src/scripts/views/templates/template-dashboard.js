const createDasboardTemplate = () => `


<div class="notification_kyc col-xs-12 col-xl-12 text-center">
    <div style="line-height: 30px; color: #000000;">
    <div style="font-size: 18px;">
 <b>Untuk melakukan transaksi. Anda harus melengkapi profil di
 aplikasi Santara</b>
 </div>
 <div style="font-size: 15px; padding-bottom:18px;">
         Profile kamu akan diverifikasi oleh tim kami dalam waktu 1 x 24, yuk
         lengkapi profilmu transaksi dapat berjalan dengan lancar.
         </div>
        <div><b><a href="https://santara.co.id/kyc_individu/8ae5fef6-d4d2-4da5-9b3a-bccd6cd9fc6a" style="text-decoration: underline;" class="label-font">
        Ke Halaman Verifikasi
        </a></b>
         </div>           
    </div>
  </div>
  
`;

const createMulaiInvestasiTemplate  = () =>`
<div class="container">
        <h2>Form Pendaftaran Usaha untuk Investasi</h2>
        <form action="#" method="post">
            <div class="form-group">
                <label for="nama_usaha">Nama Usaha</label>
                <input type="text" id="nama_usaha" name="nama_usaha" required>
            </div>
            <div class="form-group">
                <label for="deskripsi_usaha">Deskripsi Usaha</label>
                <textarea id="deskripsi_usaha" name="deskripsi_usaha" required></textarea>
            </div>
            <div class="form-group">
                <label for="kontak">Kontak</label>
                <input type="email" id="kontak" name="kontak" required>
            </div>
            <div class="form-group">
                <label for="lokasi">Lokasi Usaha</label>
                <input type="text" id="lokasi" name="lokasi" required>
            </div>
            <input type="submit" value="Daftarkan Usaha">
        </form>
    </div>
`;

const createDevidenTemplate = () => `
 <div class="container">
        <h1>Dividen Distribution</h1>
        <div class="row">
            <div class="column">
                <h2>Investor 1</h2>
                <p>Dividen: $500</p>
            </div>
            <div class="column">
                <h2>Investor 2</h2>
                <p>Dividen: $750</p>
            </div>
            <div class="column">
                <h2>Investor 3</h2>
                <p>Dividen: $400</p>
            </div>
        </div>
    </div>
`


export {
    createDasboardTemplate,createMulaiInvestasiTemplate,createDevidenTemplate
};