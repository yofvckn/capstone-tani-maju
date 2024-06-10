// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBK8J4gu4RNWqF6duANRQNjeVSeucpqEnc",
  authDomain: "ilhamshop-e3140.firebaseapp.com",
  projectId: "ilhamshop-e3140",
  storageBucket: "ilhamshop-e3140.appspot.com",
  messagingSenderId: "927893144159",
  appId: "1:927893144159:web:1076d9d472b0a43b16d1ea",
  measurementId: "G-NJTTLB8TSQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Definisikan fungsi register di sini
function register() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Tambahkan kode yang diperlukan untuk melakukan registrasi pengguna
  createUserWithEmailAndPassword(getAuth(app), email, password)
    .then((userCredential) => {
      // Registrasi berhasil, redirect ke halaman login
      window.location.href = "index.html";
    })
    .catch((error) => {
      console.error("Error during registration:", error.message);
    });
}

// Tambahkan event listener ke tombol "Register" di sini
const registerBtn = document.getElementById("registerBtn");
registerBtn.addEventListener("click", register);
