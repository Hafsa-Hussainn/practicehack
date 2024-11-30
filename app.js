

  // Your Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBIqFCBE2uGkctPeeGAj4VV3IqWfBijO7I",
    authDomain: "practice-43b07.firebaseapp.com",
    projectId: "practice-43b07",
    storageBucket: "practice-43b07.firebasestorage.app",
    messagingSenderId: "574209646780",
    appId:"1:574209646780:web:f431675ffeb7cbd87ab0b9",
  };

  // Initialize Firebase
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
  import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  // Login form validation and Firebase Authentication
  const loginForm = document.getElementById('loginForm');
  const errorMessage = document.getElementById('error-message');

  loginForm.addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent form submission

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
      errorMessage.textContent = 'Both fields are required!';
      return;
    }

    try {
      // Firebase authentication for user login
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // On successful login
      errorMessage.textContent = '';
      alert(`Welcome, ${user.email}!`);
      // Redirect to another page (e.g., dashboard)
      window.location.href = './dashboard.html';
    } catch (error) {
      // Handle login errors
      errorMessage.textContent = error.message;
    }
  });
