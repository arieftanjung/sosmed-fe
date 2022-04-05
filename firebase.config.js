// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBM49cBn4OA-L7X-aW6PQNN2HTKUFyQ1AY",
  authDomain: "titiktemusosweb.firebaseapp.com",
  projectId: "titiktemusosweb",
  storageBucket: "titiktemusosweb.appspot.com",
  messagingSenderId: "332144375900",
  appId: "1:332144375900:web:1ca4e14056ebfbf7198e99",
  measurementId: "G-FQWVBP9C40",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
