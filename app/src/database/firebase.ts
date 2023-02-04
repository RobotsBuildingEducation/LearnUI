import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyByci0j0u36PaK_2RNpOoC2QHq_Yi2pVhY",
  authDomain: "learn-robotsbuildingeducation.firebaseapp.com",
  projectId: "learn-robotsbuildingeducation",
  storageBucket: "learn-robotsbuildingeducation.appspot.com",
  messagingSenderId: "1016937880040",
  appId: "1:1016937880040:web:e9b478e361cafc4e61ec5d",
  measurementId: "G-N0MK759NHN",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// this connects to the firestore database.
const firestoreDB = app.firestore();
const firebaseAuth = firebase.auth();

// export these variables - allow them to be retrieved by other files in your codebase.
export { firestoreDB, firebaseAuth };
