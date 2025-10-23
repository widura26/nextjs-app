// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVqb_uSAmzSYRO8PfQq95oTgk9mymf5Ig",
  authDomain: "biro-jodoh-89985.firebaseapp.com",
  projectId: "biro-jodoh-89985",
  storageBucket: "biro-jodoh-89985.firebasestorage.app",
  messagingSenderId: "875182181863",
  appId: "1:875182181863:web:7050849aa5f1c986e54142",
  measurementId: "G-7YXQD7WF9D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);