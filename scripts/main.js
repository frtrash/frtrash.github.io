// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnaKFd-uPAe1iVBjQY2TxTSITqfQD0OtI",
  authDomain: "aurax-19d51.firebaseapp.com",
  projectId: "aurax-19d51",
  storageBucket: "aurax-19d51.firebasestorage.app",
  messagingSenderId: "235078935968",
  appId: "1:235078935968:web:7ea2aa83dd243e83eff0c5",
  measurementId: "G-CC2KVM7RL5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);