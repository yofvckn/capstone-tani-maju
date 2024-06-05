const contact = {
  async render() {
    return `
      <style>
        .container {
          max-width: 600px;
          padding: 20px;
          background-color: #333;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
          border-radius: 8px;
        }
        h1 {
          color: #61dafb;
          margin-bottom: 20px;
        }
        form {
          display: flex;
          flex-direction: column;
        }
        label {
          margin-bottom: 10px;
          color: #61dafb;
        }
        input, textarea {
          padding: 10px;
          margin-bottom: 20px;
          border: none;
          border-radius: 4px;
        }
        input[type="submit"] {
          background-color: #61dafb;
          color: #282c34;
          cursor: pointer;
          font-weight: bold;
        }
        input[type="submit"]:hover {
          background-color: #21a1f1;
        }
      </style>

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
      </div>
    `;
  },
};

export default contact;
