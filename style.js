// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, getDocs, getDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZLb_WBUpdheypw4RsCnQ-hyqx30j1Xfc",
  authDomain: "petfinder-fp.firebaseapp.com",
  databaseURL: "https://petfinder-fp-default-rtdb.firebaseio.com",
  projectId: "petfinder-fp",
  storageBucket: "petfinder-fp.appspot.com",
  messagingSenderId: "17525799636",
  appId: "1:17525799636:web:34696046c6dd3ed32a9941",
  measurementId: "G-6D39BMTZNV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const db = getFirestore(app);
// const db.collection('todos').getDocs();
// const todosCol = collection(db, 'todos');
// const snapshot = await getDocs(todosCol);

onAutoStateChanged(auth, user => {
    if(user !== null){
        console.log('logged in!');
    } else {
        console.log('No user');
    }
});