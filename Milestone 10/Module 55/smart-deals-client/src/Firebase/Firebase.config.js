// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHQIp57nfHe4E6FSHzKymlOQAE_8NckXc",
  authDomain: "smart-deals-56b40.firebaseapp.com",
  projectId: "smart-deals-56b40",
  storageBucket: "smart-deals-56b40.firebasestorage.app",
  messagingSenderId: "683061786225",
  appId: "1:683061786225:web:a8772977d98e8cd5734dd0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);