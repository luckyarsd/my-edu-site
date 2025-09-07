// firebase-config.js

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYYx46KEkHSA78xHMo8lYS8tKqYrLZK-w",
  authDomain: "skillpoint-c3e39.firebaseapp.com",
  projectId: "skillpoint-c3e39",
  storageBucket: "skillpoint-c3e39.firebasestorage.app",
  messagingSenderId: "984664107678",
  appId: "1:984664107678:web:af02e53e532d4e57f0298f",
  measurementId: "G-390K2B4HC7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db, analytics };
