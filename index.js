// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAZLb_WBUpdheypw4RsCnQ-hyqx30j1Xfc",
//   authDomain: "petfinder-fp.firebaseapp.com",
//   databaseURL: "https://petfinder-fp-default-rtdb.firebaseio.com",
//   projectId: "petfinder-fp",
//   storageBucket: "petfinder-fp.appspot.com",
//   messagingSenderId: "17525799636",
//   appId: "1:17525799636:web:34696046c6dd3ed32a9941",
//   measurementId: "G-6D39BMTZNV"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// import { getDatabase, ref, set } from "firebase/database";

// // objects
// let obj = {
//   longitude:
//   latitude:
// }

// function writeUserData(location, longitude, latitude) {
//   const db = getDatabase();
//   set(ref(db, 'location/' + location), {
//     longitude: longitude,
//     latitude: latitude,
//   });
// }

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
  // import { initializeApp } from "/node-modulesfirebase/app";
  // firebase.initializeApp(firebaseApp);
  // import { getAuth, createUserWithEmailAndPassword } from "/node-modules/firebase/auth";

  import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js'

  // If you enabled Analytics in your project, add the Firebase SDK for Google Analytics
  import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.20.0/firebase-analytics.js'

  // Add Firebase products to use
  import {
      getAuth,
      createUserWithEmailAndPassword,
      signInWithEmailAndPassword,
      GoogleAuthProvider,
      updateEmail
  } from 'https://www.gstatic.com/firebasejs/9.20.0/firebase-auth.js'
  import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.20.0/firebase-firestore.js'

  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  const myData = localStorage.getItem('name-trans');
  var error = document.querySelector("#error");
  const userDetails = document.querySelector("#userDetails");
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value

  export { email, password};

  //Connect with google database
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  googleProvider.addScope('https://www.googleapis.com/auth/contacts.readonly');

  auth.languageCode = firebase.auth().useDeviceLanguage();
      // To apply the default browser preference instead of explicitly setting it.
      // firebase.auth().useDeviceLanguage()


  document.querySelector('#submit').addEventListener('click',signup);

  function signup(){
      const long = localStorage.getItem('long-trans')
      const lat = localStorage.getItem('lat-trans')
      console.log(email, password)

      auth.createUserWithEmailAndPassword(email, password)//new accounts
      .then((result) => {
          // Access Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          // IdP data available using getAdditionalUserInfo(result)
          // ...
      })
      //firestore here
      .then((cred) => {
          console.log(res.user)
          return collection(db,'users').doc(cred.user.uid).set({
              // Longitude: long
              // Latitude: lat
              })
          })
      .catch((err) => {
          console.log(err.code)
          console.log(err.message)
          // error.innerHTML = "Email already taken."
          // alert("Email already")
          // The email of the user's account used.
          // The AuthCredential type that was used.
      })
  }


  document.querySelector('#login-btn').addEventListener('click',loginUser);
  document.querySelector('#logout-btn').addEventListener('click', logoutUser);

  document.querySelector('#loginScreen').style.display = "block"
  document.querySelector('#dashboard').style.display = "none"

  function loginUser(){
      const email = document.getElementById('emailB').value
      const password = document.getElementById('passwordB').value
      const long = localStorage.getItem('long-trans')
      const lat = localStorage.getItem('lat-trans')
      console.log(email, password)

      firebase.auth().signInWithEmailAndPassword(email, password).catch(function(err) {
          console.log(err)
          alert("Please write a valid email/valid password");//make this into a popup
          // error.innerHTML = "Invalid email or password"
      })
  }

  function logoutUser(){
      firebase.auth().signOut().then(()=>{

      }).catch(e=>{
          console.log(e)
      })
  }

  function showUserData(user){
      document.getElementById('userDetails').innerHTML = "Logged in Successful"
  }

  firebase.auth().onAuthStateChanged(function(user){
          if(user){
              console.log(user)
              showUserData();
              document.querySelector('#loginScreen').style.display = "none"
              document.querySelector('#dashboard').style.display = "block"
          }else{
              document.querySelector('#loginScreen').style.display = "block"
              document.querySelector('#dashboard').style.display = "none"
      }
  })

  var user = firebase.auth().currentUser;//Gets current signed in data