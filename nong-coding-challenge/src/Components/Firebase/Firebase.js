import firebase from "firebase/app";
import "/firebase/auth";
import "/firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyBTy53xCbhFkCDkUcSc5xhOb7Ms84Fe3Is",
    authDomain: "nong-coding-challenge.firebaseapp.com",
    databaseURL: "https://nong-coding-challenge.firebaseio.com",
    projectId: "nong-coding-challenge",
    storageBucket: "nong-coding-challenge.appspot.com",
    messagingSenderId: "147355604530",
    appId: "1:147355604530:web:c8cee4698bf52ad1344e2b",
    measurementId: "G-Q3412VRFES",
  };
  
  firebase.initializeApp(firebaseConfig)