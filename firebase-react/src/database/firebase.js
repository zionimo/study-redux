// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1nsmCD7rpo5PuAnyNVbvksquw8q3j_dM",
  authDomain: "fir-login-4b04b.firebaseapp.com",
  projectId: "fir-login-4b04b",
  storageBucket: "fir-login-4b04b.appspot.com",
  messagingSenderId: "73753469650",
  appId: "1:73753469650:web:c4360ba4e65599d3a7830b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
