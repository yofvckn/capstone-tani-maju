// Template function for register and login forms
const createRegisterLoginTemplate = () => `
  <div class="wrapper">
    <div class="form-wrapper sign-up">
      <form action="">
        <h2>Sign Up</h2>
        <div class="input-group">
          <input type="text" name="username" required />
          <label for="username">Username</label>
        </div>
        <div class="input-group">
          <input type="email" name="email" required />
          <label for="email">Email</label>
        </div>
        <div class="input-group">
          <input type="password" name="password" required />
          <label for="password">Password</label>
        </div>
        <button type="submit" class="btn-login">Sign Up</button>
        <div class="sign-link">
          <p>
            Already have an account?
            <a href="#" class="signIn-link">Sign In</a>
          </p>
        </div>
      </form>
    </div>

    <div class="form-wrapper sign-in">
      <form action="">
        <h2>Login</h2>
        <div class="input-group">
          <input type="text" name="username" required />
          <label for="username">Username</label>
        </div>
        <div class="input-group">
          <input type="password" name="password" required />
          <label for="password">Password</label>
        </div>
        <div class="forgot-pass">
          <a href="#">Forgot Password?</a>
        </div>
        <button type="submit" class="btn-login">Login</button>
        <div class="sign-link">
          <p>
            Don't have an account? <a href="#" class="signUp-link">Sign Up</a>
          </p>
        </div>
      </form>
    </div>
  </div>
`;

// Function to add event listeners for form toggle
const addFormToggleEventListeners = () => {
  const wrapper = document.querySelector('.wrapper');
  const signUpLink = document.querySelector('.signUp-link');
  const signInLink = document.querySelector('.signIn-link');

  if (signUpLink && signInLink && wrapper) {
    signUpLink.addEventListener('click', (event) => {
      event.preventDefault();
      wrapper.classList.add('animate-signIn');
      wrapper.classList.remove('animate-signUp');
    });

    signInLink.addEventListener('click', (event) => {
      event.preventDefault();
      wrapper.classList.add('animate-signUp');
      wrapper.classList.remove('animate-signIn');
    });
  } else {
    console.error('Required elements not found in the DOM.');
  }
};

const addFormSubmitEventListeners = () => {
  const signUpForm = document.querySelector('.sign-up form');
  const signInForm = document.querySelector('.sign-in form');

  if (signUpForm) {
    signUpForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      const formData = new FormData(signUpForm);
      const username = formData.get('username');
      const email = formData.get('email');
      const password = formData.get('password');

      try {
        const response = await fetch('http://localhost:3000/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, email, password }),
        });

        if (response.ok) {
          alert('Registration successful');
          window.location.hash = '#/login';
        } else {
          const error = await response.json();
          alert(`Registration failed: ${error.message}`);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    });
  } else {
    console.error('Sign-up form not found.');
  }

  if (signInForm) {
    signInForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      const formData = new FormData(signInForm);
      const username = formData.get('username');
      const password = formData.get('password');

      try {
        const response = await fetch('http://localhost:3000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
          const data = await response.json();
          localStorage.setItem('token', data.token);
          alert('Login successful');
          window.location.hash = '#/';
        } else {
          const error = await response.json();
          alert(`Login failed: ${error.message}`);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    });
  } else {
    console.error('Sign-in form not found.');
  }
};

// Export the functions
export { createRegisterLoginTemplate, addFormToggleEventListeners, addFormSubmitEventListeners };
