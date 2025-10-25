// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCzw-hdQtJFfhnyMk4Cmiw9oHygQElOgiI",
    authDomain: "react-firebase-authintre-fa159.firebaseapp.com",
    projectId: "react-firebase-authintre-fa159",
    storageBucket: "react-firebase-authintre-fa159.firebasestorage.app",
    messagingSenderId: "596181385125",
    appId: "1:596181385125:web:77e53ad823851b278df24c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);