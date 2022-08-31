// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCDr7FrJ5y5B2JPxDvgYE7oX29Qd8W1H1k",
    authDomain: "fir-auth-basic-19f8c.firebaseapp.com",
    projectId: "fir-auth-basic-19f8c",
    storageBucket: "fir-auth-basic-19f8c.appspot.com",
    messagingSenderId: "806830685057",
    appId: "1:806830685057:web:ebe5e71b12f57c186fc680"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;