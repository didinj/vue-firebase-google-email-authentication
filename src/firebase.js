// src/firebase.js
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  setPersistence,
  browserLocalPersistence
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBafMTlH6JqO6DEMW9Qj1X1ufhqUV9BUEk",
  authDomain: "vue3firebaseauth.firebaseapp.com",
  projectId: "vue3firebaseauth",
  storageBucket: "vue3firebaseauth.firebasestorage.app",
  messagingSenderId: "290911890058",
  appId: "1:290911890058:web:8b6ed612d7baee5760db73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Set local persistence explicitly
setPersistence(auth, browserLocalPersistence);

export { auth, provider };
