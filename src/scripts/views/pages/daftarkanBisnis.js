import { creatDaftarkanBisnisTemplate } from '../templates/daftarkanbisnis-templates';

const daftarBisnis = {
  async render() {
    return `
      <div class="content">
        <div id="petani"></div>
      </div>
    `;
  },

  async afterRender() {
    const petaniContainer = document.querySelector('#petani');
    petaniContainer.innerHTML = creatDaftarkanBisnisTemplate();

    // Setelah menempatkan template, cari form berdasarkan id-nya
    const form = petaniContainer.querySelector('form');
    if (form) {
      form.addEventListener('submit', this.onSubmit.bind(this));
    } else {
      console.error('Form not found');
    }

    // Check login status
    const token = localStorage.getItem('token');
    if (!token) {
      // Jika tidak ada token, arahkan ke halaman login
      window.location.href = '#/registerlogin';
    }
  },

  onSubmit(event) {
    event.preventDefault();

    // Check login status again (in case token was removed after initial check)
    const token = localStorage.getItem('token');
    if (!token) {
      window.location.href = '#/registerlogin';
      return; // Stop further execution
    }

    // Gather form data
    const brandName = document.getElementById('brandName').value;
    const ownerName = document.getElementById('ownerName').value;
    const businessCategory = document.getElementById('businessCategory').value;
    const businessDescription = document.getElementById('form-description').value;
    const sharePrice = document.getElementById('sharePrice').value;
    const fundingAmount = document.getElementById('fundingAmount').value;
    const dividendEstimate = document.getElementById('dividendEstimate').value;
    const companyVideo = document.getElementById('profileVideo').value;
    const instagram = document.getElementById('instagram').value;
    const cover = document.getElementById('Cover').files[0];
    const galleryFiles = document.querySelectorAll('.form-group-gallery input[type="file"]');
    const gallery = [];
    galleryFiles.forEach((fileInput) => {
      if (fileInput.files.length > 0) {
        gallery.push(fileInput.files[0]);
      }
    });

    const formData = new FormData();
    formData.append('brandName', brandName);
    formData.append('ownerName', ownerName);
    formData.append('businessCategory', businessCategory);
    formData.append('businessDescription', businessDescription);
    formData.append('sharePrice', sharePrice);
    formData.append('fundingAmount', fundingAmount);
    formData.append('dividendEstimate', dividendEstimate);
    formData.append('companyVideo', companyVideo);
    formData.append('instagram', instagram);
    formData.append('cover', cover);
    gallery.forEach((file, index) => {
      formData.append(`gallery${index}`, file);
    });

    // Send POST request to backend
    fetch('http://localhost:3000/products', {
      method: 'POST',
      body: formData,
      headers: {
        Authorization: `Bearer ${token}`, // Gunakan token dari localStorage
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse response sebagai JSON
      })
      .then((data) => {
        alert(`Product added with ID: ${data.id}`);
        // Redirect to Home page
        window.location.href = '#/';
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle error, misalnya tampilkan pesan error kepada pengguna
      });
  },
};

export default daftarBisnis;
