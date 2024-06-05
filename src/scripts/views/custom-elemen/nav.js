class Nav extends HTMLElement {
    constructor() {
      super();
  
      this._style = document.createElement('style');
    }
  
    _updateStyle() {
      this._style.textContent = `
      .nav-list {
        padding: 0; /* Menghapus padding default */
      }
      
      .nav-list ul {
        list-style-type: none; /* Menghilangkan bullets pada daftar */
        margin: 0; /* Menghapus margin default */
        padding: 0; /* Menghapus padding default */
      }
      
      .nav_item {
        margin-bottom: 10px; /* Memberikan jarak antar item */
      }
      
      .nav_item a {
        text-decoration: none; /* Menghapus garis bawah pada tautan */
        color: white; /* Warna teks tautan */
        font-weight: bold; /* Membuat teks tebal */
        transition: color 0.3s ease; /* Efek transisi untuk perubahan warna saat hover */
        display: block; /* Mengubah tautan menjadi blok untuk menempati ruang secara penuh */
        padding: 10px; /* Memberikan padding pada tautan */
      }
      
      .nav_item a:hover {
        color: rgb(71, 147, 175) /* Warna teks tautan saat dihover */
      }
      `;
    }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
      this._updateStyle();
  
      this.innerHTML = `
      ${this._style.outerHTML}
  
      <nav id="drawer" class="nav-list">
        <ul>
          <li class="nav_item"><a href="/">Home</a></li>
          <li class="nav_item"><a href="#/mulai-investasi">Mulai Investasi</a></li>
          <li class="nav_item"><a href="#/tutorial">Tutorial</a></li>
          <li class="nav_item"><a href="#/contact">Contact</a></li>
          <li class="nav_item"><a href="#/register">Register/Login</a></li>
          <li class="nav_item"><a href="#/about">About Us</a></li>
        </ul>
      </nav>
      `;
    }
  }
  
  
  customElements.define('nav-section',Nav);
  