/* eslint-disable import/prefer-default-export */
const creatDaftarkanBisnisTemplate = () => `
<main class="form-main-container">
      <div class="form-container">
        <h1>Registration Form</h1>
        <form>
          <div class="form-group">
            <label for="brandName" class="form-brand-name">Nama Brand *</label>
            <input
              type="text"
              id="brandName"
              placeholder="Isi Nama Brand"
              required
            />
          </div>

          <div class="form-group">
            <label for="ownerName">Nama Owner *</label>
            <input
              type="text"
              id="ownerName"
              placeholder="Nama Owner"
              required
            />
          </div>

          <div class="form-group">
            <label for="businessCategory" class="form-city-name"
              >Asal Kota *</label
            >
            <select id="businessCategory" required>
              <option value="">-- Pilih Kota --</option>
              <option value="jakarta">Jakarta</option>
              <option value="surabaya">Surabaya</option>
              <option value="bandung">Bandung</option>
              <option value="medan">Medan</option>
              <option value="semarang">Semarang</option>
              <option value="makassar">Makassar</option>
              <option value="palembang">Palembang</option>
              <option value="bogor">Bogor</option>
              <option value="malang">Malang</option>
              <option value="yogyakarta">Yogyakarta</option>
              <option value="denpasar">Denpasar</option>
              <option value="pontianak">Pontianak</option>
              <option value="samarinda">Samarinda</option>
              <option value="batam">Batam</option>
              <option value="padang">Padang</option>
              <option value="pekanbaru">Pekanbaru</option>
              <option value="banjarmasin">Banjarmasin</option>
              <option value="manado">Manado</option>
              <option value="solo">Solo</option>
              <option value="banda-aceh">Banda Aceh</option>
              <option value="balikpapan">Balikpapan</option>
              <option value="tasikmalaya">Tasikmalaya</option>
              <option value="cirebon">Cirebon</option>
            </select>
          </div>

          <div class="form-group">
            <label for="form-description" class="form-description"
              >Deskripsi Usaha *</label
            >
            <textarea
              id="form-description"
              placeholder="Isi Deskripsi Usaha Disini"
              required
            ></textarea>
          </div>

          <div class="form-group">
            <label for="sharePrice">Harga 50% Saham *</label>
            <input
              type="text"
              id="sharePrice"
              placeholder="Harga 50% Saham"
              required
            />
          </div>

          <div class="form-group">
            <label for="fundingAmount">Perkiraan Dana yang di Butuhkan *</label>
            <input
              type="text"
              id="fundingAmount"
              placeholder="Perkiraan Dana yang di Butuhkan"
              required
            />
          </div>

          <div class="form-group">
            <label for="dividendEstimate">Perkiraan Deviden Tahunan</label>
            <input type="text" id="dividendEstimate" placeholder="Rp 0" />
          </div>

          <div class="form-group">
            <label for="profileVideo">Video Profile Perusahaan</label>
            <input
              type="url"
              id="profileVideo"
              placeholder="https://youtu.be/example"
            />
          </div>

          <div class="form-group">
            <label for="instagram">Instagram</label>
            <input
              type="text"
              id="instagram"
              placeholder="Isi Username Instagram"
            />
          </div>

          <div class="form-group">
            <label for="cover">Cover *</label>
            <input type="file" id="Cover" accept="image/*" required />
          </div>

          <div class="form-group-gallery">
            <label>Galeri *</label>
            <input type="file" accept="image/*" required />
            <input type="file" accept="image/*" required />
            <input type="file" accept="image/*" required />
          </div>

          <div class="form-actions">
            <button type="button" class="form-cancel">Cancel</button>
            <button type="submit" class="form-register">Daftar</button>
          </div>
        </form>
      </div>
    </main>`;
export {
  creatDaftarkanBisnisTemplate,
};
