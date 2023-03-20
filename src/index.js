import { intializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";
// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyCiwTe05z2M9VfbIFGJ8eAgXbuc4y77zP8",
    authDomain: "fp-pet-finder.firebaseapp.com",
    databaseURL: "https://fp-pet-finder-default-rtdb.firebaseio.com",
    projectId: "fp-pet-finder",
    storageBucket: "fp-pet-finder.appspot.com",
    messagingSenderId: "35132024507",
    appId: "1:35132024507:web:11a985555dd7e2c6f76b9e",
    measurementId: "G-YGWQHTCER7"

  };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);


 // Initialize Realtime Database and get a reference to the service
 const database = getDatabase(app);
