// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVuq6Cnl7Y_zHtVK2A8A6f52EH9C97M-s",
  authDomain: "inventory-management-app-84129.firebaseapp.com",
  projectId: "inventory-management-app-84129",
  storageBucket: "inventory-management-app-84129.appspot.com",
  messagingSenderId: "408528015940",
  appId: "1:408528015940:web:46bc3e65f449b26cc1e211",
  measurementId: "G-1PDKT63XJQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const analytics = getAnalytics(app);

export {app, firestore};        