// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUtNGOM7SXZ9fkse_1ZUapIlVh7zQrQpA",
  authDomain: "curso-react-7d21f.firebaseapp.com",
  projectId: "curso-react-7d21f",
  storageBucket: "curso-react-7d21f.appspot.com",
  messagingSenderId: "1089651926467",
  appId: "1:1089651926467:web:14babe948d6daabd21c976"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);