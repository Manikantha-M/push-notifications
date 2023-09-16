importScripts("https://www.gstatic.com/firebasejs/10.4.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.4.0/firebase-messaging-compat.js");

const firebaseConfig = {
    apiKey: "AIzaSyCd1m6XXAlwOhyt3pWj0bVtVVyZBOYReds",
    authDomain: "push-notifications-501c9.firebaseapp.com",
    projectId: "push-notifications-501c9",
    storageBucket: "push-notifications-501c9.appspot.com",
    messagingSenderId: "350655918298",
    appId: "1:350655918298:web:604134a5671b30935435e3",
    measurementId: "G-BJNG5VYP8G"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Uncomment if you want to use the messaging instance
// const messaging = firebase.messaging();