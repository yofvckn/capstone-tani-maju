import CONFIG from '../../globals/config';

const createMovieDetailTemplate = (movie) => `
  <h2 class="movie__title">aku</h2>
  <img class="movie__poster" src="" />
  <div class="movie__info">
  <h3>Information</h3>
    <h4>Tagline</h4>
    <p>1</p>
    <h4>Release Date</h4>
    <p>2332</p>
    <h4>Duration</h4>
    <p> minutes</p>
    <h4>Rating</h4>
    <p>3.2</p>
  </div>
  <div class="movie__overview">
    <h3>Overview</h3>
    <p>new</p>
  </div>
`;

const createMovieItemTemplate = (movie) => `
  <div class="movie-item">
    <div class="movie-item__header">
      <img class="movie-item__header__poster" alt="${movie.title}"
           src="${movie.poster}">
      <div class="movie-item__header__rating">
        <p>⭐️<span class="movie-item__header__rating__score">${movie.rating}</span></p>
        
      </div>
    </div>
    <div class="movie-item__content">
      <h3><a href="/#/detail/${movie.id}">${movie.title}</a></h3>
       <p class="movie-item__text">${movie.text}</p>
    </div>
  </div>
`;

const createInvestasiTemplate = (movie)=>`
  
     
        <div class="section">
           <div class="header">
            <h1>${movie.nama}</h1>
        </div>
            <img src="${movie.foto}" alt="${movie.nama}">
            <h2>${movie.judul}</h2>
            <p>${movie.deskripsi}</p>
        </div>
        <div class="section">
            <h2>${movie['informasi-saham']}</h2>
            <table class="info-table">
                <tr>
                    <th>${movie.nama_saham}</th>
                    <td>${movie.name_price}</td>
                </tr>
                <tr>
                    <th>${movie.name_price}</th>
                    <td>${movie.harga}</td>
                </tr>
                <tr>
                    <th>${movie.perubahan}</th>
                    <td>${movie['harga-perlembar']}</td>
                </tr>
                <tr>
                    <th>${movie.volume_perdagangan}</th>
                    <td>${movie['harga-perlembar']}</td>
                </tr>
            </table>
        </div>
        <div class="section">
            <h2>${movie['detail-saham']}</h2>
            <p>${movie.deskripsi_saham}</p>
        </div>
        <div class="section contact-info">
            <h2>${movie.kontak}</h2>
            <p>
                <strong>${movie['judul-alamat']}</strong> ${movie.deskripsi_alamat}<br>
                <strong>Email:</strong> ${movie.email}<br>
                <strong>Telepon:</strong> ${movie['nomer-telepon']}
            </p>
        </div>
        <div class="section business-report">
            <h2>${movie['deskripsi-laporan']}</h2>
            <p>
                ${movie['deskripsi-laporan']} <a href="http://www.ptinvestasi.com/reports" target="_blank">halaman laporan bisnis kami</a>.
            </p>
        </div>
    </div>
    `;


    const createTutorialTemplate = () => `
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

    const createContacTemplate =() =>`
    <div class="container">
        <h1>Contact Us</h1>
        <form>
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required>

          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required>

          <label for="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <input type="submit" value="Send">
        </form>
      </div>`;


const createRegisterTemplate = () =>`
<a href="https://front.codes/" class="logo" target="_blank">
		</a>
		<div class="">
		  <div class="container">
			<div class="row full-height justify-content-center">
			  <div class="col-12 text-center align-self-center py-5">
				<div class="section pb-5 pt-5 pt-sm-2 text-center">
				  <h6 class="mb-0 pb-3"><span>Log In </span><span>Sign Up</span></h6>
				  <input class="checkbox" type="checkbox" id="reg-log" name="reg-log"/>
				  <label for="reg-log"></label>
				  <div class="card-3d-wrap mx-auto">
					<div class="card-3d-wrapper">
					  <div class="card-front">
						<div class="center-wrap">
						  <div class="section text-center">
							<h4 class="mb-4 pb-3">Log In</h4>
							<div class="form-group">
							  <input type="email" name="logemail" class="form-style" placeholder="Your Email" id="logemail" autocomplete="off">
							  <i class="input-icon uil uil-at"></i>
							</div>
							<div class="form-group mt-2">
							  <input type="password" name="logpass" class="form-style" placeholder="Your Password" id="logpass" autocomplete="off">
							  <i class="input-icon uil uil-lock-alt"></i>
							</div>
							<a href="#/dashboard" class="btn mt-4">submit</a>
							<p class="mb-0 mt-4 text-center"><a href="#0" class="link">Forgot your password?</a></p>
						  </div>
						</div>
					  </div>
					  <div class="card-back">
						<div class="center-wrap">
						  <div class="section text-center">
							<h4 class="mb-4 pb-3">Sign Up</h4>
							<div class="form-group">
							  <input type="text" name="logname" class="form-style" placeholder="Your Full Name" id="logname" autocomplete="off">
							  <i class="input-icon uil uil-user"></i>
							</div>
							<div class="form-group mt-2">
							  <input type="email" name="logemail" class="form-style" placeholder="Your Email" id="logemail" autocomplete="off">
							  <i class="input-icon uil uil-at"></i>
							</div>
							<div class="form-group mt-2">
							  <input type="password" name="logpass" class="form-style" placeholder="Your Password" id="logpass" autocomplete="off">
							  <i class="input-icon uil uil-lock-alt"></i>
							</div>
							<a href="#" class="btn mt-4">submit</a>
						  </div>
						</div>
					  </div>
					</div>
				  </div>
				</div>
			  </div>
			</div>
		  </div>
		</div>
`;
export { createMovieItemTemplate, createMovieDetailTemplate,createInvestasiTemplate,createTutorialTemplate,createContacTemplate,createRegisterTemplate
  };
