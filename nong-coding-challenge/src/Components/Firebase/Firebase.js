const firebase = require("firebase");
require ("firebase/firestore");

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
  
  firebase.initializeApp({
    apiKey: "AIzaSyBTy53xCbhFkCDkUcSc5xhOb7Ms84Fe3Is",
    authDomain: "nong-coding-challenge.firebaseapp.com",
    projectId: "nong-coding-challenge"

  })

  let db = firebase.firestore;

  db.collection("notes").add({
      date: "",
      name: "",
      note: ""
  }).then(function(docRef){
      console.log("document written with id:", docRef.id)
  }).catch(function(error) {
      console.log("error adding document:", error)
  });

  db.collection("notes").get().then((querySnapshot) => {
         querySnapshot.forEach((doc) => {
             console.log(`${doc.id} => ${doc.data()}`)
         });
  });
  