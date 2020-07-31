 import firebase from 'firebase/app';
 import 'firebase/firestore';
 import 'firebase/auth';
 
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyDbr-Zfzjun_hvKgq15-Tx2JYVdZdDtiaY",
    authDomain: "todo-9d097.firebaseapp.com",
    databaseURL: "https://todo-9d097.firebaseio.com",
    projectId: "todo-9d097",
    storageBucket: "todo-9d097.appspot.com",
    messagingSenderId: "851234031577",
    appId: "1:851234031577:web:6848cfc6d7c5d1824c3bc8",
    measurementId: "G-XBPCDDLHTS"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;