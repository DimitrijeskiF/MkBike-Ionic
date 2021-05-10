importScripts('https://www.gstatic.com/firebasejs/8.5.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.5.0/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyCjXpOesJRByR51Fcl1-EzsznRG7SA3Aik",
    authDomain: "mkbike-135bf.firebaseapp.com",
    databaseURL: "https://mkbike-135bf-default-rtdb.firebaseio.com",
    projectId: "mkbike-135bf",
    storageBucket: "mkbike-135bf.appspot.com",
    messagingSenderId: "580385332577",
    appId: "1:580385332577:web:1192d2b6fc4fe803c67920"
});

const messaging = firebase.messaging();