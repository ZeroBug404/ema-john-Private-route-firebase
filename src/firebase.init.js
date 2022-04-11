// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsH5SgnAqmAws3JjxlYmBshTkXEkAIlY4",
  authDomain: "ema-john-simple-50267.firebaseapp.com",
  projectId: "ema-john-simple-50267",
  storageBucket: "ema-john-simple-50267.appspot.com",
  messagingSenderId: "400770639347",
  appId: "1:400770639347:web:7ed37973b4173f2f185e86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;