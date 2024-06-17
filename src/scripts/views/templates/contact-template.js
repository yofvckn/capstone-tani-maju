/* eslint-disable import/prefer-default-export */
const creatContactTemplate = () => `
  <!-- About-Start -->

    <div class="hero-contact">
      <img src="img/hero-contact.jpg" alt="hero-contact" />
    </div>

    <div class="container-contact">
      <h2>Contact Us</h2>
      <form id="contactForm">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label for="message">Message:</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>

  <!-- About-Start -->
`;

export {
  creatContactTemplate,
};
