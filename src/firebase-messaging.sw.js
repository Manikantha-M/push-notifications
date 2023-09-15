// importScripts("https://www.gstatic.com/firebasejs/10.4.0/firebase-app-compat.js");
// importScripts("https://www.gstatic.com/firebasejs/10.4.0/firebase-messaging-compat.js");
import { initializeApp, firebase } from "firebase/app";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCd1m6XXAlwOhyt3pWj0bVtVVyZBOYReds",
    authDomain: "push-notifications-501c9.firebaseapp.com",
    projectId: "push-notifications-501c9",
    storageBucket: "push-notifications-501c9.appspot.com",
    messagingSenderId: "350655918298",
    appId: "1:350655918298:web:604134a5671b30935435e3",
    measurementId: "G-BJNG5VYP8G"
};
const firebaseapp = initializeApp({firebaseConfig});
const messaging = firebase.messaging();
// firebase.initializeApp({firebaseConfig});
// initializeApp