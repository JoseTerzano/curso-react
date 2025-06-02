// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWe2yMn27CB-6NwRoOyseFsa2qcv9K728",
  authDomain: "curso-react-7f687.firebaseapp.com",
  projectId: "curso-react-7f687",
  storageBucket: "curso-react-7f687.firebasestorage.app",
  messagingSenderId: "183692880169",
  appId: "1:183692880169:web:1351dbebbb5a4e3497af38"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth( FirebaseApp );

export const FirebaseDB = getFirestore( FirebaseApp );