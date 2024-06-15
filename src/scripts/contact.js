// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGCJiMn21v-OY18Cgz7BayHADHlCrdk9w",
  authDomain: "testpetani.firebaseapp.com",
  databaseURL: "https://testpetani-default-rtdb.firebaseio.com",
  projectId: "testpetani",
  storageBucket: "testpetani.appspot.com",
  messagingSenderId: "429698980679",
  appId: "1:429698980679:web:fff672d3ee4dbd916f8a62",
  measurementId: "G-ZT4M544T8M",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference to the database
const database = firebase.database();

// Get the form element
const contactForm = document.getElementById("contactForm");

// Listen for form submit
contactForm.addEventListener("submit", submitForm);

// Function to submit the form
function submitForm(e) {
  e.preventDefault();

  // Get values
  const name = getInputVal("name");
  const email = getInputVal("email");
  const message = getInputVal("message");

  // Save message
  saveMessage(name, email, message);

  // Show alert
  alert("Message sent successfully!");

  // Clear form
  contactForm.reset();
}

// Function to get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, message) {
  const newMessageRef = database.ref("messages").push();
  newMessageRef.set({
    name: name,
    email: email,
    message: message,
  });
}
