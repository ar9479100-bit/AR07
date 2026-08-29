import { initializeApp }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getAuth,
  signInWithEmailAndPassword
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCB4jQxUE7RBcH4EFs0F20yfud5piS8qfQ",
  authDomain: "ar07-2c19b.firebaseapp.com",
  projectId: "ar07-2c19b",
  storageBucket: "ar07-2c19b.firebasestorage.app",
  messagingSenderId: "779000469231",
  appId: "1:779000469231:web:4e6c83f81c42379cfced1a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById("login").onclick = async function () {

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const status = document.getElementById("status");

  try {
    await signInWithEmailAndPassword(auth, email, password);
    status.textContent = "✅ Login successful";
  } catch (error) {
    status.textContent = "❌ Login failed";
  }

};
