// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoQo4pYtFeDPu67L1uDzxYiD_hwgX742U",
  authDomain: "tracker-a6607.firebaseapp.com",
  projectId: "tracker-a6607",
  storageBucket: "tracker-a6607.appspot.com",
  messagingSenderId: "825112001480",
  appId: "1:825112001480:web:b8c4fb20ad066a38f85efd",
  measurementId: "G-7V5DZ91T15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)

// npm install -g firebase-tools

// firebase login

// firebase init

// firebase init

// firebase deploy