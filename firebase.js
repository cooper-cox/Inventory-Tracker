// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADDQWUA5pzJ8K-DSUVItldkwA4acaYFNI",
  authDomain: "inventory-project-72979.firebaseapp.com",
  projectId: "inventory-project-72979",
  storageBucket: "inventory-project-72979.appspot.com",
  messagingSenderId: "70786634044",
  appId: "1:70786634044:web:404d6a054a44b0c8ec0e39",
  measurementId: "G-1CC3GSC3GP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {firestore}