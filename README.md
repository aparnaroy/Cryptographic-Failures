# Cryptographic-Failures

A CTF problem demonstrating CRYPTOGRAPHIC FAILURES.

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyBX-\_wi1E2Tixv_rgSnW8NvcGUkmNpaD9U",
authDomain: "sleuthy-sloth.firebaseapp.com",
databaseURL: "https://sleuthy-sloth-default-rtdb.firebaseio.com",
projectId: "sleuthy-sloth",
storageBucket: "sleuthy-sloth.firebasestorage.app",
messagingSenderId: "840453497728",
appId: "1:840453497728:web:920b663a9a346840f71765",
measurementId: "G-SG8S13W5RK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
