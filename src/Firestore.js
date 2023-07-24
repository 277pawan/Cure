import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCby_Er-aH3XWabfi-MPB6O6HRqP94x7xU",
    authDomain: "cure-77587.firebaseapp.com",
    projectId: "cure-77587",
    storageBucket: "cure-77587.appspot.com",
    messagingSenderId: "574213888926",
    appId: "1:574213888926:web:2dcbb0dd023eb67d6fd48f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
export { app, auth, provider };