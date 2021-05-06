import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAplJqeZQwfa0faGTtldSBekVHFJ2sl5ps",
    authDomain: "react-app-775cb.firebaseapp.com",
    projectId: "react-app-775cb",
    storageBucket: "react-app-775cb.appspot.com",
    messagingSenderId: "520228550104",
    appId: "1:520228550104:web:f2af5042bda19c18e96ead"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {
      db, 
      googleAuthProvider,
      firebase
  }