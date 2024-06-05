const aboutPage = {
  async render() {
    return `
      <style>

        .container {
          max-width: 800px;
          background-color: #fff;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          border-radius: 8px;
          overflow: hidden;
          margin-bottom: 20px;
          padding: 20px;
        }
        .header {
          text-align: center;
          margin-bottom: 20px;
        }
        h1 {
          color: #007bff;
          margin: 0;
          font-size: 28px;
        }
        p {
          line-height: 1.6;
          color: #666;
        }
        .section {
          margin-bottom: 20px;
        }
        .team-member {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
        }
        .team-member img {
          border-radius: 50%;
          margin-right: 20px;
          width: 80px;
          height: 80px;
        }
        .team-member-info {
          flex-grow: 1;
        }
        h2 {
          font-size: 22px;
          margin-top: 0;
        }
      </style>

      <div class="container">
        <div class="header">
          <h1>About Us</h1>
        </div>
        <div class="section">
          <p>
            Welcome to PT Investasi, a leading company in the field of investment and asset management. Our mission is to provide innovative investment solutions that help our clients achieve their financial goals. We pride ourselves on our commitment to excellence and our focus on delivering outstanding results.
          </p>
        </div>
        <div class="section">
          <h2>Our Team</h2>
          <div class="team-member">
            <img src="path/to/your/image1.jpg" alt="Team Member 1">
            <div class="team-member-info">
              <h3>John Doe</h3>
              <p>CEO & Founder</p>
            </div>
          </div>
          <div class="team-member">
            <img src="path/to/your/image2.jpg" alt="Team Member 2">
            <div class="team-member-info">
              <h3>Jane Smith</h3>
              <p>Chief Financial Officer</p>
            </div>
          </div>
          <!-- Add more team members as needed -->
        </div>
        <div class="section">
          <h2>Our Values</h2>
          <p>
            At PT Investasi, we are guided by our core values of integrity, innovation, and client focus. We believe in building long-term relationships with our clients based on trust and mutual respect. Our team is dedicated to providing personalized investment strategies that align with the unique needs and goals of each client.
          </p>
        </div>
        <div class="section">
          <h2>Contact Us</h2>
          <p>
            <strong>Address:</strong> Jl. Investasi No. 123, Jakarta<br>
            <strong>Email:</strong> info@ptinvestasi.com<br>
            <strong>Phone:</strong> (021) 123-4567
          </p>
        </div>
      </div>
    `;
  },
};

export default aboutPage;
