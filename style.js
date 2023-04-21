const { initializeApp } = require('firebase-admin/app');

import { initializeApp } from '../node-modules/firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAZLb_WBUpdheypw4RsCnQ-hyqx30j1Xfc",
    authDomain: "petfinder-fp.firebaseapp.com",
    databaseURL: "https://petfinder-fp-default-rtdb.firebaseio.com",
    projectId: "petfinder-fp",
    storageBucket: "petfinder-fp.appspot.com",
    messagingSenderId: "17525799636",
    appId: "1:17525799636:web:34696046c6dd3ed32a9941",
    measurementId: "G-6D39BMTZNV"
    });

const app = initializeApp(firebaseConfig);
// import firebaseApp from "/node-modules/firebase/app";
// const auth = firebase.auth();